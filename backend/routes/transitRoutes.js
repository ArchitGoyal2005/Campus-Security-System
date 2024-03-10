import { express } from "express";
import {
  getTransit,
  createTransit,
  getTransits,
  updateTransit,
} from "../controllers/transitController";
import { protect, restrictTo } from "../controllers/authControllers";
const Router = express.Router();
Router.get("/", protect, getTransits);
Router.get("/:id", protect, getTransit);
Router.post("/", protect, createTransit);
Router.patch("/", protect, updateTransit);
