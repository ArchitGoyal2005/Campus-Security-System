import Tag from "../models/tagModel.js";
import { createOne, getOne } from "./handlerFactory.js";
import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";

// const checkUser = (req, next) => {
//   req.body.user = req.body.user;
//   next();
// };
export const createTag = createOne(Tag);
export const getUserByTag = getOne(Tag);
