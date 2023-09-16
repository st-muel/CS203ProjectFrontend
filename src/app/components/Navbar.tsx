"use client";

import { FaCalendar, FaSearch } from "react-icons/fa";
import SignInModal from "./SignInModal";
import { useState } from "react";
import { buttonVariants, Button } from "./ui/button";
import { rc } from "../lib/utils";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { signOut, useSession } from "next-auth/react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/concert",
    name: "Explore",
  },
  {
    path: "/login",
    name: "Venues",
  },
  // {
  //   path: "/concert",
  //   name: "Contact Us",
  // },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div>
      <SignInModal open={open} setOpen={setOpen} />
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01 bg-black" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}
        >
          {/* <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          /> */}
          <div className="p-[0.4rem] rounded-lg sticky top-4 z-[100] bg-stone-900/50 backdrop-blur-md">
            <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
              {navItems.map((item, index) => {
                const isActive = item.path === pathname;

                return (
                  <Link
                    key={item.path}
                    className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                      isActive ? "text-zinc-100" : "text-zinc-400"
                    }`}
                    data-active={isActive}
                    href={item.path}
                    onMouseOver={() => setHoveredPath(item.path)}
                    onMouseLeave={() => setHoveredPath(pathname)}
                  >
                    <span>{item.name}</span>
                    {item.path === hoveredPath && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-full bg-stone-900/60 rounded-md -z-10"
                        layoutId="navbar"
                        aria-hidden="true"
                        style={{
                          width: "100%",
                        }}
                        transition={{
                          type: "spring",
                          bounce: 0.1,
                          stiffness: 130,
                          damping: 20,
                          duration: 0.3,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="align-middle">
            <div>
              {session?.user ? (
                <>
                  <p> {session.user.name}</p>
                  <button
                    className={rc(buttonVariants({ variant: "default" }))}
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex space-x-[15px]">
                  <a
                    href="/login"
                    className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Sign Up
                    </span>
                  </a>
                  <a
                    onClick={() => setOpen(true)}
                    className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Login
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
    // <div className="flex items-center w-full h-24 bg-white px-24 justify-between">
    //   <SignInModal open={open} setOpen={setOpen} />
    //   <div className="text-lg text-black">Ticketing Winners</div>
    //   <div className="relative">
    //     <input
    //       className="bg-[#EEEEEE] h-14 w-[500px] rounded-full px-8 text-sm outline-none text-black"
    //       type="text"
    //       placeholder="Events, artist or team"
    //     />
    //     <FaSearch className="absolute top-1/2 -translate-y-1/2 right-7 text-gray-400" />
    //   </div>
    //   <div className="relative text-sm">
    //     <select className="h-12 rounded-lg pl-14 pr-2 outline-none text-gray-700">
    //       <option value="" disabled selected>
    //         All dates
    //       </option>
    //       <option>1st Oct 2023</option>
    //     </select>
    //     <FaCalendar className="absolute top-1/2 -translate-y-1/2 left-7 text-gray-700" />
    //   </div>
    //   <div className="text-sm">
    //     <select
    //       className="h-12 rounded-lg pr-3 outline-none text-gray-700"
    //       placeholder="Choose your location"
    //     >
    //       <option value="" disabled selected>
    //         Choose your location
    //       </option>
    //       <option>Singapore</option>
    //     </select>
    //   </div>
    //   <div>
    //     <div
    //       className={rc(buttonVariants({ variant: "default" }))}
    //       onClick={() => setOpen(true)}
    //     >
    //       Sign in
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
