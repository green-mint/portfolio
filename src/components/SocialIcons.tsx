import { githubUrl, linkedinUrl, twitterUrl } from "@/app/data";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};


const SocialIcons = ({ className }: Props) => {
  return (
    <ul className={cn("flex justify-center text-white space-x-5", className)}>
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
  );
};

export default SocialIcons;
