import express from "express";

import { signUp, login, protect } from "../controllers/authControllers.js";
import {
  getAllUsers,
  getOneUser,
  deleteOneUser,
  createUser,
} from "../controllers/userControllers.js";

const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);
Router.post("/", protect, createUser);
Router.get("/", protect, getAllUsers);
Router.get("/:id", protect, getOneUser);

export default Router;
