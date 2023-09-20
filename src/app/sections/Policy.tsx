"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { SubTitleText, TypingText } from "../components/CustomText";
import StartSteps from "../components/StartingSteps";
import { exchangeRefundPolicy } from "../constants/index";

const Policy = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col "
      >
        {/* <TypingText title="| Exchange & Refund Policy" textStyles="" /> */}
        <SubTitleText title={<>Exchange & Refund Policy</>} textStyles="" />
        <div className="mt-[31px] flex flex-col gap-[24px]">
          {exchangeRefundPolicy.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Policy;
