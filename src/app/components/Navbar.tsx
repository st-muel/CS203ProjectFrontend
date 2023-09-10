import { FaCalendar, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex items-center w-full h-24 bg-white px-24 justify-between">
            <div className="text-lg text-black">Ticketing Winners</div>
            <div className="relative">
                <input 
                    className="bg-[#EEEEEE] h-14 w-[500px] rounded-full px-8 text-sm outline-none text-black"
                    type="text" 
                    placeholder="Events, artist or team"
                />
                <FaSearch 
                    className="absolute top-1/2 -translate-y-1/2 right-7 text-gray-400"
                />
            </div>
            <div className="relative text-sm">
                <select 
                    className="h-12 rounded-lg pl-14 pr-2 outline-none text-gray-700"
                >
                    <option value="" disabled selected>All dates</option>
                    <option>1st Oct 2023</option>
                </select>
                <FaCalendar 
                    className="absolute top-1/2 -translate-y-1/2 left-7 text-gray-700"
                />
            </div>
            <div className="text-sm">
                <select 
                    className="h-12 rounded-lg pr-3 outline-none text-gray-700"
                    placeholder="Choose your location"
                >
                    <option value="" disabled selected>Choose your location</option>
                    <option>Singapore</option>
                </select>
            </div>
            <div>
                <a
                    href="/login"
                    className="text-lg font-bold text-purple-600 px-8 py-4 rounded-full border border-gray-400 transition hover:bg-purple-600 hover:text-white hover:border-none"
                >
                    Sign in
                </a>
            </div>
        </div>
    )
}

export default Navbar