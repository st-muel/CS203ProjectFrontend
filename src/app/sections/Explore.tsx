"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomText";
import ExploreCard from "../components/ExploreCard";
import { exploreConcerts } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("concert-5");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Concerts" textStyles="text-center" />
        <TitleText title={<>Top Picks</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreConcerts.map((concert, index) => (
            <ExploreCard
              key={concert.id}
              {...concert}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
