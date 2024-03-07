import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import { getAll, getOne, createOne, deleteOne } from "./handlerFactory.js";

export const getAllUsers = getAll(User);
export const getOneUser = getOne(User);
export const deleteOneUser = deleteOne(User);
