"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import styles from "../styles";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Ticket Winners
        </h4>
        <div className="flex gap-4 pt-10">
          {socials.map((social) => (
            <img
              src={social.url}
              alt={social.name}
              key={social.name}
              className="w-[44px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="text-[14px] text-white">
            Purchase Policy | Privacy Policy | Cookies | Cookie Settings
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 TicketWinners. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
