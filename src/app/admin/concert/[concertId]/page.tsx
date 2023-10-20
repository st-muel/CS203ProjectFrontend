'use client';

import BallotGraph from "@/app/components/BallotGraph";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaLocationArrow, FaPauseCircle, FaStopCircle, FaUser } from "react-icons/fa";

export default function Concert() {

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link href="/admin">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </Link>
                </div>
            </header>
            <main>
                <div className="flex flex-col items-center gap-8 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                   <div className="flex w-full justify-between items-center">
                        <div className="text-2xl font-semibold text-gray-800">Taylor Swift Eras Tour</div>
                        <div className="flex gap-2">
                            <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-gray-600 text-white transition hover:bg-gray-500">
                                <FaEdit /> Edit
                            </button>
                            <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500">
                                <FaPauseCircle /> Pause Ballot
                            </button>
                            <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500">
                                <FaStopCircle /> End Ballot
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full h-[200px]">
                        <Image
                            src="https://static.ticketmaster.sg/images/activity/23_vibes2023_7838b3ee8f09a88967c31166a4c6c907.png"
                            alt=""
                            className="object-cover rounded-md"
                            fill 
                        />
                    </div>
                    <div className="flex justify-center w-full">
                        <BallotGraph />
                    </div>
                    <div className="flex gap-16 w-10/12 mb-20">
                        <div className="w-2/3 text-gray-600 text-medium font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="flex flex-col gap-3 w-1/3">
                            <div className="flex text-gray-800 items-center gap-2 ">
                                <FaUser />
                                <div>Taylor Swift</div>
                            </div>
                            <div className="flex text-gray-800 items-center gap-2">
                                <FaLocationArrow />
                                <div>Singapore Stadium</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}