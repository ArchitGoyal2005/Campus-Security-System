import express from "express";
import {
  createTransit,
  getTransits,
  getTransit,
  updateTransit,
} from "../controllers/transitController.js";
import { protect, restrictTo } from "../controllers/authControllers.js";
const Router = express.Router();
<<<<<<< HEAD
Router.get("/", protect, getTransits);
Router.get("/:id", protect, getTransit);
Router.post("/", protect, createTransit);
Router.patch("/", protect, updateTransit);
=======
Router.get("/", protect, restrictTo("guard"), getTransits);
Router.get("/:id", protect, restrictTo("guard"), getTransit);
Router.post("/", protect, restrictTo("guard"), createTransit);
Router.patch("/", protect, restrictTo("guard"), updateTransit);
export default Router;
>>>>>>> d237235c1948f531dfbd3cdd6ad4a68f16a44625
