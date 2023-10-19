import { FaPauseCircle, FaStopCircle } from "react-icons/fa";

export default function Concert() {
    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                   <div className="flex justify-between">
                        <div className="text-2xl font-semibold text-gray-800">Taylor Swift Eras Tour</div>
                        <div className="flex gap-2">
                            <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-indigo-600 text-white transition hover:bg-indigo-500">
                                <FaPauseCircle /> Pause Ballot
                            </button>
                            <button className="flex gap-2 justify-between items-center px-3 py-2 rounded-md bg-red-600 text-white transition hover:bg-red-500">
                                <FaStopCircle /> End Ballot
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}