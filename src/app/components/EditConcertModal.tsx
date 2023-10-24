'use client';

import { Modal, notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Concert, Venue } from "../admin/page";
import { useAtomValue } from "jotai";
import { jwtTokenAtom } from "../jotai";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  concert: Concert
}

const EditConcertModal = (props: props) => {
    const jwtToken = useAtomValue(jwtTokenAtom);

    const [venues, setVenues] = useState<Venue[]>([]);
    const [title, setTitle] = useState(props.concert.title);
    const [image, setImage] = useState(props.concert.image);
    const [description, setDescription] = useState(props.concert.description);
    const [artist, setArtist] = useState(props.concert.artist);
    const [venue, setVenue] = useState(props.concert.venue);
    const [ballotStart, setBallotStart] = useState(props.concert.ballotStart);
    const [ballotEnd, setBallotEnd] = useState(props.concert.ballotEnd);

    const handleCancel = () => {
        props.setOpen(false);
    };

    const updateConcert = async () => {
        try {
            const res = await axios.put<Concert>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/concerts/${props.concert.id}`, {
                title: title,
                image: image,
                description: description,
                artist: artist,
                venue: venue,
            });

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
                                    Concert Image URL
                                </label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
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
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Ballot Start
                                </label>
                                <input
                                    type="datetime-local"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={ballotStart}
                                    onChange={(e) => setBallotStart(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Ballot End
                                </label>
                                <input
                                    type="datetime-local"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={ballotEnd}
                                    onChange={(e) => setBallotEnd(e.target.value)}
                                />
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
