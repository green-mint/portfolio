import Link from "next/link";
import React from "react";
import SocialIcons from "./SocialIcons";

type Props = {};

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const HeaderContent = (props: Props) => {
  return (
    <div className="mt-32 px-3">
      <ul className="flex flex-col space-y-7">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-3xl text-white/80 cursor-pointer hover:text-white/50 transition-all duration-300">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <SocialIcons className="mt-10 w-fit" />
    </div>
  );
};

export default HeaderContent;
