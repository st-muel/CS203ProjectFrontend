'use client'
import './Shapes.css'
import React from "react";
import { SectionPopup } from './SectionPopup';

export const ChooseSections = () => {

    return(
            <div className="mx-auto grid grid-cols-3 gap-4 content-center">
            <div></div>
            <div>
                <div className='transparentrectangle'></div>
                <div className="stage">
                    <h5 className='text-center text-white'>Stage</h5>
                </div>
            </div>
            <div></div>
            <div>
                <div>
                    <SectionPopup 
                        classNameInput='seatingleft bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'
                    />
                </div>
            </div>
            <div>
                <div>
                    <SectionPopup
                        classNameInput='seatingfront'
                    />
                </div>
                <div>
                    <SectionPopup
                        classNameInput='seatingback bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                    />    
                </div>
            </div>
            <div>
                <div>
                    <SectionPopup
                        classNameInput='seatingright bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'
                    />
                </div>
            </div>
            
            </div>
    )
}
            
        