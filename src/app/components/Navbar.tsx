"use client"

import { FaCalendar, FaSearch } from "react-icons/fa"
import SignInModal from "./SignInModal"
import { useState } from "react"
import { buttonVariants, Button } from "./ui/button"
import { rc } from "../lib/utils"
import { motion } from "framer-motion"
import styles from "../styles"
import { navVariants } from "../utils/motion"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useAtom } from "jotai"
import { userAtom } from "../jotai"
import { removeCookie } from "../utils/common"

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
		path: "/login",
		name: "Venues",
	},
	{
		path: "/concert",
		name: "Concert",
	},
]

const Navbar = () => {
	const [user, setUser] = useAtom(userAtom)
	const [open, setOpen] = useState(false)

	let pathname = usePathname() || "/"
	const [hoveredPath, setHoveredPath] = useState(pathname)

	const signOut = () => {
		setUser(null)
		removeCookie("user")
	}

	return (
		<div>
			<SignInModal open={open} setOpen={setOpen} />
			<motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.xPaddings} py-8 relative`}>
				<div className="absolute w-[50%] inset-0 gradient-01 bg-black" />
				<div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
					{/* <img
						src="/search.svg"
						alt="search"
						className="w-[24px] h-[24px] object-contain"
					/> */}
					<div className="p-[0.4rem] rounded-lg sticky top-4 z-[100] bg-stone-900/50 backdrop-blur-md">
						<nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
							{navItems.map((item, index) => {
								const isActive = item.path === pathname

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
								)
							})}
						</nav>
					</div>

					<div className="align-middle">
						<div>
							{user ? (
								<>
									<p> {user.username}</p>
									<button className={rc(buttonVariants({ variant: "default" }))} onClick={() => signOut()}>
										Logout
									</button>
								</>
							) : (
								<div className="flex space-x-[15px]">
									<a
										href="/login"
										className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-stone-900/50 rounded hover:bg-white group"
									>
										<span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
										<span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
											Sign Up
										</span>
									</a>
									<a
										onClick={() => setOpen(true)}
										className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
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
	)
}

export default Navbar
