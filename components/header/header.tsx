import Link from "next/link";
import React from "react";
import Menu from "./menu";

const Header = () => {
  return (
    <header>
      <nav className="navbar justify-between bg-base-300">
        <Link href="/" className="btn btn-ghost text-lg">
          AJ Cloth Shop
        </Link>
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
