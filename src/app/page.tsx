import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Book from "./components/Book";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Explore from "./sections/Explore";
import Insights from "./sections/Insights";
import ConcertListItem from "./components/ConcertListItem";
import { Carousel } from "./components/Carousel";

const concerts = [
  {
    title: "The Weeknd After Hours Tour",
    description:
      "Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!",
  },
  {
    title: "The Weeknd After Hours Tour",
    description:
      "Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!",
  },
  {
    title: "The Weeknd After Hours Tour",
    description:
      "Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!",
  },
  {
    title: "The Weeknd After Hours Tour",
    description:
      "Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!",
  },
];

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div>
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <Insights />
          <div className="gradient-04 z-0" />
          <Footer />
        </div>
      </div>
    </main>
  );
}
