import { useState } from "react";
import { Category } from "../admin/concert/[concertId]/page";
import StartBallotModal from "./StartBallotModal";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

interface props {
    category: Category;
    activeBallots: number[];
    startBallot: (categoryId: number, seconds: number) => Promise<void>;
    endBallot: (categoryId: number) => Promise<void>;
}

const CategoryCard = (props: props) => {
    const isActive = props.activeBallots.includes(props.category.id);
    const [open, setOpen] = useState(false);

    return (
        <div className="flex w-full items-center justify-between gap-2 text-gray-500 text-sm p-3 rounded-md border">
            <StartBallotModal
                open={open} 
                setOpen={setOpen}
                categoryId={props.category.id}
                startBallot={props.startBallot}
            />
            <div className="flex gap-2">
                { props.category.name }
                { isActive && (
                    <span className="text-green-500 font-bold">(Active)</span>        
                )}
            </div>
            <div className="flex gap-2">
                { isActive ? (
                    // <button 
                    //     className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500"
                    //     onClick={() => props.endBallot(props.category.id)}
                    // >
                    //     <FaStopCircle /> End Ballot
                    // </button>
                    <></>
                ) : (
                    <button 
                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500"
                        onClick={() => setOpen(true)}
                    >
                        <FaPlayCircle /> Start Ballot
                    </button>
                )}
            </div>
        </div>
    )
}

export default CategoryCard;