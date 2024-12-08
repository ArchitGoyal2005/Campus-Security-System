import express from "express";
import {
  getTransit,
  createTransit,
  getTransits,
  updateTransit,
  getTransitByRoles,
} from "../controllers/transitController.js";
import { protect, restrictTo } from "../controllers/authControllers.js";
const Router = express.Router();
Router.get("/", protect, getTransits);
Router.get("/roles", getTransitByRoles);
Router.get("/:id", protect, getTransit);
Router.post("/", createTransit);
Router.patch("/", protect, updateTransit);

export default Router;
