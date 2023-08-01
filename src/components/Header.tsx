import React from "react";

type Props = {};

const Hamburger = () => {
  return (
    <div className="flex flex-col justify-between h-[14px] my-auto">
      <div className="w-[39px] min-h-[1px] bg-white"/>
      <div className="w-[39px] min-h-[1px] bg-white"/>
    </div>
  );
};

const Header = (props: Props) => {
  return (
    <header className="flex z-50 bg-[#1d1d1d]/60 backdrop-blur-md fixed top-0 w-full max-w-7xl px-4 text-white justify-between text-xl py-4">
      <span>
        {"<"}green-mint{" />"}
      </span>
      <Hamburger />
    </header>
  );
};

export default Header;
