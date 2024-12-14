import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: {
      required: true,
      unique: true,
      type: String,
      lowercase: true,
    },

    email: {
      required: true,
      unique: true,
      type: String,
      lowercase: true,
    },

    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
