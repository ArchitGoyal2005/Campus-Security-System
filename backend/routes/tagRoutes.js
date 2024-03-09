import express from "express";
import { protect, restrictTo } from "../controllers/authControllers.js";
import {
  createTag,
  getUserByid,
  setIsActive,
} from "../controllers/tagConrollers.js";
const Router = express.Router();

Router.post("/", protect, restrictTo("guard"), createTag);
Router.get("/:id", protect, restrictTo("guard"), getUserByid);
Router.patch("/:id", setIsActive);
export default Router;
