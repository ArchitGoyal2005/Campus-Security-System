import express from "express";
import {
  createTransit,
  getTransits,
  getTransit,
  updateTransit,
} from "../controllers/transitController.js";
import { protect, restrictTo } from "../controllers/authControllers.js";
const Router = express.Router();
Router.get("/", protect, restrictTo("guard"), getTransits);
Router.get("/:id", protect, restrictTo("guard"), getTransit);
Router.post("/", protect, restrictTo("guard"), createTransit);
Router.patch("/", protect, restrictTo("guard"), updateTransit);
export default Router;
