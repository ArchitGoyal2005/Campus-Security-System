import express from "express";
import { createTag } from "../controllers/tagConrollers.js";
const Router = express.Router();

Router.post("/", createTag);
export default Router;
