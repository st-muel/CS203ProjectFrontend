"use client";

import { useState } from "react";
import { rc } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import axios from "axios";
import { useSetAtom } from "jotai";
import { notification } from "antd";
import { jwtTokenAtom } from "../jotai";

interface props {
	setOpen: (open: boolean) => void;
}

const SignupForm = (props: props) => {
	const setJwtToken = useSetAtom(jwtTokenAtom)

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [duppassword, setDupPassword] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDob] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");

	const onSubmit = async () => {
		if(username == "" || password == "" || email == "" || dob == "" || country == "" || phone == ""){
			notification.error({
				message: "Error",
				description: "All fields have to be filled",
			})
		}
		if(duppassword != password){
			notification.error({
				message: "Error",
				description: "Passwords must be equal",
			})
		}
		if (!email.includes("@") && !email.includes(".com")){
			notification.error({
				message: "Error",
				description: "Email must be valid",
			})
		}
		try {
			const res = await axios.post(

				`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
				{ 
					username,
					password,
					email,
					dob,
					country,
					phone
				},
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			)

			setJwtToken(res.data.token)
			props.setOpen(false)
		} catch (e) {
			setUsername("")
			setEmail("")
			setDob("")
			setCountry("")
			setPhone("")
			setPassword("")
			setDupPassword("")

			notification.error({
				message: "Error",
				description: "Username is already taken",
			})
		}
	};
	return (
		<div className="relative flex flex-col items-center justify-center overflow-hidden">
			<div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
				<h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
				<form className="mt-6">
					<div className="mb-4">
					<label
							htmlFor="Username"
							className="block text-sm font-semibold text-gray-800"
						>
							Username
						</label>
						<input
							type="text"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="email"
							className="block text-sm font-semibold text-gray-800"
						>
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="dob"
							className="block text-sm font-semibold text-gray-800"
						>
							Date of birth
						</label>
						<input
							type="dob"
							value={dob}
							onChange={(e) => {
								setDob(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="country"
							className="block text-sm font-semibold text-gray-800"
						>
							Country of residence
						</label>
						<input
							type="country"
							value={country}
							onChange={(e) => {
								setCountry(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="phone"
							className="block text-sm font-semibold text-gray-800"
						>
							Phone number
						</label>
						<input
							type="phone"
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="password"
							className="block text-sm font-semibold text-gray-800"
						>
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mb-2">
						<label
							htmlFor="Duppassword"
							className="block text-sm font-semibold text-gray-800"
						>
							Confirm Password
						</label>
						<input
							type="password"
							value={duppassword}
							onChange={(e) => {
								setDupPassword(e.target.value)
							}}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div className="mt-2">
						<div
							className={rc(
								buttonVariants({ variant: "default", size: "autosize" })
							)}
							onClick={onSubmit}
						>
							Sign Up
						</div>
					</div>
				</form>

				<div className="relative flex items-center justify-center w-full mt-6 border border-t">
					<div className="absolute px-5 bg-white">Or</div>
				</div>
				<div className="flex mt-4 gap-x-2">
					<div
						className={rc(buttonVariants({ variant: "default", size: "autosize" }))}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current"
						>
							<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;