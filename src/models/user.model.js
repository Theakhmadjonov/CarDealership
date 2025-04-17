import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
