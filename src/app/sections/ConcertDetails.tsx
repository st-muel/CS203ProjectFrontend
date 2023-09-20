"use client";

import { rc } from "../lib/utils";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { staggerContainer, fadeIn, slideIn } from "../utils/motion";
import {
  DescriptionText,
  SubTitleText,
  TitleText,
  TypingText,
} from "../components/CustomText";
import { buttonVariants } from "../components/ui/button";
import SeatMapModal from "../components/SeatMapModal";

const ConcertDetails = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="details">
      <SeatMapModal open={open} setOpen={setOpen} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex lg:flex-row flex-col gap-5 mt-[30px]">
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col "
          >
            <SubTitleText title={<>Event Details</>} textStyles="text-left" />
            <DescriptionText
              textStyles="text-left flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]"
              description={
                <>
                  Art Republic proudly presents VIBES! An extraordinary
                  festival, destined to ignite passions and capture hearts on
                  September 23, 2023. Get ready for an epic celebration of
                  music, dance, and fun at VIBES! Enchanting performances await
                  you, featuring the sensational Singaporean artist, Alfred Sun,
                  and the mesmerizing dance choreographer from China, Orangie,
                  whose captivating moves and boundless talent will leave you in
                  awe. And to crank up the excitement even more, we&#39;ve got
                  the esteemed radio DJ Hazelle Teo from YES933FM, whose
                  magnetic energy will light up the party as the ultimate MC!
                  This grand spectacle involves over 200 tireless talents who
                  have poured their hearts into crafting the show of a lifetime.
                  These extraordinary individuals worked hand in hand with
                  creative and gifted dance and music instructors, taking you on
                  a captivating journey through their artistry. You&#39;ll be
                  left breathless with every move, note, and beat as they
                  showcase their passion and skill on stage. At Art Republic, we
                  dare to dream without bounds. Looking ahead, VIBES will evolve
                  into a massive celebration, embracing legendary dancers,
                  acclaimed rappers, and celebrated entertainers from across the
                  globe. The promise of an even more dynamic and mesmerizing
                  extravaganza will leave you craving for more. The stage is
                  set, and the anticipation is mounting! Don&#39;t miss this
                  opportunity to experience the magic firsthand. Secure your
                  tickets for VIBES now! We eagerly await your presence. See you
                  there!
                </>
              }
            />
          </motion.div>
          <div className="flex-[0.25] w-32 rounded-lg flex justify-end">
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1)}
              className="relative mt-[30px] justify-end"
            >
              <div className="flex flex-col gap-10">
                <a
                  href="/ticket"
                  className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Buy Tickets
                  </span>
                </a>
                <a
                  className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-stone-900/50 rounded hover:bg-white group"
                  onClick={() => setOpen(true)}
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out">
                    View Seatmap
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConcertDetails;
