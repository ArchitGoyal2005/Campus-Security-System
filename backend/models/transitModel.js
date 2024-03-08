import mongoose from "mongoose";

const transitSchema = mongoose.Schema({
  entryGate: {
    type: Number,
  },
  exitGate: {
    type: Number,
  },
  entryTime: {},
  exitTime: {},
  placeOfVisit: {},
  puproseOfVisit: {},
});
