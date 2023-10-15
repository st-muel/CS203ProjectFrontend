"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PaymentSuccessful() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-neutral-900">
    //   <div className="flex flex-col items-center gap-4">
    //     <div className="text-5xl font-bold text-white">Payment Successful!</div>
    //     <div className="text-2xl font-bold text-white">
    //       Thank you for your purchase!
    //     </div>
    //     <div className="text-2xl font-bold text-white">
    //       Your tickets will be sent to your email shortly.
    //     </div>
    //   </div>
    // </div>

    <main>
      <div className="bg-primary-black overflow-hidden">
        <div>
          {/* <Events eventCatalogues={eventCataloguesData} /> */}
          <div className="gradient-03 z-0 pointer-events-none" />
          <Navbar />
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
