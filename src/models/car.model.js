import mongoose from "mongoose";
const { Schema } = mongoose;

const CarsSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["gasoline", "diesel", "electric", "hybrid"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    imageUrl: String,
    status: {
      type: String,
      enum: ["available", "reserved", "sold"],
      default: "available",
    },
    discountPrice: {
      type: Number,
      default: null,
    },
    discountPercent: {
      type: Number,
      default: null,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const CarModel = mongoose.model("car", CarsSchema);
export default CarModel;
