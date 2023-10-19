'use client';

import { useState } from "react";
import AdminConcertCard from "../components/AdminConcertCard";
import CreateConcertModal from "../components/CreateConcertModal";
import { FaPlusCircle } from "react-icons/fa";

export interface Concert {
    title: string;
    image: string;
}

export default function Admin() {
    const [open, setOpen] = useState(false);
    const [concerts, setConcerts] = useState<Concert[]>([]);
    const [search, setSearch] = useState("");

    return (
        <div className="min-h-screen bg-white">
            <CreateConcertModal 
                open={open}
                setOpen={setOpen}
                setConcerts={setConcerts}
            />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="block w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        />
                        <button 
                            className="flex gap-2 justify-center items-center px-4 w-52 text-white font-medium rounded-md bg-indigo-600"
                            onClick={() => setOpen(true)}
                        >
                            <FaPlusCircle /> Add Concert
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 w-full mt-4">
                        { concerts.filter((concert) => concert.title.toLowerCase().includes(search)).map((concert, idx) => {
                            return (
                                <AdminConcertCard 
                                    key={ `concert-card-${idx}` }
                                    concert={concert}
                                />
                            )
                        }) }
                    </div>
                </div>
            </main>
        </div>
    )   
}