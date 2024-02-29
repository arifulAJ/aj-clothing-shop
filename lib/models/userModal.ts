import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: Schema.Types.String,
      required: [true, "Please provide your name"],
    },
    last: {
      type: Schema.Types.String,
      required: [true, "Please provide your name"],
      default: "amin",
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
    isAdmin: { type: Schema.Types.Boolean, required: true, default: false },
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
