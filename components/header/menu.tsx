"use client";
// import { useState, useEffect } from "react";
// import useCartService from "@/lib/hooks/useCartStore";
// import Link from "next/link";

// import SignOutButton from "../from/signOutButton";
// import { useSession } from "next-auth/react";

// const Menu = () => {
//   const { items } = useCartService();
//   const [mounted, setMounted] = useState(false);
//   const { data: session } = useSession();
//   const handleClick = () => {
//     (document.activeElement as HTMLElement).blur();
//   };
//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   return (
//     <div>
//       <ul className="flex items-stretch">
//         <li>
//           <Link className="btn btn-ghost rounded-btn" href={"/cart"}>
//             {" "}
//             Cart
//             {mounted && items.length != 0 && (
//               <div className="badge badge-secondary">
//                 {items.reduce((a, c) => a + c.qty, 0)}
//               </div>
//             )}
//           </Link>
//         </li>

//         {session && session.user ? (
//           <>
//             <li>
//               <div className="dropdown dropdown-bottom dropdown-end">
//                 <label
//                   tabIndex={0}
//                   className="btn bg-custom-button  rounded-btn"
//                 >
//                   {session.user.name}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </label>
//                 <ul
//                   tabIndex={0}
//                   className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 "
//                 >
//                   {/* {session.user.isAdmin && (
//                       <li onClick={handleClick}>
//                         <Link href="/admin/dashboard">Admin Dashboard</Link>
//                       </li>
//                     )} */}

//                   <li onClick={handleClick}>
//                     <Link href="/order-history">Order history </Link>
//                   </li>
//                   <li onClick={handleClick}>
//                     <Link href="/profile">Profile</Link>
//                   </li>

//                   <SignOutButton />
//                 </ul>
//               </div>
//             </li>
//           </>
//         ) : (
//           <>
//             {" "}
//             <li>
//               <Link
//                 className="  text-custom-btn-text border-none rounded-btn"
//                 href={"/signin"}
//               >
//                 {" "}
//                 Sign in
//               </Link>
//             </li>{" "}
//           </>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Menu;
// import { useState, useEffect } from "react";
// import useCartService from "@/lib/hooks/useCartStore";
// import Link from "next/link";

// import SignOutButton from "../from/signOutButton";
// import { useSession } from "next-auth/react";
// import Image from "next/image";

// const Menu = () => {
//   const { items } = useCartService();
//   const [mounted, setMounted] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
//   const { data: session } = useSession();
//   const handleClick = () => {
//     (document.activeElement as HTMLElement).blur();
//   };
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Function to toggle menu open/close
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className=" navbar bg-custom-bg-nav flex items-center justify-between">
//       <div className="flex items-center">
//         <div className="mr-4">
//           {" "}
//           <Link href="/">
//             <Image
//               src={
//                 "https://res.cloudinary.com/arifulislam/image/upload/v1705572808/LOGO_AJ_pfv0sf.png"
//               }
//               height={80}
//               width={80}
//               alt="logo"
//             />
//           </Link>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <div className="">
//           {/* Search bar */}
//           <input
//             type="text"
//             placeholder="Search your favorite itmes"
//             className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//           <button className="">
//             {/* Search icon */}
//             {/* Include your search icon SVG here */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 19l-6-6M9 5a6 6 0 100 12 6 6 0 000-12z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Responsive Menu */}
//       <div className="sm:hidden">
//         {/* Burger icon to toggle menu */}
//         <button
//           onClick={toggleMenu}
//           className="block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Menu Items */}
//       <ul
//         className={`flex items-center space-x-4 sm:flex sm:space-x-6 ${
//           menuOpen ? "block" : "hidden sm:block"
//         }`}
//       >
//         <li>
//           <Link className="btn btn-ghost rounded-btn" href={"/cart"}>
//             Cart
//             {mounted && items.length != 0 && (
//               <div className="badge badge-secondary">
//                 {items.reduce((a, c) => a + c.qty, 0)}
//               </div>
//             )}
//           </Link>
//         </li>

//         {session && session.user ? (
//           <>
//             <li>
//               <div className="dropdown dropdown-bottom dropdown-end">
//                 <label
//                   tabIndex={0}
//                   className="btn bg-custom-button  rounded-btn"
//                 >
//                   {session.user.name}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                     />
//                   </svg>
//                 </label>
//                 <ul
//                   tabIndex={0}
//                   className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 "
//                 >
//                   <li onClick={handleClick}>
//                     <Link href="/order-history">Order history </Link>
//                   </li>
//                   <li onClick={handleClick}>
//                     <Link href="/profile">Profile</Link>
//                   </li>
//                   <SignOutButton />
//                 </ul>
//               </div>
//             </li>
//           </>
//         ) : (
//           <>
//             {" "}
//             <li>
//               <Link
//                 className="  text-custom-btn-text border-none rounded-btn"
//                 href={"/signin"}
//               >
//                 {" "}
//                 Sign in
//               </Link>
//             </li>{" "}
//           </>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Menu;
import { useState, useEffect } from "react";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

import SignOutButton from "../from/signOutButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
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
      <div className="sm:hidden">
        {/* Burger icon to toggle menu */}
        <button
          onClick={toggleMenu}
          className="block text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`flex items-center space-x-4 sm:flex sm:space-x-6 ${
          menuOpen ? "block" : "hidden sm:block"
        }`}
      >
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

        {session && session.user ? (
          <>
            <li>
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
                  className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 "
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
            <li>
              <Link
                className="flex items-center btn btn-ghost text-custom-btn-text border-none rounded-btn"
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
    </div>
  );
};

export default Menu;
