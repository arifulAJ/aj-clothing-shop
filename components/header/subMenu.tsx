import Link from "next/link";
import React from "react";

const SubMenu = () => {
  return (
    <div className="flex justify-between bg-custom-bg-nav ">
      <div className="flex flex-row">
        <p>location</p>
        <p>store of the asse</p>
      </div>
      <div className=" md:flex flex-row  text-white  hidden">
        <Link href="/">
          <p className="mr-4">Home</p>
        </Link>
        <Link href="/products">
          <p className="mr-4">Products</p>
        </Link>
        <Link href="/fashion">
          <p>Fashion</p>
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;
