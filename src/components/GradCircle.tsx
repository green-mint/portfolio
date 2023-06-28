import React, { SVGAttributes } from "react";

type Props = {
  width?: SVGAttributes<SVGSVGElement>["width"];
  height?: SVGAttributes<SVGSVGElement>["height"];
  className?: SVGAttributes<SVGSVGElement>["className"];
};

const GradCircle = ({ width=400, height=400, className }: Props) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 482 482"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="circle">
        <circle
          id="circle_2"
          cx="242"
          cy="242"
          r="239"
          stroke="url(#paint0_linear_10_12)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="250 5"
        />
        <path
          id="arc"
          d="M463.99 152.255C486.371 208.494 486.676 271.112 464.845 327.566"
          stroke="#CECECE"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_10_12"
          x1="242"
          y1="2"
          x2="257"
          y2="496"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#040405" stopOpacity="0.42" />
          <stop offset="0.486753" stopColor="#393939" />
          <stop offset="0.95636" stopColor="#181818" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradCircle;
