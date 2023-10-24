"use client";
import { motion } from "framer-motion";
// import styles from "../styles";
import { fadeIn } from "../utils/motion";
// import Link from "next/link";
// import Image from "next/image";

const ExploreCard = {}
  return(
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.75)}
      className="flex md:flex-row flex-col gap-2"
    >
      <div className="rounded overflow-hidden shadow-lg">
        <div className="relative h-48 w-96 bg-stone-600">
          <Image
            className="md:object-scale-down"
            src={imgUrl}
            alt=""
            objectFit="contain"
            fill
          />
        </div>

        <div className="px-6 py-4 bg-stone-900/50">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-500 text-base">{loc}</p>
          <p className="text-gray-500 text-base">
            {new Date(startDate).toDateString() +
              " - " +
              new Date(endDate).toDateString()}
          </p>
        </div>
      </div>
    </motion.div>
  )
);

export default ExploreCard;
