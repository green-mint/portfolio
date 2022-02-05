import React from "react";
import { motion } from "framer-motion";

interface Props {
  name: string;
  href?: string;
  target?: string;
}

const HeaderItem: React.FC<Props> = ({ name, href, target }) => {
  return (
    <a href={href} target={target} rel={target? "noreferrer": ""}>
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        className="mx-5 font-fira font-semibold sm:pt-0 pb-3">
        <div className="">
          <p className="text-xl sm:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-er-green hover:to-er-blue hover:underline-offset-2 hover:cursor-pointer">
            {name}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default HeaderItem;
