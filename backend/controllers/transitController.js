import { Transit } from "../models/transitModel";
import { createOne, getAll, getOne, updateOne } from "./handlerFactory";

export const createTransit = createOne(Transit);
export const getTransits = getAll(Transit);
export const getTransit = getOne(Transit);
export const updateTransit = updateOne(Transit);
