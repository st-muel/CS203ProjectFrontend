import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { ChooseSections } from "../components/ChooseSections";

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          <Carousel />
          <div className="gradient-03 z-0" />
          {/* <Navbar /> */}
          < ChooseSections />
        </div>
          <div className="gradient-03 z-0" />
          <Footer />
        </div>
    </main>
  );
}

{/* <ChooseSeats/> */}
