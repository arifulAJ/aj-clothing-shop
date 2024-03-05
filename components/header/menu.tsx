"use client";

import { useState, useEffect, useRef } from "react";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

import SignOutButton from "../from/signOutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const handleClick = () => {
    (document.activeElement as HTMLElement).blur();
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar bg-custom-bg-nav flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-auto">
          <Link href="/">
            <Image
              src={
                "https://res.cloudinary.com/arifulislam/image/upload/v1705572808/LOGO_AJ_pfv0sf.png"
              }
              height={70}
              width={70}
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1 relative">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search your favorite items"
              className="rounded-full bg-white text-black w-24 pr-8 pl-2  md:w-full  py-2 md:px-8 md:py-3 border-none outline-none"
            />
            <button className="absolute  top-1/2 right-3 transform -translate-y-1/2 text-orange-500">
              {/* Search icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-6-6M9 5a6 6 0 100 12 6 6 0 000-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}

      {/* Menu Items */}
      <ul>
        <li>
          <Link className="btn btn-ghost rounded-btn " href={"/cart"}>
            <div className="flex flex-col">
              <div className="indicator  text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {mounted && items.length != 0 && (
                  <div className="badge badge-error  badge-sm   indicator-item">
                    {items.reduce((a, c) => a + c.qty, 0)}
                  </div>
                )}{" "}
              </div>
              <div className="text-white font-normal text-xs">
                $ {items.reduce((a, c) => a + c.price * c.qty, 0)}
              </div>
            </div>
          </Link>
        </li>
        {/* Menu drawer */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 bottom-0 bg-custom-bg-nav w-64 z-50 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className=" justify-end font-bold text-white hover:text-orange-500 focus:text-orange-400 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : ""}
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-4 p-4">
            <li className="text-white" onClick={closeMenu}>
              {session?.user ? (
                <p>Hi, {session?.user?.name}</p>
              ) : (
                <div className="mr-auto flex flex-row">
                  <Link href="/">
                    <Image
                      src={
                        "https://res.cloudinary.com/arifulislam/image/upload/v1705572808/LOGO_AJ_pfv0sf.png"
                      }
                      height={50}
                      width={50}
                      alt="logo"
                    />
                  </Link>
                  <Link className="btn btn-secondary" href={"/signin"}>
                    Signin or signup
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/" onClick={closeMenu}>
                <p className="text-white">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={closeMenu}>
                <p className="text-white">About</p>
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </div>

        {session && session.user ? (
          <>
            <li className="sm:block hidden">
              <div className="dropdown dropdown-bottom dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost rounded-btn text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <div className="flex flex-col ">
                    <p className="font-extralight">
                      Hi, {session.user.name?.substring(0, 6)}
                    </p>
                    <p className="font-bold py-2">Account</p>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-slate-400 z-1  p-2 shadow rounded-box w-52 "
                >
                  <li onClick={handleClick}>
                    <Link href="/order-history">Order history </Link>
                  </li>
                  <li onClick={handleClick}>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <SignOutButton />
                </ul>
              </div>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="sm:block hidden">
              <Link
                className="flex items-center btn btn-ghost  text-custom-btn-text border-none rounded-btn"
                href={"/signin"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <div className="flex flex-col ">
                  <p className="font-thin">Sign in</p>
                  <p className="font-bold py-2">Account</p>
                </div>
              </Link>
            </li>{" "}
          </>
        )}
      </ul>
      <div className="sm:hidden ">
        {/* Burger icon to toggle menu  */}
        <button
          onClick={toggleMenu}
          className=" justify-end font-bold text-white hover:text-orange-500 focus:text-orange-400 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Menu;
