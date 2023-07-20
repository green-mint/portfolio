import { githubUrl, linkedinUrl, twitterUrl } from "@/app/data";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border-t-[0.08rem] pt-10 border-t-[#4a4a4a]">
      <h2 className="text-center text-3xl text-white">green-mint</h2>
      <p className="text-center my-4 px-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae ad
        odio quia facere consequatur hic atque.
      </p>
      <ul className="flex mt-4 justify-center text-white space-x-5">
        <li>
          <Link href={githubUrl}>
            <Github color="#fffbfe" />
          </Link>
        </li>
        <li>
          <Link href={twitterUrl}>
            <Twitter color="#fffbfe" />
          </Link>
        </li>
        <li>
          <Link href={linkedinUrl}>
            <Linkedin color="#fffbfe" />
          </Link>
        </li>
      </ul>

      <p className="mt-14 mb-2 text-center">
        Made with 🤍 by{" "}
        <span className="underline underline-offset-[3px]">
          <Link href="https://github.com/green-mint">green-mint</Link>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
