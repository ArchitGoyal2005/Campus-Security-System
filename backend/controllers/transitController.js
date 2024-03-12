import { Transit } from "../models/transitModel.js";
import { createOne, getAll, getOne, updateOne } from "./handlerFactory.js";

export const createTransit = createOne(Transit);
export const getTransits = getAll(Transit);
export const getTransit = getOne(Transit);
export const updateTransit = updateOne(Transit);
