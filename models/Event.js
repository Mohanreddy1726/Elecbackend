const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  KWHO: {
    type: String,
    required: [true, "KWHO is required"],
  },
  KWHC: {
    type: String,
    required: [true, "KWHC is required"],
  },
  KVAHO: {
    type: String,
    required: [true, "KVAHO is required"],
  },
  KVAHC: {
    type: String,
    required: [true, "KVAHC is required"],
  },
  KVA: {
    type: String,
    required: [true, "KVA is required"],
  },
  KWH: {
    type: String,
    required: [true, "KWH is required"],
  },
  KVAH: {
    type: String,
    required: [true, "KVAH is required"],
  },
  loses: {
    type: String,
    required: [true, "loses is required"],
  },
  KVAT: {
    type: String,
    required: [true, "KVAT is required"],
  },
  start: {
    type: Date,
    required: [true, "Start date is required"],
  },
  end: {
    type: Date,
    required: [true, "End date is required"],
  },
  notes: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
});

EventSchema.methods.toJSON = function () {
  const { __v, ...event } = this.toObject();
  return event;
};

module.exports = model("Event", EventSchema);
