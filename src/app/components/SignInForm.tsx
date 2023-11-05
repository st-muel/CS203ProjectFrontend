"use client";

import { useState } from "react";
import { rc, setJwt } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import axios from "axios";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { notification } from "antd";
import { userAtom } from "../jotai";

interface props {
	setOpen: (open: boolean) => void;
}

const SigninForm = (props: props) => {
	const setUser = useSetAtom(userAtom)

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	const onSubmit = async () => {
		try {
			const res = await axios.post(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`,
				{ 
					username,
					password
				},
			)

			setJwt(res.data.token)
			setUser(res.data)
			props.setOpen(false)
		} catch (e) {
			console.log(e)
			setUsername("")
			setPassword("")

			notification.error({
				message: "Error",
				description: "Invalid username or password",
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
					<Link
						href="/forget"
						className="text-xs text-blue-600 hover:underline"
					>
						Forget Password?
					</Link>
					<div className="mt-2 cursor-pointer">
						<div
							className={rc(
								buttonVariants({ variant: "default", size: "autosize" })
							)}
							onClick={onSubmit}
						>
							Sign In
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
					{/* <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current"
						>
							<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
						</svg>
					</button>
					<button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							className="w-5 h-5 fill-current"
						>
							<path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
						</svg>
					</button> */}
				</div>

				<p className="mt-4 text-sm text-center text-gray-700">
					Don&#39;t have an account?{" "}
					<Link
						href="/login"
						className="font-medium text-blue-600 hover:underline"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
	// const router = useRouter();

	// const [username, setUsername] = useState("");
	// const [age, setAge] = useState("");

	// const [loading, setLoading] = useState(false);

	// return (
	//   <>
	//     <form className="space-y-6">
	//       <div>
	//         <label
	//           htmlFor="username"
	//           className="block text-sm font-medium leading-6 text-gray-900"
	//         >
	//           Username
	//         </label>
	//         <div className="mt-2 grid grid-cols-5 gap-3">
	//           <input
	//             id="username"
	//             name="username"
	//             type="text"
	//             value={username}
	//             onChange={(e) => setUsername(e.target.value)}
	//             required
	//             className={clsx(
	//               "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
	//               "col-span-4"
	//             )}
	//             disabled={loading}
	//           />
	//         </div>
	//       </div>

	//       <div>
	//         <label
	//           htmlFor="age"
	//           className="block text-sm font-medium leading-6 text-gray-900"
	//         >
	//           Age
	//         </label>
	//         <div className="mt-2">
	//           <input
	//             id="age"
	//             name="age"
	//             type="number"
	//             value={age}
	//             onChange={(e) => setAge(e.target.value)}
	//             required
	//             className={clsx(
	//               "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
	//             )}
	//             disabled={loading}
	//           />
	//         </div>
	//       </div>

	//       <div>
	//         <Button
	//           type="submit"
	//           className={rc(
	//             loading ? "bg-indigo-300 cursor-wait" : "hover:bg-indigo-500",
	//             "w-full"
	//           )}
	//           onClick={async (e) => {
	//             e.preventDefault();
	//             setLoading(true);
	//             const sign = await signIn("credentials", {
	//               username,
	//               age,
	//               redirect: false,
	//             });

	//             if (JSON.parse(sign?.error as string)) {
	//               toast.error(JSON.parse(sign?.error as string)?.message);
	//               setLoading(false);
	//             } else {
	//               toast.success("Welcome to cinema.");
	//               setLoading(false);
	//               setTimeout(() => {
	//                 window.location.replace("/");
	//               }, 1000);
	//             }
	//           }}
	//           disabled={loading}
	//         >
	//           {loading ? (
	//             <>
	//               <Loading />
	//               Loading
	//             </>
	//           ) : (
	//             "Continue"
	//           )}
	//         </Button>
	//       </div>
	//     </form>
	//   </>
	// );
};

export default SigninForm;
