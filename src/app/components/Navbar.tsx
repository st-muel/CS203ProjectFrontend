"use client";

import { notification } from "antd";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { userAtom } from "../jotai";
import { getJwt, removeJwt } from "../lib/utils";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/explore",
    name: "Explore",
  },
  {
    path: "/#",
    name: "Venues",
  },
];

const Navbar = () => {
	const jwtToken = getJwt();
	const [user, setUser] = useAtom(userAtom)
	// const [open, setOpen] = useState(false)
  // const user = useAtomValue(userAtom);

  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSignup, setSignupOpen] = useState(false);

  let pathname = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(pathname);

	const signOut = async () => {
		try {
			removeJwt();
			setUser(null)
		} catch (e) {
			notification.error({
				message: "Error",
				description: "There was an error signing out",
			})
		}
	}

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <SignInModal open={open} setOpen={setOpen} />
      <SignUpModal openSignup={openSignup} setSignupOpen={setSignupOpen} />
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
          <div className="p-[0.4rem] rounded-lg sticky top-4 z-[100] bg-stone-900/50 backdrop-blur-md">
            <nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
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
                          bounce: 0.05,
                          stiffness: 130,
                          damping: 20,
                          duration: 0.1,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
              { user && user.roles.includes("ROLE_ADMIN") && (
								<Link
									key="/admin"
									className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in text-zinc-400` }
									data-active={false}
									href="/admin"
									onMouseOver={() => setHoveredPath("/admin")}
									onMouseLeave={() => setHoveredPath(pathname)}
								>
									<span>Admin</span>
									{"/admin" === hoveredPath && (
										<motion.div
											className="absolute bottom-0 left-0 h-full bg-stone-900/60 rounded-md -z-10"
											layoutId="navbar"
											aria-hidden="true"
											style={{
												width: "100%",
											}}
											transition={{
												type: "spring",
												bounce: 0.05,
												stiffness: 130,
												damping: 20,
												duration: 0.1,
											}}
										/>
									)}
								</Link>	
							)}
            </nav>
          </div>
          <div className="align-middle">
            <div>
              {user ? (
                <div className="flex space-x-[15px]">
                  <div className="flex flex-col">
                    <div>
                      <button
                        onMouseEnter={toggleMenu}
                        // onMouseLeave={toggleMenu}
                        // className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        className="text-white bg-black/20 hover:bg-black/30 focus:ring-4 focus:outline-none focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                      >
                        {user.username}
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          // className="w-2.5 h-2.5 ml-2.5 text-violet-200 hover:text-violet-100"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      {isMenuOpen && (
                        <div className="origin-top-right mt-2 w-44 rounded-lg shadow-lg divide-y divide-gray-100 dark:bg-gray-700 absolute">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a
                                href="#"
                                // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                className="mx-2 rounded-lg block px-4 py-2 hover:bg-violet-500 text-white"
                              >
                                Account Settings
                              </a>
                            </li>
                            <li>
                              <a
                                href="/user-tickets"
                                // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                className="mx-2 rounded-lg block px-4 py-2 hover:bg-violet-500 text-white"
                              >
                                View My Tickets
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => signOut()}
                                // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                className="mx-2 rounded-lg block px-4 py-2 hover:bg-violet-500 text-white cursor-pointer"
                              >
                                Sign Out
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-[15px]">
                  <a
                    onClick={() => setSignupOpen(true)}
                    className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-stone-900/50 rounded hover:bg-white group cursor-pointer"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                      Sign Up
                    </span>
                  </a>
                  <a
                    onClick={() => setOpen(true)}
                    className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group cursor-pointer"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
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
  );
};

export default Navbar;
