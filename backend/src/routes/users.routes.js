import express from "express";
import {
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
  handleGetAllUsers,
  handleGetSingleUser,
  handleLogin,
  handlCheckUser,
} from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/register", handleCreateUser);
router.post("/login", handlCheckUser, handleLogin);
router.put("/edituser", handleUpdateUser);
router.delete("/deleteuser", handleDeleteUser);
router.get("/", handleGetAllUsers);
router.get("/:id", handleGetSingleUser);

export default router;
