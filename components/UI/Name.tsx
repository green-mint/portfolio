import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface Props {}

const Name: React.FC<Props> = ({}) => {
  return (
    <div className="text-center">
      <p className="font-pop sm:text-6xl text-5xl">Hi,</p>
      <div className="flex mt-4 justify-center">
        <p className="font-pop sm:text-8xl text-6xl sm:mt-5 mt-2">I'm&nbsp; </p>
        <div className="w-min font-fira">
          <p className="font-extrabold text-transparent min-w-min sm:text-9xl text-7xl bg-clip-text bg-gradient-to-r from-er-green to-er-blue">
            Saad
          </p>
        </div>
        <p className="font-pop sm:text-8xl text-6xl sm:mt-5 mt-2">,</p>
      </div>
      <p className="font-pop font-thin sm:text-5xl text-3xl mt-2">
        software engineer
      </p>
      <div className="flex justify-center p-5">
        <AiFillGithub size={40} className="mx-4" />
        <AiFillLinkedin size={40} className="mx-4" />
      </div>
    </div>
  );
};

export default Name;
