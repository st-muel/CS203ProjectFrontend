import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { ChooseSections } from "../components/ChooseSections";
import SeatSelector from "../components/SeatSelector";
import Seatmap from "../components/Seatmap";
import Legend from "../components/Legend";
import styles from "../styles";

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        {/* testing */}
        <div className="bg-white pt-5">
          <div
            className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-4 justify-center`}
          >
            <img
              src="/taylor-swift.jpg"
              alt="concert"
              className="md:w-[270px] w-full h-[150px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[40px] text-[26px] text-black">
                  Taylor Swift: The Eras Tour 2024
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  Singapore National Stadium - March 2 2024 (Sun. 05:00pm)
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <Seatmap />
            <Legend />
          </div>
        </div>
        {/* <ChooseSections /> */}
        <Footer />
      </div>
    </main>
  );
}
