import React from "react";
import { motion } from "framer-motion";

function NameLetter({ letter, delay }) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0, -5, 0],
      }}
      transition={{ repeat: Infinity, duration: 3, delay: delay }}
      >
      {letter}
    </motion.div>
  );
}

export default NameLetter;
