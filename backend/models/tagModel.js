import mongoose, { Mongoose } from "mongoose";

const tagSchema = mongoose.Schema(
  {
    tagID: {
      type: String,
      trim: true,
      unique: true,
      require: [true, "There must be a tagID"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: [true, "A Tag must belong to a user"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    placeOfVisit: {
      type: String,
    },
    puproseOfVisit: {
      type: String,
    },
  },
  underSupervisionOf: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
