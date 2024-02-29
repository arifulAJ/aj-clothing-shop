"use client";
import { useState, useEffect } from "react";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

import SignOutButton from "../from/signOutButton";
import { useSession } from "next-auth/react";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();
  const handleClick = () => {
    (document.activeElement as HTMLElement).blur();
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link className="btn btn-ghost rounded-btn" href={"/cart"}>
            {" "}
            Cart
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}
              </div>
            )}
          </Link>
        </li>

        {session && session.user ? (
          <>
            <li>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn  rounded-btn">
                  {session.user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 "
                >
                  {/* {session.user.isAdmin && (
                      <li onClick={handleClick}>
                        <Link href="/admin/dashboard">Admin Dashboard</Link>
                      </li>
                    )} */}

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
            <li>
              <Link className="btn btn-ghost rounded-btn" href={"/signin"}>
                {" "}
                Sign in
              </Link>
            </li>{" "}
          </>
        )}
      </ul>
    </div>
  );
};

export default Menu;
