"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import {
  DescriptionText,
  SubTitleText,
  TypingText,
} from "../components/CustomText";
import StartSteps from "../components/StartingSteps";
import { PricingDetail } from "../concert/page";
import { Subtitles } from "lucide-react";
import NewFeatures from "../components/NewFeatures";

interface Props {
  sectionPricingDetails: PricingDetail[];
}

const Pricing = ({sectionPricingDetails} : Props) => (
  <section className={`${styles.paddings} relative`}>
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
        <div className="mt-[40px] flex flex-wrap justify-between gap-[24px]">
          {sectionPricingDetails.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Pricing;
