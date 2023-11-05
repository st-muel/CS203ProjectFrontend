'use client';

import { Modal } from "antd";
import { useEffect, useState } from "react";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  addSession: (datetime: string) => Promise<void>;
}

const AddSessionModal = (props: props) => {
    const [datetime, setDatetime] = useState("");

    const handleCancel = () => {
        props.setOpen(false);
    }

    useEffect(() => {
        if (!props.open) {
            setDatetime("");
        }
    }, [props.open]);

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
                        <h1 className="text-3xl font-bold text-center text-gray-700">Add Session</h1>
                        <form className="flex flex-col gap-4 mt-6">
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Session Datetime
                                </label>
                                <input
                                    type="datetime-local"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={datetime}
                                    onChange={(e) => setDatetime(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative flex items-center justify-center w-full mt-4 mb-3">
                        <button 
                            className="absolute px-5 px-3 py-2 bg-indigo-600 text-white rounded-md transition hover:bg-indigo-500"
                            onClick={() => {
                                props.addSession(datetime)
                                props.setOpen(false)
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddSessionModal;
