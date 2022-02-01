import React from "react";
import HeaderItem from "./HeaderItem";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return (
    <div className="sm:flex justify-between mt-5 z-10">
      <a className="font-shadow text-2xl hover:cursor-pointer">{"< green-mint />"}</a>
      <div className="sm:flex hidden text-center border-b-2 sm:border-0 mt-1">
        <HeaderItem name="About" />
        <HeaderItem name="Projects" />
        <HeaderItem name="Resume" />
        <HeaderItem name="Contact" />
      </div>
    </div>
  );
};

export default Header;
