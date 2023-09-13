import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Book from "./components/Book";
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
      <div className="flex min-h-screen flex-col items-center bg-white">
        <Navbar />
        <Carousel />
        <div className="w-1/2 text-black pt-12">
          <h2 className="font-bold text-3xl border-b mb-4">
            Upcoming Concerts
          </h2>
          <div className="flex flex-col gap-6 w-full">
            {concerts.map((concert, idx) => (
              <ConcertListItem
                title={concert.title}
                description={concert.description}
                key={`concert-item-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
	  <Book />
      <Footer />
    </main>
  );
}
