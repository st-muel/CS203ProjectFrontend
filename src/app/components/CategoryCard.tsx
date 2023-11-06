import { useState } from "react";
import { Category } from "../admin/concert/[concertId]/page";
import StartBallotModal from "./StartBallotModal";
import { FaPlayCircle, FaStopCircle } from "react-icons/fa";

interface props {
    category: Category;
    activeBallots: any[];
    startBallot: (categoryId: number, seconds: number) => Promise<void>;
    endBallot: (categoryId: number) => Promise<void>;
}

const activeBallotsNames = {
    ACTIVE: "Active",
    AWAITING_FIRST_PURCHASE_WINDOW: "Awaiting first purchase window",
    RUNNING_PURCHASE_WINDOW: "Running purchase window",
    COMPLETED: "Completed",
}

const activeBallotsColors = {
    ACTIVE: "text-green-500",
    AWAITING_FIRST_PURCHASE_WINDOW: "text-violet-500",
    RUNNING_PURCHASE_WINDOW: "text-rose-500",
    COMPLETED: "text-gray-800",
}

const CategoryCard = (props: props) => {
    const activeBallot = props.activeBallots.find((ballot) => ballot.category.id === props.category.id);
    const isActive = activeBallot !== undefined;
    const [open, setOpen] = useState(false);

    return (
        <div className="flex w-full items-center justify-between gap-2 text-gray-500 text-sm p-3 rounded-md border">
            <StartBallotModal
                open={open} 
                setOpen={setOpen}
                categoryId={props.category.id}
                startBallot={props.startBallot}
            />
            <div className="flex gap-2 p-3">
                { props.category.name }
                { isActive && (
                    <span className={ 
                        `${activeBallotsColors[activeBallot.status as keyof typeof activeBallotsColors]}` }>
                            ({ activeBallotsNames[activeBallot.status as keyof typeof activeBallotsNames] })
                    </span>        
                )}
            </div>
            <div className="flex gap-2">
                { (isActive && activeBallot.status == "ACTIVE") ? (
                    <button 
                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500"
                        onClick={() => props.endBallot(props.category.id)}
                    >
                        <FaStopCircle /> Override
                    </button>
                ) : (!isActive) ? (
                    <button 
                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500"
                        onClick={() => setOpen(true)}
                    >
                        <FaPlayCircle /> Start Ballot
                    </button>
                ) : <></>}
            </div>
        </div>
    )
}

export default CategoryCard;