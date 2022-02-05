import React from 'react';
import { motion } from 'framer-motion';

function ScrollIcon() {
  return (
    <motion.div 
    animate={{
      y: [0, 12, 0, 12, 0],
    }}
    transition={{ repeat: Infinity, duration: 3, delay: 0 }} 
    className='w-8 h-14 border-2 rounded-2xl flex justify-center'>
      <motion.div 
      // animate={{
      //   y: [20, 0, 20, 0, 20],
      //   opacity: [1, 0.5, 1, 0.5, 1],
      // }} 
      // transition={{ repeat: Infinity, duration: 3, delay: 0 }}
      className='w-1 h-1 bg-white mt-3 rounded-md'>
      </motion.div>
    </motion.div>
  );
}

export default ScrollIcon;
