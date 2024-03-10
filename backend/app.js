import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import AppError from "./utils/AppError.js";
import userRoutes from "./routes/userRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";
import trasitRoutes from "./routes/transitRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.get("/", (req, res, next) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.use(`/api/v1/users`, userRoutes);
app.use(`/api/v1/tag`, tagRoutes);
app.use(`api/v1/transit`, trasitRoutes);

app.use("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

export default app;
