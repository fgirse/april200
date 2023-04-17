"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import ScrollToTopButton from './ScrollToTopButton';
const Footer = () => (
  <section className="flex flex-col items-center justify-between">
    <ScrollToTopButton/>
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative flex-grow`}
  >
   
    <div className="footer-" />
   
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[34px] text-[44px] text-yellow-50">
          Rettungsanker
        </h4>
        <button
          type="button"
          className="flex items-center h-fit w-60 py-4 px-6 bg-[#bea235] rounded-[32px] gap-[12px]"
        >
          <img
            src="/ancericon.svg"
            alt="headset"
            className="w-[5vw] h-[5vh] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Schreibe email an den Rettungsanke11r
          </span>
        </button>
      </div>
      
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <Image
            src="/LogoAlt.png"
            height="12"
            width="120"
            alt=""
            className="font-extrabold text-[24px] text-white"
          />
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="headingG font-black text-gray-900">
              medicus design basel switzerland
            </span>
            &nbsp;&&nbsp;
            <a
              href="https://www.rettungsanker-freiburg.de"
              className="text-gray-100 hover:text-gray-300"
            >
              Rettungsanker-Freiburg
            </a>{" "}
            All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  </motion.footer>
  </section>
);

export default Footer;
