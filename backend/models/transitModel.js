import mongoose from "mongoose";

const transitSchema = mongoose.Schema(
  {
    entryGate: {
      type: Number,
    },
    exitGate: {
      type: Number,
    },
    entryTime: {
      type: Date,
    },
    exitTime: {
      type: Date,
    },
    tag: {
      type: mongoose.Schema.ObjectId,
      ref: "Tag",
      require: [true, "A transit can't be done without a tagId"],
    },
    vehicleNumber: String,
    tagID: String,
    userName: String,
    userRole: String,
    userMobile: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

transitSchema.post("save", async function () {
  const transit = this.constructor;
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
        tagID: "$tagData.tagID",
        userName: "$user.name",
        userRole: "$user.roles",
        userMobile: "$user.mobileNumber",
      },
    },
  ]);
  this.tagID = result[0].tagID;
  this.userName = result[0].userName;
  this.userMobile = result[0].userMobile;
  this.userRole = result[0].userRole;
  this.save();
});

export const Transit = mongoose.model("Transit", transitSchema);
