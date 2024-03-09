import User from "../models/userModel.js";
import { getAll, getOne, deleteOne } from "./handlerFactory.js";

export const getAllUsers = getAll(User);
export const getOneUser = getOne(User);
export const deleteOneUser = deleteOne(User);
export const searchByMobileNo = getAll(User);
