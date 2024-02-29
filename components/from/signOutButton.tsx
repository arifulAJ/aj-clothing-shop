"use client";
import { signOut } from "next-auth/react";
import React from "react";

import useCartService from "@/lib/hooks/useCartStore";

const SignOutButton = () => {
  const { init } = useCartService();
  const signoutHandeler = () => {
    signOut({ callbackUrl: "/signin" });
    init();
  };
  return (
    <div>
      <li>
        <button onClick={() => signoutHandeler()} className="text-center ">
          {" "}
          Sign Out
        </button>
      </li>
    </div>
  );
};

export default SignOutButton;
