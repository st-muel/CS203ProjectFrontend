import Image from "next/image"
import { Concert } from "../admin/page";
import { FaPauseCircle, FaStopCircle } from "react-icons/fa";
import Link from "next/link";

interface props {
    concert: Concert;
    deleteConcert: () => void;
}

const AdminConcertCard = (props: props) => {
    return (
        <Link href="/admin/concert/1" className="w-full">
            <div className="relative flex items-center w-full border rounded-md h-[200px] cursor-pointer">
                <div className="absolute top-0 right-0 text-gray-500 tracking-wide p-2 text-md">Singapore Stadium</div>
                <div className="relative w-1/3 h-full">
                    <Image
                        src="https://static.ticketmaster.sg/images/activity/23_vibes2023_7838b3ee8f09a88967c31166a4c6c907.png"
                        alt=""
                        className="object-cover rounded-l-md"
                        fill
                    />
                </div>
                <div className="flex justify-between w-2/3 p-12">
                    <div className="flex flex-col w-1/2">
                        <div className="text-gray-800 text-2xl tracking-tight font-semibold">{ props.concert.title }</div>
                        <div className="text-gray-500 text-sm">{ props.concert.artist }</div>
                        <div className="text-gray-600 text-md pt-4">{ props.concert.description }</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500">
                            <FaPauseCircle /> Pause Ballot
                        </button>
                        <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500">
                            <FaStopCircle /> End Ballot
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AdminConcertCard