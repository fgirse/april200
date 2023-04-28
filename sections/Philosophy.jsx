'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Features from'../components/Feature';
import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} `} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Die Philosophie" textStyles="text-center" />
        <Features/>
      </motion.div>
    </section>
  );
};

export default Explore;
