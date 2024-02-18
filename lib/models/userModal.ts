import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      required: [true, "Please provide your name"],
    },
    email: {
      type: Schema.Types.String,
      required: [true, "Please provide your email address"],
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: [true, "Please provide a password"],
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models?.User || mongoose.model("User", UserSchema);
export default UserModel;
