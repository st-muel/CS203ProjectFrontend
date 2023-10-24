'use client';

import BallotGraph from "@/app/components/BallotGraph";
import EditConcertModal from "@/app/components/EditConcertModal";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaLocationArrow, FaPauseCircle, FaStopCircle, FaUser } from "react-icons/fa";
import { Concert } from "../../page";
import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export default function Concert({ params }: { params: { concertId: string }  }) {
    const searchParams = useSearchParams();

    const [concert, setConcert] = useState<Concert>();
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        const getConcert = async () => {
            try {
                const res = await axios.get<Concert>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${params.concertId}`);
                setConcert(res.data);
            } catch (err) {
                notification.error({
                    message: "Error",
                    description: "An error has occurred. Please try again later."
                });
            }
        }

        getConcert();
    }, [])

    if (!concert) return (
        <div className="min-h-screen w-full flex justify-center items-center bg-white">
            <div className="animate-spin rounded-full h-10 w-10 border-b border-gray-800" />
        </div>
    )

    return (
        <div className="min-h-screen bg-white">
            { concert && (
                <EditConcertModal 
                    open={editModalOpen}
                    setOpen={setEditModalOpen}
                    concert={concert}
                />
            )}
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
                        <div className="text-2xl font-semibold text-gray-800">{ concert.title }</div>
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
                            src={ `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${params.concertId}/images/1}` }
                            alt=""
                            className="object-cover rounded-md"
                            fill 
                        />
                    </div>
                    <div className="flex justify-center w-full">
                        <BallotGraph />
                    </div>
                    <div className="flex gap-16 w-10/12 mb-20">
                        <div className="w-2/3 text-gray-600 text-medium font-medium">{ concert.description }</div>
                        <div className="flex flex-col gap-3 w-1/3">
                            <div className="flex text-gray-800 items-center gap-2 ">
                                <FaUser />
                                <div>{ concert.artist }</div>
                            </div>
                            <div className="flex text-gray-800 items-center gap-2">
                                <FaLocationArrow />
                                { concert && (
                                    <div>{ concert.venue.name }</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}