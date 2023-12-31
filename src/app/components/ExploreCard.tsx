"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Link from "next/link";
import Image from "next/image";

interface Props {
  key: string;
  id: number;
  imgUrl: any;
  title: any;
  loc: any;
  index: any;
  startDate: string;
  endDate: string;
  description: string;
}

const ExploreCard = ({
  key,
  id,
  imgUrl,
  title,
  loc,
  index,
  startDate,
  endDate,
  description,
}: Props) => (
  <Link
    href={{
      pathname: "/concert",
      query: {
        id: id,
        imgUrl: imgUrl,
        title: title,
        loc: loc,
        description: description,
        startDate: startDate,
        endDate: endDate,
      },
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.75)}
      className="flex md:flex-row flex-col gap-2"
    >
      <div className="rounded overflow-hidden shadow-lg w-96">
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
          <div className="font-bold text-xl mb-2 break-normal">{title}</div>
          <p className="text-gray-500 text-base">{loc}</p>
          <p className="text-gray-500 text-base">
            {new Date(startDate).toDateString() +
              " - " +
              new Date(endDate).toDateString()}
          </p>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default ExploreCard;
