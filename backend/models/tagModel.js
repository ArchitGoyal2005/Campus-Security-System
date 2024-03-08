import mongoose, { Mongoose } from "mongoose";

const tagSchema = mongoose.Schema(
  {
    tagID: {
      type: String,
      trim: true,
      require: [true, "There must be a tagID"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: [true, "A review must belong to a user"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
