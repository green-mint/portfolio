import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { MenuButton } from "./MenuButton";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="flex sm:justify-around justify-between mt-5">
      <a className="font-shadow text-2xl hover:cursor-pointer z-30">
        {"< green-mint />"}
      </a>
      <div className="sm:hidden z-30 mt-2">
        <MenuButton
          isOpen={showMobileMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="z-30"
          color="white"
          strokeWidth={2}
          height={16}
          width={23}
        />
      </div>
      <MobileMenu isOpen={showMobileMenu} />
      <div className="sm:flex hidden text-center border-b-2 sm:border-0 mt-1">
        <HeaderItem name="About" />
        <HeaderItem name="Projects" />
        <HeaderItem name="Resume" href="https://nustedupk0-my.sharepoint.com/:b:/g/personal/mrehman_bscs20seecs_student_nust_edu_pk/EfRbiBpfGrtCqTrMZmsdfhYBM_GtGW6bSf4dts1iv4y90w?e=YM3bQf" target="_blank"/>
        <HeaderItem name="Contact" href="mailto:saad.521509@gmail.com"/>
      </div>
    </div>
  );
};

export default Header;
