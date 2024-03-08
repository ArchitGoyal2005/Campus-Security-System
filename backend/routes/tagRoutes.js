import express from "express";
import { protect, restrictTo } from "../controllers/authControllers.js";
import { createTag, getUserByTag } from "../controllers/tagConrollers.js";
const Router = express.Router();

Router.post("/", protect, restrictTo("guard"), createTag);
Router.get("/:id", protect, restrictTo("guard"), getUserByTag);
export default Router;
