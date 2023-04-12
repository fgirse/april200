'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import Image from 'next/dist/client/image';
import Modale05 from '../components/Modale/Modale05';
const Drinks = () => (
  <><section id="section-drinks" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Drinks " textStyles="text-center" />
      <TitleText title={<> </>} textStyles="text-center" />
      <h1 className='text-center text-yellow-500 headingA text-[3rem] md:text-[4rem] lg:text-[6rem]'>Drinks & Snacks</h1>
      <div className="mb-[5vh] mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>

          <Modale05/>




    </motion.div>
  </section>
 
</>   
)
export default Drinks;
