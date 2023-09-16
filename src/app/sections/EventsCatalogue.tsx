"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomText";
import ExploreCard from "../components/ExploreCard";
import { eventCatalogue } from "../constants";

const Events = () => {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col"
      >
        <TypingText title="| Explore" textStyles="text-center" />
        <TitleText title={<>Events Catalogue</>} textStyles="text-center" />
        <div className="mx-auto flex justify-items-center flex lg:flex-row flex-col grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-20 pb-10 lg:pt-40 lg:pb-20">
          {eventCatalogue.map((concert, index) => (
            <ExploreCard key={concert.id} index={index} {...concert} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
