"use client"
import axios from "axios";
import { useAtom, useAtomValue } from "jotai";
import { jwtTokenAtom } from "../jotai"; 
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

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
        }
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
                const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/tickets`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    }
                });
                setTickets(res.data as Ticket[]);
            } catch (e) {
                console.log(e);
                return [];
            }
        }
        if (jwtToken) 
            fetchData();
        // if (typeof jwtToken === 'string' && jwtToken.length === 0) {
        //     redirect('/signIn?redirectUrl=/user-tickets');
        // }
    }, [jwtToken]);
   
    return (<h1>First Post</h1>);
}
  