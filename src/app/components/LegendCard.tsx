"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import { legendDetails } from "../constants";

interface Props {
  key: string;
  id: string;
  name: string;
  price: string;
  color: string;
}

const LegendCard = ({ key, id, name, price, color }: Props) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="mx-auto flex flex-col"
  >
    <div className="grid grid-cols-2 gap-5">
      <div className="">
        <span
          className={`w-2 h-2 inline-block rounded-full mr-2 ${color}`}
        ></span>
        <span className="text-gray-600">{name}</span>
      </div>
      <div className="">
        <span className="text-gray-600">{price}</span>
      </div>
    </div>
  </motion.div>
);

export default LegendCard;
