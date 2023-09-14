import Image from "next/image"
import Link from "next/link"

interface props {
    title: string
    description: string
    id:number
}

const ConcertListItem = (props: props) => {
    return (
        <div className="flex items-center shadow-lg w-full h-[200px] gap-4 px-2 py-6 border-b border-gray-400 rounded-md cursor-pointer">
            <div className="flex flex-col w-2/3 gap-3">
                <div className="text-xl font-bold hover:underline">
                    <Link
                        href={{
                        pathname:"/ticket",
                        query: { id: 1 },
                        }}
                        >
                        { props.title }
                    </Link>
                </div>
                <div className="text-gray-600 text-sm">{ props.description }</div>
            </div>
            <div className="relative w-1/3 h-full">
                <Image 
                    src="https://static.ticketmaster.sg/images/activity/23_oneokrock_5c68158a440283dc73f0e0ac6891f125.jpg"
                    alt="Concert Image"
                    objectFit="contain"
                    fill
                />
            </div>
        </div>
    )
}

export default ConcertListItem