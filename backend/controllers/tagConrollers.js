import Tag from "../models/tagModel.js";
import { createOne, getOne, updateOne } from "./handlerFactory.js";

export const createTag = createOne(Tag);
export const getTag = getOne(Tag);
export const updateTag = updateOne(Tag);
