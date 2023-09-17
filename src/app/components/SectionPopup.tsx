'use client'
import React from "react";
import ChooseSeats from "./ChooseSeats";
import './Shapes.css'


interface props {
    classNameInput: string
}

export const SectionPopup = (props: props) => {
    const [showModal, setShowModal] = React.useState(false);
    return (
    <>
        <button
        className={props.classNameInput}
        type="button"
        onClick={() => setShowModal(true)}
        >
        </button>
        {showModal ? (
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b bg-white">
                <div>
                <ChooseSeats/>
                </div>
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                </button>
                </div>
                </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
    );
}