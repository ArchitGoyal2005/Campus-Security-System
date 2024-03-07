import User from "../models/usermodels.js";
import { promisify } from "util";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";
import express from "express";

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
  const newUser = await User.create({
    name: req.body.email,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(newUser, 201, res);
});
