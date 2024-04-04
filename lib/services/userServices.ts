import { cache } from "react";
import dbConnect from "@/lib/dbConnect";
import UserModel, { users } from "@/lib/models/userModal";

const getallUser = cache(async () => {
  await dbConnect();
  const user = await UserModel.find({}).sort({ _id: -1 });

  return user as users[];
});
const getUserById = cache(async (userId: string) => {
  await dbConnect();
  const user = await UserModel.findById(userId);

  return user as users;
});

const userServices = {
  getallUser,
  getUserById,
};
export default userServices;
