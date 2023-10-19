import Image from "next/image"
import { Concert } from "../admin/page";

interface props {
    concert: Concert;
    deleteConcert: () => void;
}

const AdminConcertCard = (props: props) => {
    return (
        <div className="flex items-center w-full border rounded-md h-[200px] cursor-pointer">
            <div className="relative w-1/3 h-full">
                <Image
                    src="https://static.ticketmaster.sg/images/activity/23_vibes2023_7838b3ee8f09a88967c31166a4c6c907.png"
                    alt=""
                    className="object-cover rounded-l-md"
                    fill
                />
            </div>
            <div className="flex justify-between w-2/3 p-12">
                <div>
                    <div className="text-gray-800 text-2xl tracking-tight font-semibold">{ props.concert.title }</div>
                    <div className="text-gray-500 text-lg">Starts 1 September 2023</div>
                </div>
                <div className="flex gap-2 items-center">
                    <button className="text-white text-sm bg-indigo-600 rounded-md h-12 px-6 transition hover:bg-indigo-500">Edit</button>
                    <button 
                        className="text-white text-sm bg-red-600 rounded-md h-12 px-6 transition hover:bg-red-500"
                        onClick={props.deleteConcert}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminConcertCard