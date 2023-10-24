import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import ConcertDetails from "../sections/ConcertDetails";
import Policy from "../sections/Policy";
import Pricing from "../sections/Pricing";
import axios from "axios";

interface Props {
  searchParams: any;
}

export interface PricingDetail {
  imgUrl: string;
  title: string;
  subtitle: string[]; 
}

export interface SectionPricing {
  section: {
    id: number;
    name: string;
  },
  price: number;
}

async function getSectionsPricing(concertId: number) {
  return await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${concertId}/prices`);
}

export default async function Concert(
  {searchParams}: Props
) {
  const sectionPricing = await getSectionsPricing(searchParams.id).then(res => res.data as SectionPricing[]);
  
  const sectionsPricingDetails: PricingDetail[] = [
    {
      imgUrl: "/date.svg",
      title: "Start Date",
      subtitle: [new Date(searchParams.startDate).toDateString()],
    },
    {
      imgUrl: "/ticket.svg",
      title: "Standard",
      subtitle: sectionPricing.map(sectionPricing => sectionPricing.section.name + ": $" + sectionPricing.price),
    },
    {
      imgUrl: "/note.svg",
      title: "Note",
      subtitle: ["Limited to 4 tickets per transaction."],
    },
  ];

  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div>
          <Carousel imgUrl={searchParams.imgUrl}/>
          <div className="gradient-03 z-0" />
          {/* <Navbar /> */}
        </div>
        <div className="relative">
          <ConcertDetails {...searchParams} />
          <div className="gradient-04 z-0" />
          <Pricing sectionPricingDetails={sectionsPricingDetails}/>
        </div>
        <div className="relative">
          <Policy />
          <div className="gradient-03 z-0" />
          <Footer />
        </div>
      </div>
    </main>
  );
}