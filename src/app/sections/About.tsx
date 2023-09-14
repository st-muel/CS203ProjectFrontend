"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomText";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Ticket Winners" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Introducing{" "}
        <span className="font-extrabold text-white">Ticket Winners </span>: Your
        Ultimate Concert Experience! Get ready for a revolutionary way to secure
        your spot at the{" "}
        <span className="font-extrabold text-white">hottest</span> concerts in
        town! Ticket Winners is here to make sure you{" "}
        <span className="font-extrabold text-white">never miss a beat.</span>{" "}
        Stay tuned for the future of concert ticketing!
        <span className="font-extrabold text-white">
          🎤🎉 #TicketWinners #ConcertExperience
        </span>
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[24px] h-[28px] object-contain mt-6"
        fill-rule="evenodd"
      />
    </motion.div>
  </section>
);

export default About;
