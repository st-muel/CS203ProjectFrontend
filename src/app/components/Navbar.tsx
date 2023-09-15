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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div>
      <SignInModal open={open} setOpen={setOpen} />
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          {/* <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          /> */}
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">
            Ticket Winners
          </h2>
          {/* <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          /> */}
          <div>
            {session?.user ? (
              <>
                <p> {session.user.name}</p>
                <button
                  className={rc(buttonVariants({ variant: "default" }))}
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div
                className={rc(buttonVariants({ variant: "default" }))}
                onClick={() => setOpen(true)}
              >
                Sign in
              </div>
            )}
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
