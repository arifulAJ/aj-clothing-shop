"use client";

import MyOrders from "@/app/(shipped_route)/order-history/MyOrders";

import axios from "axios";
import Link from "next/link";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const ProfileData = (users: any) => {
  const user = users.users;
  // State to manage which section is currently active
  const [activeSection, setActiveSection] = useState("profile");

  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);

  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files?.[0]);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    // Trigger click event on the file input element if it exists
    inputRef.current?.click();
  };
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!image) {
        return alert("pleace click on image and provide  a profile picture");
      }
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.patch("/api/imageUplode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.data;

      if (data) {
        alert("Upload Successfully!");
      }
    } catch (error: any) {
      console.log("error", error.message);
    }
  };
  // Function to generate dynamic className based on activeSection
  const getClassName = (section: any) => {
    return `    rounded my-2 ${
      activeSection === section
        ? "active bg-black text-white"
        : "bg-gray-300 text-black "
    }`;
  };
  return (
    <div>
      <div className="px-2 md:px-20 py-12">
        <div className="">
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
              {/* Page content here */}
              <div
                id="profiledata"
                style={{
                  display: activeSection === "profile" ? "block " : "none",
                }}
              >
                <form onSubmit={handelSubmit} className="p-4">
                  <div onChange={handelOnChange}>
                    <img
                      className="w-24 h-24 rounded-full cursor-pointer"
                      src={user.image}
                      alt=""
                      onClick={handleClick}
                    />
                    <input
                      type="file"
                      name=""
                      id=""
                      className="p-2 hidden"
                      ref={inputRef}
                    />
                  </div>
                  <button type="submit" className="text-black btn btn-primary ">
                    Upload Image
                  </button>
                </form>
              </div>
              <div
                id="orderitmes"
                style={{
                  display: activeSection === "order" ? "block" : "none",
                }}
              >
                <MyOrders />
              </div>
              <div
                id="payment"
                style={{
                  display: activeSection === "payment" ? "block" : "none",
                }}
              >
                <div>this is payment history for the page</div>
              </div>
              <div
                id="loout"
                style={{
                  display: activeSection === "logout" ? "block" : "none",
                }}
              >
                <div>logout </div>
              </div>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 h-full w-44    bg-gray-50 ">
                {/* Sidebar content here */}
                <li className={getClassName("profile")}>
                  <Link href="#" onClick={() => setActiveSection("profile")}>
                    Profile
                  </Link>
                </li>
                <li className={getClassName("order")}>
                  <Link href="#" onClick={() => setActiveSection("order")}>
                    Order Items
                  </Link>
                </li>
                <li className={getClassName("payment")}>
                  <Link href="#" onClick={() => setActiveSection("payment")}>
                    payment history
                  </Link>
                </li>
                <li className={getClassName("logout")}>
                  <Link href="#" onClick={() => setActiveSection("logout")}>
                    logOut
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handelSubmit} className="p-4">
        <div onChange={handelOnChange}>
          <img
            className="w-24 h-24 rounded-full cursor-pointer"
            src={users.users.image}
            alt=""
            onClick={handleClick}
          />
          <input
            type="file"
            name=""
            id=""
            className="p-2 hidden"
            ref={inputRef}
          />
        </div>
        <button type="submit" className="text-black btn btn-primary ">
          Upload Image
        </button>
      </form> */}
    </div>
  );
};

export default ProfileData;
