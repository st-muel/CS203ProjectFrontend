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

interface Props {
  id: number
}
export default function Home() {
  const [isChosen, setIsChosen] = useState(false);
  const [section, setSection] = useState("");
  
  useEffect(() => {
    console.log(section)
  }, [section])

  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          {/* <ChooseSections /> */}

          <div className="flex justify-center items-center h-screen bg-white mx-auto">
            <Seatmap setSection={setSection} />
          </div>

          { section && (
            
            <div className="text-black text-lg">{ section }</div>
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
        <Footer />
      </div>
    </main>
  );
}

{
  /* <ChooseSeats/> */
}
