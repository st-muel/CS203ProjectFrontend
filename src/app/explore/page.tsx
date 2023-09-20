import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import ConcertDetails from "../sections/ConcertDetails";
import Policy from "../sections/Policy";
import Pricing from "../sections/Pricing";
import Events from "../sections/EventsCatalogue";

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          <Events />
          <div className="gradient-03 z-0" />
          {/* <Navbar /> */}
        </div>
        <div className="relative">
          {/* <ConcertDetails /> */}
          <div className="gradient-04 z-0" />
          {/* <Pricing /> */}
        </div>
        <div className="relative">
          {/* <Policy /> */}
          <div className="gradient-03 z-0" />
          <Footer />
        </div>
      </div>
    </main>
  );
}
