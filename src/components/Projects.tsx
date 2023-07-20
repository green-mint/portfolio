"use client";

import { selectedProjects } from "@/app/data";
import React, { useState } from "react";
import Link from "./ui/link";
import { cn } from "@/lib/utils";

type Props = {
  projects: typeof selectedProjects;
};

const Projects = ({ projects }: Props) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div
      className={cn(
        `mt-10 border-t-[0.08rem] flex flex-col transition-colors duration-700`,
        hoveredProject === 0 ? "border-t-white" : "border-t-[#4a4a4a]"
      )}>
      {selectedProjects.map((project, index) => (
        <div
          className={cn(
            "py-10 border-b-[0.08rem] group cursor-pointer transition-colors duration-700",
            (hoveredProject === index || hoveredProject === index + 1) ? "border-b-white" : "border-b-[#4a4a4a]"
          )}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
          key={index}>
          <h3 className="text-2xl">0{index + 1}</h3>
          <h2 className="text-3xl mt-3 text-white">{project.name}</h2>
          <p className="mt-3 leading-relaxed">{project.description}</p>
          <Link className="text-white block mt-3" href="/">
            Read More
          </Link>
          <div className="mt-8">
            {project.skills.map((skill, index) => (
              <span key={index} className="block mt-3">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
