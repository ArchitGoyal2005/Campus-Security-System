import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import { getAll, getOne, createOne, deleteOne } from "./handlerFactory.js";

export const getAllUsers = getAll(User);
export const getOneUser = getOne(User);
export const deleteOneUser = deleteOne(User);
export const createUser = catchAsync(async (req, res, next) => {
  req.body.forEach((user) => {
    if (user.roles === "admin")
      return next(
        new AppError("You do not have permission to signup as a moderator", 401)
      );

    if (!user.password) {
      console.log(user);
      user.password = user.passwordConfirm = user.mobileNumber.toString();
    }
    if (!user.passwordConfirm) {
      user.passwordConfirm = user.password;
    }
  });

  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
