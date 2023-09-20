import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { ChooseSections } from "../components/ChooseSections";
import SeatSelector from "../components/SeatSelector";
import Seatmap from "../components/Seatmap";
import Legend from "../components/Legend";

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          <div className="flex flex-row justify-center items-center bg-white">
            <Seatmap />
            <Legend />
          </div>

          {/* <ChooseSections /> */}
        </div>
        <Footer />
      </div>
    </main>
  );
}

{
  /* <ChooseSeats/> */
}
