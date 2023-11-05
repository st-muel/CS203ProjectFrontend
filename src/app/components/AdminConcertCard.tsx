import Image from "next/image"
import { FaPauseCircle, FaStopCircle } from "react-icons/fa";
import Link from "next/link";
import { EventCatalogue } from "../explore/page";

interface props {
    concert: EventCatalogue;
    deleteConcert: () => void;
}

const AdminConcertCard = (props: props) => {
    return (
        <Link href={ `/admin/concert/${props.concert.id}` }  className="w-full">
            <div className="relative flex items-center w-full border rounded-md h-[200px] cursor-pointer">
                <div className="absolute top-0 right-0 text-gray-500 tracking-wide p-2 text-md">{ props.concert.venue.name }</div>
                <div className="relative w-1/3 h-full">
                    <Image
                        src={ props.concert.concertImages.length > 0 ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${props.concert.id}/images/${props.concert.concertImages[0].id}` : "" }
                        alt=""
                        className="object-cover rounded-l-md"
                        fill
                    />
                </div>
                <div className="flex justify-between w-2/3 p-12">
                    <div className="flex flex-col w-1/2">
                        <div className="text-gray-800 text-xl tracking-tight font-semibold">{ props.concert.title }</div>
                        <div className="text-gray-500 text-sm">{ props.concert.artist }</div>
                        <div className="text-gray-600 text-md pt-4">{ props.concert.description.substring(0, 90) }...</div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <button className="flex gap-2 justify-between items-center px-5 py-3 rounded-md bg-red-600 text-white transition hover:bg-red-500">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AdminConcertCard