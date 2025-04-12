import mongoose from "mongoose";
const { Schema } = mongoose;

const ReservationsSchema = new Schema(
  {
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "car",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    reservedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);
const ReservationModel = mongoose.model("reservation", ReservationsSchema);
export default ReservationModel;
