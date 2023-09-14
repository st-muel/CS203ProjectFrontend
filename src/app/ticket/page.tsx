import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Book from "../components/Book";
import ConcertListItem from "../components/ConcertListItem";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center">
        <Navbar />
        <Carousel />
        <div className="w-1/2 text-black pt-12">
          
        </div>
      </div>
	  <Book />
      <Footer />
    </main>
  );
}
