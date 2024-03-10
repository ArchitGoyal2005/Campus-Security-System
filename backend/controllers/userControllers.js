import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import { getAll, getOne, createOne, deleteOne } from "./handlerFactory.js";

export const getAllUsers = getAll(User);
export const getOneUser = getOne(User);
export const deleteOneUser = deleteOne(User);
export const createUser = catchAsync(async (req, res, next) => {
  if (req.body.roles === "admin")
    return next(
      new AppError("You do not have permission to signup as a moderator", 401)
    );

  if (!req.body.password) {
    req.body.password = req.body.passwordConfirm =
      req.body.mobileNumber.toString();
  }

  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
