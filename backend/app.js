import express from "express";
import cors from "cors";
import AppError from "./utils/AppError.js";
import userRoutes from "./routes/userRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/tag`, tagRoutes);

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

export default app;
