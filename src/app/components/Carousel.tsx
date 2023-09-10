import Image from "next/image"

export const Carousel = () => {
    return (
        <div className="relative w-full h-[550px]">
            <Image 
                src="https://static.ticketmaster.sg/images/activity/23_vibes2023_7838b3ee8f09a88967c31166a4c6c907.png"
                alt="Concert Image"
                objectFit="cover"
                fill
            />
        </div>
    )
}