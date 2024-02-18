"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()} className="bg-orange-300">
        {" "}
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
