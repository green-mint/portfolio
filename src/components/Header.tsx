"use client";

import { cn } from "@/lib/utils";
import React, { use, useEffect } from "react";
import HeaderContent from "./HeaderContent";

type Props = {};

const Hamburger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col justify-center h-[14px] my-auto">
      <div
        className={cn(
          "w-[35px] min-h-[1px] -translate-y-[7px] bg-white transition-all duration-300",
          isOpen && "rotate-45 translate-y-0"
        )}
      />
      <div
        className={cn(
          "w-[35px] min-h-[1px] translate-y-[7px] bg-white transition-all duration-300",
          isOpen && "-rotate-45 translate-y-0"
        )}
      />
    </div>
  );
};

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex z-50 bg-[#1d1d1d]/60 backdrop-blur-md fixed top-0 w-full max-w-7xl px-4 text-white justify-between text-xl py-4">
        <span>
          {"<"}green-mint{" />"}
        </span>
        <Hamburger
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </header>

      <div
        className={cn(
          "absolute inset-0 z-20 w-screen h-screen bg-[#1d1d1d] transition-all duration-300",
          isMenuOpen && "translate-y-0 bg-opacity-100",
          !isMenuOpen && "-translate-y-full opacity-0"
        )}>
        <div className="w-full max-w-7xl mt-20 px-4 mx-auto">
          <HeaderContent />
        </div>
      </div>
    </>
  );
};

export default Header;
