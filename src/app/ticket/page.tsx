"use client";

import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { RedirectType, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Legend from "../components/Legend";
import Navbar from "../components/Navbar";
import SeatMap from "../components/Seatmap";
import SectionSelectionMap from "../components/SectionSelectionMap";
import { TableTickets } from "../components/TableTickets";
import { jwtTokenAtom } from "../jotai";
import styles from "../styles";
import axios from "axios";
import { notification } from "antd";
const jwt = require("jsonwebtoken");

interface Props {
  searchParams: any;
}

interface Section {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
    venue: {
      id: number;
      name: string;
    };
  };
  availableSeats: number;
}


export interface Concert {
  id: number;
  title: string;
  concertImages: {
    id: number;
    name: string;
    filePath: string;
  }[];
  description: string;
  artist: string;
  venue: {
    id: number;
    name: string;
  };
  ballotStart: string;
  ballotEnd: string;
}

// userId=%ld&concert=%ld&concertSession=%ld&category=%ld&venue=%ld
export default function Ticket({ searchParams }: Props) {
  const [section, setSection] = useState("");
  const jwtToken = useAtomValue(jwtTokenAtom);
  const [categoryPrice, setCategoryPrice] = useState(0.0);
  const [sections, setSections] = useState<Section[]>([]);
  const [concert, setConcert] = useState<Concert>();  

  useEffect(() => {
    console.log(section);
  }, [section]);

  useEffect(() => {

    const fetchCategoryPrice = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${searchParams.concert}/categories/${searchParams.category}/prices`);
      
      setCategoryPrice(res.data.price);
    }

    const fetchSections = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/venues/${searchParams.venue}/sections`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      setSections(res.data);
    }

    const fetchConcert = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${searchParams.concert}`);
      setConcert(res.data);
    }

    console.log("From Ticket" + jwtToken);
    // if (jwtToken === '') {
    //   redirect(`/signIn?redirectUrl=/ticket&userId=${searchParams.userId}&concertId=${searchParams.concertId}&category=${searchParams.category}&`, RedirectType.replace);
    // } else {
    //   const payload = jwt.decode(jwtToken, process.env.JWT_SECRET);
    //   if (payload.userId == searchParams.userId) {
    //     fetchCategoryPrice();
    //   }
    // }
    if (jwtToken) {
      const payload = jwt.decode(jwtToken, process.env.JWT_SECRET);
      console.log(payload)
      if (payload.id == searchParams.userId) {
        console.log("Fetching data")
        fetchCategoryPrice();
        fetchSections();
        fetchConcert();
      }
    }
  }, [jwtToken]);

  const getSectionIdByName = (sectionName: string) => sections.find((section) => section.name === sectionName)?.id!;
  

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
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${searchParams.concert}/images/${concert?.concertImages[0].id}`}
                alt="concert"
                objectFit="cover"
                fill
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[40px] text-[26px] text-black">
                  {concert?.title}
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  {searchParams.loc} -{" "}
                  {new Date(searchParams.startDate).toDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.innerWidth} mx-auto`}>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl">
                <div className="rounded-lg bg-gray-100 py-3 md:py-5 lg:py-7">
                  <h2 className="text-center text-2xl font-bold text-indigo-500 lg:text-3xl">
                    Choose Your Section
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <a href="#ticketsection">
              <SectionSelectionMap setSection={setSection} category={searchParams.category} />
              {/* <SeatMap setSection={setSection}/> */}
            </a>
            <Legend />
          </div>

          {section && (
            <div className="bg-white" id="ticketsection">
              {" "}
              <TableTickets
                section={getSectionIdByName(section)}
                concertSessionId={searchParams.concertSessionId}
                concertTitle={concert!!.title}
                categoryPrice={categoryPrice}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${searchParams.concert}/images/${concert?.concertImages[0].id}`}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
