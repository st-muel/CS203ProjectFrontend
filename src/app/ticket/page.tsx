import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { ChooseSections } from "../components/ChooseSections";
import SeatSelector from "../components/SeatSelector";
import Seatmap from "../components/Seatmap";

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          {/* <ChooseSections /> */}
          {/* <div className="gradient-03 z-0" /> */}
          <div className="flex justify-center items-center h-screen bg-white">
            <Seatmap />
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
            </div>
          </div>
        </div>
        {/* <div className="gradient-04 z-0" /> */}
        <Footer />
      </div>
    </main>
  );
}

{
  /* <ChooseSeats/> */
}
