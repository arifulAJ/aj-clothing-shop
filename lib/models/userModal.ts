import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
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
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },

    image: {
      type: String,
      required: true,
      default:
        "https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png", // Adjust the type based on your use case (e.g., URL or base64)
    },
  },

  {
    timestamps: true,
  }
);

const UserModel = mongoose.models?.User || mongoose.model("User", userSchema);

export default UserModel;

export type users = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
};
