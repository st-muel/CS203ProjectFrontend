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
          <ChooseSections />
          <div className="gradient-03 z-0" />
          <Seatmap />
        </div>
        {/* <Seatmap /> */}
        {/* <SeatSelector /> */}
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </main>
  );
}

{
  /* <ChooseSeats/> */
}
