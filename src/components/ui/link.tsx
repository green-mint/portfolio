import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link = ({ href, children, className }: Props) => {
  return (
    <NextLink
      className={cn(
        "font-semibold w-fit",
        "relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-700",
        className
      )}
      href={href}>
      {children}
    </NextLink>
  );
};

Link.displayName = "Link";

export default Link;
