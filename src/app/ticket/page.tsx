"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { ChooseSections } from "../components/ChooseSections";
import SeatSelector from "../components/SeatSelector";
import Seatmap from "../components/Seatmap";
import { useEffect, useState } from "react";
import { TableTickets } from "../components/TableTickets";
import Legend from "../components/Legend";
import styles from "../styles";
import axios from "axios";
import { SectionPricing } from "../concert/page";

interface Props {
  searchParams: any;
}

export default async function Ticket({searchParams}: Props) {
  const [section, setSection] = useState("");

  useEffect(() => {
    console.log(section);
  }, [section]);

  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div
            className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-4 justify-center`}
          >
            <div className="relative md:w-[270px] w-full h-[150px]">
              <Image
                className="rounded-[32px]"
                src={searchParams.imgUrl}
                alt="concert"
                objectFit="cover"
                fill
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[40px] text-[26px] text-black">
                  {searchParams.title}
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  {searchParams.loc} - {new Date(searchParams.startDate).toDateString() }
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.innerWidth} mx-auto`}>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl">
                <div className="rounded-lg bg-gray-100 py-3 md:py-5 lg:py-7">
                  {/* <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                    Introducing
                  </p> */}

                  <h2 className="text-center text-2xl font-bold text-indigo-500 lg:text-3xl">
                    Choose Your Section
                  </h2>

                  {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text but is random or otherwise generated.
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <a href="#ticketsection">
              <Seatmap setSection={setSection} />
            </a>
            <Legend />
          </div>

          {section && (
            <div className="bg-white" id="ticketsection">
              {" "}
              <TableTickets 
                section={section.split("_")[1]}
                concertId={searchParams.id}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
