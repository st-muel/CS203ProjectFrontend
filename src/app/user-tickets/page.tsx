"use client";
import axios from "axios";
import { useAtom, useAtomValue } from "jotai";
import { jwtTokenAtom } from "../jotai";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { notification } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomText";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import Image from "next/image";

export interface Ticket {
  id: string;
  seat: {
    id: number;
    seatRow: string;
    seatNumber: number;
    section: {
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
    };
  };
  concertSession: {
    id: number;
    datetime: string;
    concert: {
      id: number;
      title: string;
      description: string;
      artist: string;
      venue: {
        id: number;
        name: string;
      };
      concertImages: {
        id: number;
        name: string;
        filePath: string;
      }[];
    };
  };
  receipt: {
    uuid: string;
    username: string;
    amountPaid: string;
  };
}

export default function UserTickets() {
  const jwtToken = useAtomValue(jwtTokenAtom);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log(jwtToken);
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/tickets`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        console.log(res.data);
        setTickets(res.data as Ticket[]);
      } catch (e) {
        console.log(e);
        notification.error({ message: "Failed to fetch tickets" });
        return [];
      }
    };
    if (jwtToken) fetchData();
  }, [jwtToken]);

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col"
      >
        <TypingText title="| Tickets" textStyles="text-center" />
        <TitleText title={<>Tickets Purchased</>} textStyles="text-center" />
        <div
          className={`${styles.innerWidth} mx-auto flex items-center flex-col`}
        >
          {tickets.map((ticket) => {
            return (
              // <a
              //   href="#"
              //   className="m-10 block max-w-sm bg-white border border-gray-200 w-96 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              // >
              //   <div className="flex flex-row items-center justify-center">
              //     <div className="relative h-48 w-96 bg-stone-600">
              //       <Image
              //         className="md:object-scale-down"
              //         src={
              //           "/" +
              //           ticket.concertSession.concert.concertImages[0].filePath
              //         }
              //         alt=""
              //         objectFit="contain"
              //         fill
              //       />
              //     </div>
              //     <div>
              //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              //         {ticket.concertSession.concert.title}
              //       </h5>
              //       <p className="font-normal text-gray-700 dark:text-gray-400">
              //         Venue: {ticket.concertSession.concert.venue.name}
              //       </p>
              //       <p className="font-normal text-gray-700 dark:text-gray-400">
              //         Date:{" "}
              //         {new Date(ticket.concertSession.datetime).toDateString()}
              //       </p>
              //       <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
              //         Section: {ticket.seat.section.name.replace("_", "-")}
              //       </p>
              //       <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
              //         Seat: {ticket.seat.seatRow}
              //         {ticket.seat.seatNumber}
              //       </p>
              //     </div>
              //   </div>
              // </a>
              <a href="#" className="w-screen flex flex-col">
                <section className="w-full flex-grow flex items-center justify-center p-4 m-8">
                  <div className="flex w-full max-w-3xl text-zinc-50 h-64">
                    <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl">
                      <Image
                        width={140}
                        height={140}
                        className="md:object-scale-down"
                        src={
                          "/" +
                          ticket.concertSession.concert.concertImages[0]
                            .filePath
                        }
                        alt=""
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
                    {/* color */}
                    <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
                      <div className="flex w-full justify-between items-center">
                        {/* <div className="flex flex-col items-center">
                          <span className="text-4xl font-bold">BNE</span>
                          <span className="text-zinc-500 text-sm">Brisbane</span>
                        </div>
                        <div className="flex flex-col flex-grow items-center px-10">
                          <span className="font-bold text-xs">RS 11</span>
                          <div className="w-full flex items-center mt-2">
                            <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                            <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                            <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                          </div>
                          <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                            <span className="text-sm text-zinc-900">18h 35m</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-4xl font-bold">ATH</span>
                          <span className="text-zinc-500 text-sm">Athens</span>
                        </div> */}
                        <span className="text-4xl font-bold text-pink-400 font-mono">
                          {ticket.concertSession.concert.title}
                        </span>
                      </div>
                      <div className="flex w-full mt-auto justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-400">Date</span>
                          <span className="font-mono">
                            {new Date(
                              ticket.concertSession.datetime
                            ).toDateString()}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-400">Venue</span>
                          <span className="font-mono">
                            {ticket.concertSession.concert.venue.name}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-400">Section</span>
                          <span className="font-mono">
                            {ticket.seat.section.name.replace("_", "-")}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-zinc-400">Seat</span>
                          <span className="font-mono">
                            {ticket.seat.seatRow}
                            {ticket.seat.seatNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </a>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
