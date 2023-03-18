'use client';

import { motion } from 'framer-motion';
import Team from '../components/Team';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import NukaCar from'../components/NukaCar';
import Image from 'next/dist/client/image';
const Insights = () => (
  <><section id="section-drinks" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Impressionen" textStyles="text-center" />
      <TitleText title={<> </>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
  
  <section className=" mx-auto w-full rounded-2xl linear-gradient(rgb(55, 65, 81), rgba(17, 24, 39,.6), rgba(0, 0, 0,0)) py-2 md:mx-auto md:w-full lg:py-20">
      <div className="mb-2 w-36 h-36 lg:-mt-2 lg:w-3/12 lg:p-8 lg:transform translate-x- ">
        <Image
          src="/Albers-white.png"
          alt="Impressionen"
          height="208"
          width="195" />
      </div>
      <h1 className="headingA mb-[3vh] text-center text-[2.3rem] text-yellow-600 lg:-mt-20 lg:text-[5.66rem] lg:text-yellow-500">
        impressionen aus dem Rettungsanker
      </h1>

      <div className="mx-auto h-96 w-80 lg:mt-[5vh] lg:h-full lg:w-1/4 lg:border-4 lg:border-slate-100">
        <NukaCar />
      </div>
      <p className=" text-center text-xs text-white lg:text-lg">
        Impressionen aus dem Rettungsanker
      </p>
    </section></>
);

export default Insights;
