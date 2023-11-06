import { useEffect, useState } from "react";
import { Category } from "../admin/concert/[concertId]/page";
import StartBallotModal from "./StartBallotModal";
import { FaClock, FaPlayCircle, FaStopCircle } from "react-icons/fa";
import OverrideBallotModal from "./OverrideBallotModal";
import { Duration } from "luxon";

interface props {
    category: Category;
    activeBallots: any[];
    startBallot: (categoryId: number, seconds: number) => Promise<void>;
    endBallot: (categoryId: number) => Promise<void>;
    overrideBallot: (categoryId: number, seconds: number, currentStatus: string) => Promise<void>;
    refreshBallots: () => Promise<void>;
}

const activeBallotsNames = {
    ACTIVE: "Active",
    AWAITING_FIRST_PURCHASE_WINDOW: "Awaiting first purchase window",
    RUNNING_PURCHASE_WINDOWS: "Running purchase windows",
    COMPLETED: "Completed",
}

const activeBallotsColors = {
    ACTIVE: "text-green-500",
    AWAITING_FIRST_PURCHASE_WINDOW: "text-violet-500",
    RUNNING_PURCHASE_WINDOWS: "text-rose-500",
    COMPLETED: "text-blue-500",
}

const CategoryCard = (props: props) => {
    const [activeBallot, setActiveBallot] = useState(props.activeBallots.find((ballot) => ballot.category.id === props.category.id));
    const [isActive, setIsActive] = useState(activeBallot !== undefined);
    const [startOpen, setStartOpen] = useState(false);
    const [overrideOpen, setOverrideOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(activeBallot ? activeBallot.timeToNextStatus : null);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        const newActiveBallot = props.activeBallots.find((ballot) => ballot.category.id === props.category.id);
        if (newActiveBallot) {
            setActiveBallot({ ...newActiveBallot })
        }
    }, [props.activeBallots])
 
    useEffect(() => {
        if (!isActive) setTimeLeft(null);
    }, [isActive])

    useEffect(() => {   
        if (timeLeft != null) {
            const intervalId = setInterval(() => {
                setTimeLeft(
                    (prev: any) => {
                        if (prev > 0) return prev - 1;

                        clearInterval(intervalId);
                        return 0;
                    }
                );
            }, 1000)

            return () => clearInterval(intervalId);
        }
    }, [isActive])

    useEffect(() => {
        const refresh = async () => {
            if (isActive && timeLeft !== null && timeLeft <= 0 && !refreshing) {
                setRefreshing(true);
                await props.refreshBallots();
                setTimeLeft(1000);
                setRefreshing(false);
            }
        }
        
        refresh();
    }, [timeLeft])

    useEffect(() => {
        setIsActive(activeBallot !== undefined);
        setTimeLeft(activeBallot ? activeBallot.timeToNextStatus : null);
    }, [activeBallot])

    return (
        <div className="flex w-full items-center justify-between gap-2 text-gray-500 text-sm p-3 rounded-md border">
            <StartBallotModal
                open={startOpen} 
                setOpen={setStartOpen}
                categoryId={props.category.id}
                startBallot={props.startBallot}
            />

            <OverrideBallotModal
                open={overrideOpen} 
                setOpen={setOverrideOpen}
                categoryId={props.category.id}
                status={activeBallot ? activeBallot.status : ""}
                overrideBallot={props.overrideBallot}
            />

            <div className="flex gap-2 p-3">
                { props.category.name }
                { isActive && (
                    <div className="flex items-center gap-2">
                        <span className={ 
                            `${activeBallotsColors[activeBallot.status as keyof typeof activeBallotsColors]}` }>
                                ({ activeBallotsNames[activeBallot.status as keyof typeof activeBallotsNames] })
                        </span>
                        { timeLeft != null &&
                            <span className="font-bold text-md">
                                { Duration.fromObject( { seconds: refreshing ? 0 : timeLeft } ).toFormat("hh:mm:ss") }
                            </span>
                        }
                    </div>    
                )}
            </div>
            <div className="flex gap-2">
                { timeLeft != null ? (
                    <button 
                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500"
                        onClick={() => {
                            return setOverrideOpen(true);
                        }}
                    >
                        <FaClock /> Modify
                    </button>
                ) : !isActive ? (
                    <button 
                        className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500"
                        onClick={() => setStartOpen(true)}
                    >
                        <FaPlayCircle /> Start Ballot
                    </button>
                ) : <></> }
            </div>
        </div>
    )
}

export default CategoryCard;