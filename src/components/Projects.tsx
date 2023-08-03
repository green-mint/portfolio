"use client";

import { selectedProjects } from "@/app/data";
import React, { useState } from "react";
import Link from "./ui/link";
import { cn } from "@/lib/utils";
import { Project } from "@/payload/payload-types";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div
      className={cn(
        `mt-10 border-t-[0.08rem] flex flex-col transition-colors duration-700`,
        hoveredProject === 0 ? "border-t-white" : "border-t-[#4a4a4a]"
      )}>
      {projects.map((project, index) => (
        <div
          className={cn(
            "flex flex-col sm:flex-row sm:space-x-10 py-10 lg:py-16 border-b-[0.08rem] group cursor-pointer transition-colors duration-700",
            hoveredProject === index || hoveredProject === index + 1
              ? "border-b-white"
              : "border-b-[#4a4a4a]"
          )}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
          key={index}>
          <div>
            <h3 className="text-2xl sm:mt-0.5">0{index + 1}</h3>
          </div>
          <div className="md:flex md:space-x-3.5">
            <div className="md:w-3/4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-0 text-white">
                {project.title}
              </h2>
              <p className="mt-3 md:mt-8 leading-relaxed">{project.oneLiner}</p>
              <Link className="text-white block mt-3 md:mt-8" href="/">
                Read More
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/4 flex flex-col md:items-center md:justify-center">
              {project.techStack.map((tech, index) => (
                <span key={index} className="block mt-3 md:mt-5">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
