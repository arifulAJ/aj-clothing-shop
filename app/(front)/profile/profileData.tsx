"use client";

import SignOutButton from "@/components/from/signOutButton";
import UserPaymentHistory from "@/components/users/userPaymentHistory";
import UsersOrder from "@/components/users/usersOrder";

import axios from "axios";
import Link from "next/link";

import React, { ChangeEvent, useRef, useState } from "react";

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
        window.location.reload();
      }
    } catch (error: any) {
      console.log("error", error.message);
    }
  };
  // Function to generate dynamic className based on activeSection
  const getClassName = (section: any) => {
    return `  w-full   rounded my-2 ${
      activeSection === section
        ? "active bg-black text-white"
        : "bg-gray-300 text-black "
    }`;
  };
  return (
    <div>
      <div className="px-2 md:px-20 md:py-12 ">
        <div className="">
          <div className=" text-center pb-2 md:hidden ">
            <p className="text-black">
              Pleace click the user Dashbord for the more imformation
            </p>
            <label
              htmlFor="my-drawer-2"
              className="p-2 rounded-lg bg-orange-700 text-white border-none  drawer-button "
            >
              User Dashbord
            </label>
          </div>
          <div className="text-black bg-gray-50 text-center  capitalize pb-2">
            <p> {activeSection} page viewing</p>
          </div>
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content  ">
              {/* Page content here */}

              <div
                id="profiledata"
                style={{
                  display: activeSection === "profile" ? "block " : "none",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    className=" relative"
                    src="https://res.cloudinary.com/arifulislam/image/upload/v1711603477/Screenshot_2024-03-28_112317_lon29h.png"
                    alt=""
                    onClick={handleClick}
                  />
                  <span
                    className="absolute bottom-6 right-11 sm:right-32 flex text-black border bg-gray-200 rounded p-2"
                    style={{ transform: "translate(50%, 50%)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>{" "}
                    <span className="hidden sm:block">Edit Cover Photo</span>
                  </span>
                </div>
                <form onSubmit={handelSubmit} className="p-4 ">
                  <div
                    onChange={handelOnChange}
                    style={{ transform: "translate(0%, -50%)" }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        className="w-36 h-36 sm:w-44 sm:h-44 rounded-full cursor-pointer relative"
                        src={user.image}
                        alt=""
                        onClick={handleClick}
                      />
                      <span
                        onClick={handleClick}
                        className="absolute text-black w-44 h-44 rounded-full cursor-pointer bottom-0 transform translate-x-28 translate-y-28 md:translate-x-32 md:translate-y-32"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10 bg-gray-200 rounded-full p-2 "
                        >
                          <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                          <path
                            fillRule="evenodd"
                            d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>

                    <input
                      type="file"
                      name=""
                      id=""
                      className="p-2 hidden"
                      ref={inputRef}
                    />
                  </div>{" "}
                  <button
                    style={{ transform: "translate(10%, -100%)" }}
                    type="submit"
                    className="text-white border-none hover:bg-black btn bg-orange-700 "
                  >
                    Upload Image
                  </button>
                </form>
                <div className=" px-2 sm:px-10 text-black ">
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                </div>
              </div>
              <div
                id="orderitmes"
                style={{
                  display: activeSection === "order" ? "block" : "none",
                }}
              >
                <UsersOrder />
              </div>
              <div
                id="payment"
                style={{
                  display: activeSection === "payment" ? "block" : "none",
                }}
              >
                <UserPaymentHistory />
              </div>
              <div
                id="loout"
                style={{
                  display: activeSection === "logout" ? "block" : "none",
                }}
              >
                <div className="text-center py-10">
                  <p className="text-black pb-10">
                    {" "}
                    Logging out from your account,
                  </p>
                  <ul className="btn bg-orange-700 text-white rounded border-none">
                    <SignOutButton />
                  </ul>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 sm:h-full w-44      bg-gray-50 ">
                {/* Sidebar content here */}
                <li className={getClassName("profile")}>
                  <Link href="#" onClick={() => setActiveSection("profile")}>
                    Profile{" "}
                  </Link>
                </li>
                <li className={getClassName("order")}>
                  <Link href="#" onClick={() => setActiveSection("order")}>
                    Order Items{" "}
                  </Link>
                </li>
                <li className={getClassName("payment")}>
                  <Link href="#" onClick={() => setActiveSection("payment")}>
                    payment history{" "}
                  </Link>
                </li>
                <li className={getClassName("logout")}>
                  <Link href="#" onClick={() => setActiveSection("logout")}>
                    logOut{" "}
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
