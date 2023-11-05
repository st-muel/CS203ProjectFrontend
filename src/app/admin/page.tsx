'use client';

import { useEffect, useState } from "react";
import AdminConcertCard from "../components/AdminConcertCard";
import CreateConcertModal from "../components/CreateConcertModal";
import { FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { notification } from "antd";
import { EventCatalogue } from "../explore/page";
import { getJwt } from "../lib/utils";
import { useRouter } from "next/navigation";

export interface Venue {
    id: number;
    name: string;
}

export default function Admin() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [concerts, setConcerts] = useState<EventCatalogue[]>([]);
    const [search, setSearch] = useState("");
    const jwtToken = getJwt();

    if (!jwtToken) {
        router.push("/");
    }

    useEffect(() => {
        getConcerts();
    }, [])

    const getConcerts = async () => {
        try {
            const res = await axios.get<EventCatalogue[]>(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts?showAll=true`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                }
            );
            setConcerts(res.data);
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }
    

    const deleteConcert = async (idx: number) => {
        try {
            const res = await axios.delete<{}>(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${idx}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                }
            );

            setConcerts((prev) => {
                return prev.filter((_, index) => index !== idx);
            });

            notification.success({
                message: "Success",
                description: "Concert has been deleted."
            });
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <CreateConcertModal 
                open={open}
                setOpen={setOpen}
                setConcerts={setConcerts}
                getConcerts={getConcerts}
            />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link href="/admin">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </Link>
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
                                    deleteConcert={() => deleteConcert(idx)}
                                />
                            )
                        }) }
                    </div>
                </div>
            </main>
        </div>
    )   
}