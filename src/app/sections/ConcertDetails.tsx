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
import SeatMapModal from "../components/SeatMapModal";
import Link from "next/link";

interface Props {
  id: number;
  imgUrl: any;
  title: any;
  loc: any;
  startDate: string;
  endDate: string;
  description: string;
}

const ConcertDetails = ({
  id,
  imgUrl,
  title,
  loc,
  startDate,
  endDate,
  description,
}: Props) => {
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
              description={description}
            />
          </motion.div>
          <div className="flex-[0.25] w-32 rounded-lg flex justify-end">
            <motion.div
              variants={fadeIn("down", "tween", 0.2, 1)}
              className="relative mt-[30px] justify-end"
            >
              <div className="flex flex-col gap-10">
                <Link
                  href={{
                    pathname: "/ballot",
                    // pathname: "/ticket",
                    query: {
                      id: id,
                      imgUrl: imgUrl,
                      title: title,
                      startDate: startDate,
                      endDate: endDate,
                      loc: loc,
                    },
                  }}
                  className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-24 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Join Ballot
                  </span>
                </Link>
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
