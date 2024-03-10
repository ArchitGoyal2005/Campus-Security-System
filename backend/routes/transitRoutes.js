import { express } from "express";
import {
  getTransit,
  createTransit,
  getTransits,
  updateTransit,
} from "../controllers/transitController";
import { protect, restrictTo } from "../controllers/authControllers";
const Router = express.Router();
Router.get("/", protect, restrictTo("guard"), getTransits);
Router.get("/:id", protect, restrictTo("guard"), getTransit);
Router.post("/", protect, restrictTo("guard"), createTransit);
Router.patch("/", protect, restrictTo("guard"), updateTransit);
