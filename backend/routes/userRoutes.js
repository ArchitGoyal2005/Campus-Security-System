import express from "express";
import fs from "fs";
import { Module } from "module";
import { DefaultDeserializer } from "v8";
import { signUp } from "../controllers/authControllers.js";
const Router = express.Router(); // Change this line
Router.post("/signup", signUp);

export default Router;
