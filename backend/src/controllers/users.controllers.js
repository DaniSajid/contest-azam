import { User } from "../models/users.models.js";
import { generateToken, verifyToken } from "../helper/helper.js";
import bcrypt from "bcrypt";

const handleCreateUser = (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = 10;
  try {
    const user = User({ email, name, password });

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        user.save().then(() => {
          const token = generateToken({ email });
          res
            .status(201)
            .json({ message: "User created successfully!", user, token });
        });
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

const handlCheckUser = (req, res, next) => {
  const { token } = req.body;
  verifyToken(token);
};

const handleLogin = (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User({ email, password });
    user.save();
    res.status(200).json({ message: "Token successfully verified. Welocome!" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

const handleUpdateUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const updatedUser = { name, email, password };
    const user = await User.findByIdAndUpdate(req.params.id, updatedUser);
    res.status(200).json({ message: "user updated succcessfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

const handleGetAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting all users", error });
  }
};

const handleGetSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting single user", error });
  }
};

export {
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
  handleGetAllUsers,
  handleGetSingleUser,
  handleLogin,
  handlCheckUser,
};
