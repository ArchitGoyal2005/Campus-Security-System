import express from "express";

import {
  signUp,
  login,
  protect,
  getMe,
} from "../controllers/authControllers.js";
import {
  getAllUsers,
  getOneUser,
  createUser,
} from "../controllers/userControllers.js";

const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);
Router.get("/getMe", protect, getMe);
Router.post("/", createUser);
Router.get("/", protect, getAllUsers);
Router.get("/:id", protect, getOneUser);

export default Router;
