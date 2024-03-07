import express from "express";

import { signUp, login } from "../controllers/authControllers.js";

const Router = express.Router(); // Change this line

Router.post("/signup", signUp);
Router.post("/login", login);

export default Router;
