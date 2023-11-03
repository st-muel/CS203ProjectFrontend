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
    <>
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
        <div className="flex justify-center">
          {tickets.map((ticket) => {
            return (
              <a
                href="#"
                className="m-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ticket.concertSession.concert.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Venue: {ticket.concertSession.concert.venue.name}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Date:{" "}
                  {new Date(ticket.concertSession.datetime).toDateString()}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
                  Section: {ticket.seat.section.name.replace("_", "-")}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
                  Seat: {ticket.seat.seatRow}
                  {ticket.seat.seatNumber}
                </p>
              </a>
            );
          })}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
