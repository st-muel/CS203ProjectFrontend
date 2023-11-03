'use client';

import { Modal, notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Venue } from "../admin/page";
import { getJwt } from "../lib/utils";

export interface Concert {
    id: number;
    title: string;
    description: string;
    artist: string;
    venue: Venue;
}

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  concert: Concert
  setConcert: (concert: any) => void;
}

const EditConcertModal = (props: props) => {
    const jwtToken = getJwt();
    const [venues, setVenues] = useState<Venue[]>([]);
    const [title, setTitle] = useState(props.concert.title);
    const [description, setDescription] = useState(props.concert.description);
    const [artist, setArtist] = useState(props.concert.artist);
    const [venue, setVenue] = useState(props.concert.venue.id);

    const handleCancel = () => {
        props.setOpen(false);
    };

    const updateConcert = async () => {
        try {
            const res = await axios.put<Concert>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${props.concert.id}`, {
                title: title,
                description: description,
                artist: artist,
                venueId: venue,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            });

            props.concert.artist = res.data.artist;
            props.concert.description = res.data.description;
            props.concert.title = res.data.title;
            props.concert.venue = res.data.venue;

            props.setConcert(props.concert);

            notification.success({
                message: "Success",
                description: "Concert edited successfully."
            });
            props.setOpen(false);
        } catch (err) {
            notification.error({
                message: "Error",
                description: "An error has occurred. Please try again later."
            });
        }
    }

    useEffect(() => {
        const getVenues = async () => {
            try {
                const res = await axios.get<Venue[]>(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/venues`,
                    {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        }
                    }
                );
                setVenues(res.data);
            } catch (err) {
                notification.error({
                    message: "Error",
                    description: "Error getting venues. Please try again later."
                });
            }
        }

        getVenues();
    }, [])

    return (
        <>
            <Modal
                footer={null}
                closable={true}
                onCancel={handleCancel}
                title={null}
                open={props.open}
            >
                <div className="relative flex flex-col items-center justify-center">
                    <div className="w-full p-6 bg-white rounded-md lg:max-w-xl">
                        <h1 className="text-3xl font-bold text-center text-gray-700">Edit Concert</h1>
                        <form className="flex flex-col gap-4 mt-6">
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Concert Title
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 resize-none"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Artist
                                </label>
                                <input
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 resize-none"
                                    value={artist}
                                    onChange={(e) => setArtist(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Venue
                                </label>
                                <select
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 resize-none"
                                    value={venue}
                                    onChange={(e) => setVenue(parseInt(e.target.value))}
                                >
                                    { venues.map((venue) => {
                                        return (
                                            <option key={ `venue-option-${venue.id}` }  value={venue.id}>{ venue.name }</option>
                                        )
                                    }) }
                                </select>
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative flex items-center justify-center w-full mt-4 mb-3">
                        <button 
                            className="absolute px-5 px-3 py-2 bg-indigo-600 text-white rounded-md transition hover:bg-indigo-500"
                            onClick={updateConcert}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EditConcertModal;
