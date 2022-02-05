import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NameLetter from "./NameLetter";
interface Props {}

const Name: React.FC<Props> = ({}) => {
  return (
    <div className="text-center">
      <div className="flex mt-4 justify-center">
        <p className="font-pop sm:text-8xl text-6xl sm:mt-5 mt-2">
          I&lsquo;m&nbsp;{" "}
        </p>
        <motion.div className="w-min font-fira">
          <p className="z-10 flex font-extrabold text-transparent min-w-min sm:text-9xl text-7xl bg-clip-text bg-gradient-to-r from-er-green to-er-blue">
            <NameLetter letter="S" delay={0} />
            <NameLetter letter="a" delay={0.5} />
            <NameLetter letter="a" delay={1} />
            <NameLetter letter="d" delay={1.5} />
          </p>
        </motion.div>
      </div>
      <p className="font-pop font-thin sm:text-5xl text-3xl mt-2">
        software engineer
      </p>
      <div className="flex justify-center p-5">
        <a target="_blank" href="https://github.com/green-mint/" rel="noreferrer">
          <AiFillGithub size={40} className="mx-4 hover:cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-saad-ur-rehman-0945a91b0/" rel="noreferrer">
          <AiFillLinkedin size={41} className="mx-4 hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Name;
