import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (data) => {
  return jwt.sign(data, process.env.SECRET_KEY);
};

const verifyToken = (token, res, next) => {
  return jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ message: "Invalid Token!" });
    } else {
      console.log(data);
      next();
    }
  });
};

export { generateToken, verifyToken };
