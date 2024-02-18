import Link from "next/link";
import React from "react";
import Menu from "./menu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Header = async () => {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/signin");
  // }
  return (
    <header>
      <nav className="navbar bg-slate-200 justify-between ">
        <Link href="/" className="btn btn-ghost text-lg">
          AJ Cloth Shop
        </Link>
        <p>{JSON.stringify(session)}</p>
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
