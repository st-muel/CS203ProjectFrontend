'use client'

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

interface Props {
  id: number
}
export default function Home() {
  const [section, setSection] = useState("");
  
  useEffect(() => {
    console.log(section)
  }, [section])

  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        {/* testing */}
        <div className="bg-white pt-5">
          <div
            className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-4 justify-center`}
          >
            <img
              src="/taylor-swift.jpg"
              alt="concert"
              className="md:w-[270px] w-full h-[150px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[40px] text-[26px] text-black">
                  Taylor Swift: The Eras Tour 2024
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  Singapore National Stadium - March 2 2024 (Sun. 05:00pm)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <Seatmap setSection={setSection} />
            <Legend />
          </div>

          { section && (
            
            <div className="flex flex-row justify-center items-center bg-white"> <TableTickets section = {section.split("_")[1]}/></div>
          ) }
{/* 
          <ChooseSections /> */}
          {/* <div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-gray-800 rounded-full mr-2 dark:bg-white"></span>
              <span className="text-gray-600 dark:text-gray-400">Dark</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Gray</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Red</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Yellow</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Green</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-blue-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Blue</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-indigo-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Indigo</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-purple-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Purple</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Pink</span>
            </div>
            <div className="inline-flex items-center">
              <span className="w-2 h-2 inline-block bg-white rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Light</span>
            </div>
        </div> */}
        </div>
        {/* <ChooseSections /> */}
        <Footer />
      </div>
    </main>
  );
}
