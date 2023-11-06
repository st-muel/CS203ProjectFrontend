'use client';

import { Modal } from "antd";
import { useState } from "react";

interface props {
  open: boolean;
  setOpen: (open: boolean) => void;
  categoryId: number;
  status: string;
  overrideBallot: (categoryId: number, seconds: number, currentStatus: string) => void;
}

const OverrideBallotModal = (props: props) => {
    const [seconds, setSeconds] = useState(60);

    const handleCancel = () => {
        props.setOpen(false);
    };

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
                        <h1 className="text-3xl font-bold text-center text-gray-700">Modify</h1>
                        <form className="flex flex-col gap-4 mt-6">
                            <div>
                                <label
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Seconds to End
                                </label>
                                <input
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={seconds}
                                    onChange={(e) => {
                                        setSeconds(parseInt(e.target.value))}}
                                />
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative flex items-center justify-center w-full mt-4 mb-3">
                        <button 
                            className="absolute px-5 px-3 py-2 bg-indigo-600 text-white rounded-md transition hover:bg-indigo-500"
                            onClick={() => {
                                props.overrideBallot(props.categoryId, seconds, props.status)
                                props.setOpen(false)
                            }}
                        >
                            Modify
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default OverrideBallotModal;
