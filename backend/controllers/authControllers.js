import User from "../models/usermodels.js";

import { promisify } from "util";
import jwt from "jsonwebtoken";

import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_CODE, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  console.log(expiresIn);
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    cookieOption.secure = true;
  }
  res.cookie("jwt", token, cookieOption);
  res.status(statusCode).json({
    statusbar: "success",
    token: token,
    data: {
      user,
    },
  });
};
export const signUp = catchAsync(async (req, res, next) => {
  if (req.body.roles === "admin" || req.body.roles === "guard")
    return next(
      new AppError("You do not have permission to signup as a moderator", 401)
    );
  const newUser = await User.create(req.body);
  createSendToken(newUser, 201, res);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("please provide your email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  console.log(user);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError("The e-mail does not exists or password does not match", 401)
    );
  }
  createSendToken(user, 201, res);
  const token = signToken(user._id);
});

export const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
  }
  if (!token) {
    return next(
      new AppError("you are not  logged in please login to get toekn!! ", 401)
    );
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_CODE);
  console.log(decoded);

  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError(
        `the user belonging to this token does not exist anymore`,
        401
      )
    );
  }

  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please login again", 401)
    );
  }

  req.user = freshUser;
  next();
});

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return next(
        new AppError("you do not have permission to perfoem this", 403)
      );
    }
    next();
  };
};
