import Tag from "../models/tagModel.js";
import { createOne, getOne, UpdateOne } from "./handlerFactory.js";
import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import { login } from "./authControllers.js";

export const createTag = createOne(Tag);
export const getUserByid = getOne(Tag);
export const setIsActive = UpdateOne(Tag);
