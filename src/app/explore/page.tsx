import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Events from "../sections/Events";
import axios from "axios";

export interface EventCatalogue {
  id: number;
  title: string;
  description: string;
  artist: string;
  concertImages: { id: number; name: string; filePath: string }[];
  venue: { id: number; name: string };
  earliestSession: { datetime: string };
  latestSession: { datetime: string };
}

async function getEventCatalogues() {
  try {
    return (await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts`)).data;
  } catch (e) {
    return []
  }
}

export default async function Home(){
  const eventCataloguesData: EventCatalogue[] = await getEventCatalogues();
  
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          <Events eventCatalogues={eventCataloguesData} />
          <div className="gradient-03 z-0 pointer-events-none" />
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
