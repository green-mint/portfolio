import React from 'react';
import { motion } from 'framer-motion';
import HeaderItem from './HeaderItem';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}

function MobileMenu({ isOpen }) {
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      className="fixed w-full h-full bg-opacity-90 bg-black inset-0 z-10 flex flex-col items-center"
    >
      <div>
        <div className="flex flex-col text-center mt-32 items-center">
          <HeaderItem name='About' />
          <HeaderItem name='Projects' />
          <HeaderItem name='Resume' href='https://nustedupk0-my.sharepoint.com/:b:/g/personal/mrehman_bscs20seecs_student_nust_edu_pk/EfRbiBpfGrtCqTrMZmsdfhYBM_GtGW6bSf4dts1iv4y90w?e=YM3bQf' target="_blank"/>
          <HeaderItem name='Contact' href='mailto:saad.521509@gmail.com'/>
        </div>
      </div>
    </motion.nav>
  )
}

export default MobileMenu;
