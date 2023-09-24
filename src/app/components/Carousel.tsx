import Image from "next/image"

interface Props {
    imgUrl: string;
}

export const Carousel = ({imgUrl}: Props) => {
    return (
        <div className="relative w-full h-[550px]">
            <Image 
                src={imgUrl}
                alt="Concert Image"
                objectFit="cover"
                fill
            />
        </div>
    )
}