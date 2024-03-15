import { Transit } from "../models/transitModel.js";
import catchAsync from "../utils/catchAsync.js";
import { createOne, getAll, getOne, updateOne } from "./handlerFactory.js";

export const createTransit = createOne(Transit);
export const getTransits = getAll(Transit);
export const getTransit = getOne(Transit);
export const updateTransit = updateOne(Transit);

export const getTransitByRoles = catchAsync(async (req, res, next) => {
  const result = await Transit.aggregate([
    {
      $lookup: {
        from: "tags",
        localField: "tag",
        foreignField: "_id",
        as: "tagData",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "tagData.user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user", // Unwind the "user" array
    },
    {
      $unwind: "$tagData", // Unwind the "user" array
    },
    {
      $project: {
        _id: 1,
        entryGate: 1,
        exitGate: 1,
        entryTime: 1,
        exitTime: 1,
        tag: 1,
        tagID: "$tagData.tagID",
        createdAt: 1,
        updatedAt: 1,
        userName: "$user.name",
        userRole: "$user.roles",
        userMobile: "$user.mobileNumber",
        vehicleNumber: 1,
      },
    },
  ]);
  res.status(200).json({
    result,
  });
});
