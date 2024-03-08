import express from "express";

import { signUp, login } from "../controllers/authControllers.js";
import {
  getAllUsers,
  getOneUser,
  deleteOneUser,
} from "../controllers/userControllers.js";

console.log(getAllUsers);
const Router = express.Router(); // Change this line

Router.post("/signup", signUp);
Router.post("/login", login);
Router.get("/", getAllUsers);
Router.get("/:id", getOneUser);
Router.delete("/:id", deleteOneUser);

export default Router;
