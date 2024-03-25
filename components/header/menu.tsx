"use client";

import { useState, useEffect, useRef } from "react";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

import SignOutButton from "../from/signOutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SubMenu from "./subMenu";
import { useSavings } from "@/lib/services/discountSaving";

const Menu = () => {
  const { items, itemsPrice } = useCartService();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const user = session?.user as { role: string }; // Use lowercase 'string'
  const isAdmins = user?.role === "admin";

  const saving = useSavings(items);

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
    <div className="navbar px-1 md:px-4 lg:px-32 bg-custom-bg-nav flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-auto hover:bg-custom-bg-nav-button rounded">
          <Link href="/">
            <Image
              src={
                "https://res.cloudinary.com/arifulislam/image/upload/v1705572808/LOGO_AJ_pfv0sf.png"
              }
              height={60}
              width={60}
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
              className="rounded-full bg-white text-black w-24 md:w-96  pr-8 pl-2    py-2 md:px-8 md:py-3 border-none outline-none"
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
          <Link
            className="btn btn-ghost hover:bg-custom-bg-nav-button rounded-btn "
            href={"/cart"}
          >
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
                $<span>{itemsPrice - saving}</span>
              </div>
            </div>
          </Link>
        </li>
        {/* Menu drawer */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 bottom-0 bg-custom-bg-nav w-64 z-50 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0 overflow-scroll" : "translate-x-full"
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
          <ul className="flex flex-col gap-4 p-4 overflow-y-auto">
            <li className="text-white">
              {session?.user ? (
                <p>Hi, {session?.user?.name}</p>
              ) : (
                <Link onClick={closeMenu} href={"/signin"}>
                  <p className=" flex align-middle">
                    <span className="px-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>
                    </span>
                    Sign in
                  </p>
                </Link>
              )}
            </li>
            <hr />
            <li>
              <Link href="/" onClick={closeMenu}>
                <p className="text-white flex align-middle py-1 ">
                  {" "}
                  <span className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </span>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/collection" onClick={closeMenu}>
                <p className="text-white flex align-middle ">
                  {" "}
                  <span className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                  Collection
                </p>
              </Link>
            </li>
            <li>
              <Link href="/depertment" onClick={closeMenu}>
                <p className="text-white flex align-middle py-1">
                  <span className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                      />
                    </svg>
                  </span>
                  Depertment
                </p>
              </Link>
            </li>
            <hr />
            <li>
              <Link href="/blog" onClick={closeMenu}>
                <p className="text-white flex align-middle ">
                  <span className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </span>
                  Blog
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contract" onClick={closeMenu}>
                <p className="text-white flex align-middle py-1">
                  <span className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  Contract
                </p>
              </Link>
            </li>
            {session?.user && (
              <div>
                {" "}
                <hr />
                <li>
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <p
                      tabIndex={0}
                      className="text-white flex align-middle py-2"
                    >
                      {" "}
                      <span className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </span>
                      Account
                    </p>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content bg-slate-400 z-1 translate-x-24  p-2 shadow rounded-box w-52 "
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
              </div>
            )}
            {isAdmins && (
              <div>
                {" "}
                <li>
                  <Link href="/cart" onClick={closeMenu}>
                    <p className="text-white flex align-middle py-1">
                      {" "}
                      <span className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </span>
                      Dashbord
                    </p>
                  </Link>
                </li>
              </div>
            )}
            <li>
              <Link href="/cart" onClick={closeMenu}>
                <p className="text-white flex align-middle py-1">
                  {" "}
                  <span className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                  </span>
                  Give feadback
                </p>
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
                  className="btn btn-ghost hover:bg-custom-bg-nav-button rounded-btn text-white"
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
                className="flex items-center btn btn-ghost hover:bg-custom-bg-nav-button  text-custom-btn-text border-none rounded-btn"
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
