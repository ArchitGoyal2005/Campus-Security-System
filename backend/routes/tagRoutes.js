import express from "express";
import { protect, restrictTo } from "../controllers/authControllers.js";
import { createTag, getTag, updateTag } from "../controllers/tagConrollers.js";
const Router = express.Router();

Router.post("/", protect, createTag);
Router.get("/:id", protect, getTag);
Router.patch("/:id", protect, updateTag);
export default Router;
