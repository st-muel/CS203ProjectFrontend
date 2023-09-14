'use client'
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export const TicketCarousel = () => {
  return (
    <div className = "relative w-full h-[550px]">
    <Carousel>
      <Image 
        src={"/concert_image1.jpeg"}
        alt="Concert Image"
        objectFit="cover"
        fill
        />
      <Image
        alt="..."
        src={"/concert_image2.jpeg"}
        objectFit="cover"
        fill
      />
      <Image
        alt="..."
        src={"/concert_image3.jpeg"}
        objectFit="cover"
        fill
      />
    </Carousel>
    </div>
    )
}
