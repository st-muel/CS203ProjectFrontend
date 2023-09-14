"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import {
  DescriptionText,
  SubTitleText,
  TypingText,
} from "../components/CustomText";
import StartSteps from "../components/StartingSteps";
import { exchangeRefundPolicy, pricingDetails } from "../constants/index";
import { Subtitles } from "lucide-react";
import NewFeatures from "../components/NewFeatures";

const Pricing = () => (
  //   <section className={`${styles.paddings} relative z-10`}>
  //     <motion.div
  //       variants={staggerContainer}
  //       initial="hidden"
  //       whileInView="show"
  //       viewport={{ once: false, amount: 0.25 }}
  //       className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  //     >
  //       <motion.div
  //         variants={fadeIn("left", "tween", 0.2, 1)}
  //         className="flex-[0.75] flex justify-center flex-col "
  //       >
  //         <SubTitleText title={<>Ticket Pricing</>} textStyles="" />
  //         <div className="mt-[31px] flex flex-col gap-[24px]">
  //           <TypingText title="| General Sales" textStyles="" />
  //           {/* {ExchangeRefundPolicy.map((feature, index) => (
  //             <StartSteps key={feature} number={index + 1} text={feature} />
  //           ))} */}
  //           <DescriptionText
  //             textStyles="text-left flex-1 font-bold text-[18px] text-[#B0B0B0] leading-[32.4px]"
  //             description={<>STANDARD</>}
  //           />
  //         </div>
  //       </motion.div>
  //     </motion.div>
  //   </section>
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        {/* <TypingText title="| Whats new?" textStyles="" /> */}
        <SubTitleText title={<>Ticket Pricing</>} textStyles="" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {pricingDetails.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Pricing;
