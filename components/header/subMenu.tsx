import Link from "next/link";
import React from "react";

const SubMenu = () => {
  return (
    <div className="flex px-1 md:px-4 lg:px-32 justify-between bg-custom-bg-nav align-middle  ">
      <div className="flex flex-row py-1">
        <p
          className="text-white flex  text-xs md:text-sm
        "
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeWidth="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeWidth="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>{" "}
          Mohakhali Dhaka, 12567
        </p>
        <p className="text-white flex align-middle px-2 text-xs md:text-sm">
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M4.5 7c.681 0 1.3-.273 1.75-.715C6.7 6.727 7.319 7 8 7s1.3-.273 1.75-.715A2.5 2.5 0 1 0 11.5 2h-7a2.5 2.5 0 0 0 0 5ZM6.25 8.097A3.986 3.986 0 0 1 4.5 8.5c-.53 0-1.037-.103-1.5-.29v4.29h-.25a.75.75 0 0 0 0 1.5h.5a.754.754 0 0 0 .138-.013A.5.5 0 0 0 3.5 14H6a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .112-.013c.045.009.09.013.138.013h.5a.75.75 0 1 0 0-1.5H13V8.21c-.463.187-.97.29-1.5.29a3.986 3.986 0 0 1-1.75-.403A3.986 3.986 0 0 1 8 8.5a3.986 3.986 0 0 1-1.75-.403Z" />
            </svg>
          </span>
          Aj super shop , 2344
        </p>
      </div>
      <div className=" sm:flex flex-row  text-white  hidden">
        <Link href="/">
          <p className="mr-4 hover:underline ">Home</p>
        </Link>
        <Link href="/services ">
          <p className="mr-4 hover:underline">Service</p>
        </Link>
        <Link href="/depertment">
          <p className="mr-4 hover:underline">Depertment</p>
        </Link>
        <Link href="/blog">
          <p className="mr-4 hover:underline">Blog</p>
        </Link>
        <Link href="/contract">
          <p className="hover:underline">Contract</p>
        </Link>
      </div>
    </div>
  );
};

export default SubMenu;
