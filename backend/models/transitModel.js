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
    placeOfVisit: {
      type: String,
    },
    puproseOfVisit: {
      type: String,
    },
    tag: {
      type: mongoose.Schema.ObjectId,
      ref: "Tag",
      require: [true, "A transit can't be done without a tagId"],
    },
    vehicleNumber: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const Transit = mongoose.model("Transit", transitSchema);
