'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import Image from 'next/dist/client/image';
import Modale05 from '../components/Modale/Modale05';
import Modale06 from '../components/Modale/Modale06';
import Modale07 from '../components/Modale/Modale07';
import Modale08 from '../components/Modale/Modale08';
import Modale09 from '../components/Modale/Modale09';
import Modale10 from '../components/Modale/Modale10';

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
      <div className='w-full h-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0lg:grid md:grid-cols-2 lg:grid-col3 lg:grid-rows-2 gap-5 justify-center items-center'>
          <Modale05/>
          <Modale06/>
          <Modale07/>
          <Modale08/>
          <Modale09/>
          <Modale10/>
          </div>




    </motion.div>
  </section>
 
</>   
)
export default Drinks;
