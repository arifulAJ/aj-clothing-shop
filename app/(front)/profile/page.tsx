import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import React from "react";
import ProfileData from "./profileData";

import userServices from "@/lib/services/userServices";
import Link from "next/link";

export const metadata = {
  title: "user profile",
};
const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as { _id: string };
  const userId = user._id;

  const users = await userServices.getUserById(userId);

  return (
    <div>
      <ProfileData users={users} />
    </div>
  );
};

export default ProfilePage;
