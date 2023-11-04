"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function BallotSuccessful() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <div>
          <div className="gradient-03 z-0 pointer-events-none" />
          <Navbar />
        </div>
        <div className="relative">
          {/* <ConcertDetails /> */}
          <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 gap-4 text-5xl font-bold text-white">
            Payment Successful!<br /> Please check your email for your tickets.
          </div>
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
