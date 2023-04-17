'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} mx-auto bg-hero relative top-[2vh] h-screen bg-no-repeat pl- lg:h-screen lg:bg-no-repeat lg:bg-right`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
   <div className='mx-auto mt-[3vh] py-4 bg-gray-900/30 w-[90vw] h-[80vh] flex flex-col items-center justify-between'>
      <img src="/LogoNeu.png"   alt="LogoNeu" className="object-contain w-[33vw] h-[22vh] md:mt-[0vh] md:w-[45vw] md:h-[30vh] lg:hidden "/>
      
      <div className="flex justify-center items-center flex-col relative z-10 ">
        <motion.h1
          variants={textVariant(1.1)}
          className="mt-[37vh] mb-[3vh] headingE text-yellow-50 text-[9.66rem] md:mt-[6vh] sd:text-8xl md:text-[13.33rem] lg:-mt-[5vh] lg:mb-[2vh]  lg:text-[19rem] 2xl:text-[23rem]"
        >
          die
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}         
          className="mt[3-vh] flex flex-row justify-center items-center"
        >
          <motion.h1 className="-mt-[12vh] headingA lg:-mt-[18vh] text-[2.9rem] sd:text-[5.66rem] md:text-[7rem] lg:text-[11rem] text-red-700 2xl:headingF 2xl:text-[14rem]">
            kiez
          </motion.h1>
          <motion.h1 className="-mt-[12vh] headingA lg:-mt-[18vh] text-[2.9rem] sd:text-[5.66rem]  md:text-[7rem] lg:text-[11rem] text-red-700 2xl:headingF 2xl:text-[14rem]">
            kneipe
          </motion.h1>
        </motion.div>
      </div>
      </div>
      <motion.div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/*<a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
</a>*/}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
