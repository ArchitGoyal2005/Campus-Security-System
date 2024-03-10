import express from "express";

import { signUp, login } from "../controllers/authControllers.js";
import {
  getAllUsers,
  getOneUser,
  deleteOneUser,
} from "../controllers/userControllers.js";

const Router = express.Router();

Router.post("/signup", signUp);
Router.post("/login", login);
Router.get("/", getAllUsers);
Router.get("/:id", getOneUser);
Router.delete("/:id", deleteOneUser);

export default Router;
