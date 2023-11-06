import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Insights from "./sections/Insights";
import TopPicks from "./sections/TopPicks";

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Hero />
        <div>
          <About />
          <div className="gradient-03 z-0" />
          <TopPicks />
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
