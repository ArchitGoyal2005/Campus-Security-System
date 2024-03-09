import express from "express";
import { protect, restrictTo } from "../controllers/authControllers.js";
import { createTag, getTag, updateTag } from "../controllers/tagConrollers.js";
const Router = express.Router();

Router.post("/", createTag);
Router.get("/:id", getTag);
Router.patch("/:id", updateTag);
export default Router;
