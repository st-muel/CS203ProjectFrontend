'use client';

import BallotGraph from "@/app/components/BallotGraph";
import EditConcertModal from "@/app/components/EditConcertModal";
import Image from "next/image";
import Link from "next/link";
import { FaCross, FaEdit, FaLocationArrow, FaTrash, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { notification } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { EventCatalogue } from "@/app/explore/page";
import { getJwt } from "@/app/lib/utils";
import StartBallotModal from "@/app/components/StartBallotModal";
import CategoryCard from "@/app/components/CategoryCard";
import { DateTime } from "luxon";
import AddSessionModal from "@/app/components/AddSessionModal";

export interface Category {
    id: number;
    name: string;
}

export interface ConcertSession {
    id: number,
    datetime: string,
    concert: EventCatalogue,
}

export default function Concert({ params }: { params: { concertId: string }  }) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const jwtToken = getJwt();
    const [concert, setConcert] = useState<EventCatalogue>();
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeBallots, setActiveBallots] = useState<number[]>([]);
    const [sessions, setSessions] = useState<ConcertSession[]>([]);
    const [open, setOpen] = useState(false);

    if (!jwtToken) {
        router.push("/");
    }

    const addSession = async (datetime: string) => {
        if (!datetime || !concert) return;

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${concert.id}/sessions`,
                {
                    datetime: datetime
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                }
            );

            setSessions((prev) => {
                return [
                    ...prev,
                    res.data
                ];
            });

            notification.success({
                message: "Success",
                description: "Session added successfully."
            });
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }

    const deleteSession = async (sessionId: number) => {
        if (!concert) return;

        try {
            const res = await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${concert.id}/sessions/${sessionId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                }
            );

            setSessions((prev) => {
                return prev.filter((session) => session.id !== sessionId);
            });

            notification.success({
                message: "Success",
                description: "Session deleted successfully."
            });
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }

    const startBallot = async (categoryId: number, seconds: number) => {
        if (!concert) return;

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${concert.id}/categories/${categoryId}/activeBallots`,
                {
                    secondsBeforeClosure: 60
                },
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                }
            );

            setActiveBallots((prev) => {
                return [...prev, categoryId];
            });

            notification.success({
                message: "Success",
                description: "Ballot started successfully."
            });
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }

    const endBallot = async (categoryId: number) => {
        if (!concert) return;

        try {
            const res = await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${concert.id}/categories/${categoryId}/activeBallots`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                }
            );

            setActiveBallots((prev) => {
                return prev.filter((id) => id !== categoryId);
            });

            notification.success({
                message: "Success",
                description: "Ballot ended successfully."
            });
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }

    useEffect(() => {
        const getConcert = async () => {
            try {
                const res = await axios.get<EventCatalogue>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${params.concertId}`);
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

    useEffect(() => {
        const getCategories = async () => {
            if (!concert) return

            try {
                const res = await axios.get<Category[]>(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/venues/${concert.venue.id}/categories`,
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }
                );
                setCategories(res.data);
            } catch (err) {
                notification.error({
                    message: "Error",
                    description: "An error has occurred. Please try again later."
                });
            }
        }

        if (concert) getCategories();
    }, [concert])

    useEffect(() => {
        const getActiveBallots = async () => {
            if (!concert) return;

            try {
                const res = await axios.get<any[]>(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/activeBallots`,
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }
                );
                
                setActiveBallots(res.data.filter((ballot) => ballot.concert.id == concert.id).map((ballot) => ballot.category.id));

            } catch (err) {
                notification.error({
                    message: "Error",
                    description: "An error has occurred. Please try again later."
                });
            }
        }

        if (concert) getActiveBallots();
    }, [concert])

    useEffect(() => {
        const getConcertSessions = async () => {
            if (!concert) return;

            try {
                const res = await axios.get<ConcertSession[]>(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${concert.id}/sessions`,
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }
                );

                setSessions(res.data);
            } catch (err) {
                notification.error({
                    message: "Error",
                    description: "An error has occurred. Please try again later."
                });
            }
        }

        if (concert) getConcertSessions();
    }, [concert])

    if (!concert) return (
        <div className="min-h-screen w-full flex justify-center items-center bg-white">
            <div className="animate-spin rounded-full h-10 w-10 border-b border-gray-800" />
        </div>
    )

    return (
        <div className="min-h-screen bg-white">
            <AddSessionModal 
                open={open}
                setOpen={setOpen}
                addSession={addSession}
            />

            { concert && (
                <EditConcertModal 
                    open={editModalOpen}
                    setOpen={setEditModalOpen}
                    concert={concert as any}
                    setConcert={setConcert}
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
                            <button 
                                className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-gray-600 text-white transition hover:bg-gray-500" 
                                onClick={() => setEditModalOpen(true)}
                            >
                                <FaEdit /> Edit
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={ concert.concertImages.length > 0 ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${concert.id}/images/${concert.concertImages[0].id}` : "" }
                            alt=""
                            className="object-cover rounded-md"
                            fill 
                        />
                    </div>
                    <div className="flex justify-center w-full">
                        <BallotGraph />
                    </div>
                    <div className="flex gap-16 w-10/12">
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
                    <div className="flex flex-col w-full">
                        <div className="text-gray-800 text-2xl p-3">Categories</div>
                        { categories.map((category, idx) => {
                            return (
                                <CategoryCard
                                    key={ `category-${idx} `}
                                    category={category}
                                    startBallot={startBallot}
                                    endBallot={endBallot}
                                    activeBallots={activeBallots}
                                />
                            )
                        }) }
                    </div>
                    <div className="flex flex-col w-full">
                    <div className="text-gray-800 text-2xl p-3">Sessions</div>
                        { sessions.map((session, idx) => {
                            return (
                                <div className="flex w-full items-center justify-between gap-2 text-gray-500 text-sm p-3 rounded-md border">
                                    { DateTime.fromISO(session.datetime).toFormat('dd LLLL yyyy, hh:mm:ss a') }
                                    <div>
                                    <button 
                                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500"
                                        onClick={() => deleteSession(session.id)}
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                    <button 
                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500"
                        onClick={() => setOpen(true)}
                    >Add Session</button>
                </div>
            </main>
        </div>
    )
}

