"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";
import Image from "next/dist/client/image";
import Modale05 from "../components/Modale/Modale05";
import Modale06 from "../components/Modale/Modale06";
import Modale07 from "../components/Modale/Modale07";
import Modale08 from "../components/Modale/Modale08";
import Modale09 from "../components/Modale/Modale09";
import Modale10 from "../components/Modale/Modale10";
import { GridDrink } from "../utils/";

const Drinks = () => {
  return (
    <section id="section-drinks" className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Drinks " textStyles="text-center" />
        <TitleText title={<> </>} textStyles="text-center" />
        <h1 className="text-center text-yellow-500 headingA text-[3rem] md:text-[4rem] lg:text-[6rem]">
          Drinks & Snacks
        </h1>
        <div className="mb-[5vh] mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
<section className="flex flex-col items-center">
{/*<div className="w-full h-full rounded-2xl bg-red-100/10 grid grid-cols-1 md:grid-cols-2 md:gap-x-5 md:gap-y-5 lg:grid-cols-3 2xl:grid-cols-4 ">*/}

            <div className="contdrinks">
         <div className="w-[20 vw] border-8">
        <Modale05 />
         </div>
        <div className="w-[20 vw] border-8">
        <Modale06  />
        
        </div>
        <div className="w-[20 vw] border-8">
        <Modale07  />
       
        </div>
        <div className="w-[20 vw] border-8">

        <Modale08  />
        
        </div>
        <div className="w-[20 vw] border-8">
        <Modale09/>
        
        </div>
        <div className="w-[20 vw] border-8">

        <Modale10  />
        
        </div>
        </div>


</section>
        
      </motion.div>
    </section>
  );
};
export default Drinks;
