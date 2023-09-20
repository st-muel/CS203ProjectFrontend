"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({ key, id, imgUrl, title, loc, index, date }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 1.75)}
    className="flex md:flex-row flex-col gap-2"
  >
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="object-contain h-48 w-96 md:object-scale-down bg-stone-600"
        src={imgUrl}
        alt=""
      ></img>
      <div className="px-6 py-4 bg-stone-900/50">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-500 text-base">{loc}</p>
        <p class="text-gray-500 text-base">{date}</p>
      </div>
    </div>
  </motion.div>
);

export default ExploreCard;
