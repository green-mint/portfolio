import Image from "next/image";
import Link from "@/components/ui/link";

import {
  githubUrl,
  linkedinUrl,
  selectedBlogs,
  selectedProjects,
  skills,
  testimonials,
  twitterUrl,
} from "../data";
import { Github, Linkedin, MoveRight, Twitter } from "lucide-react";
import Projects from "@/components/Projects";
import { cn } from "@/lib/utils";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 lg:">
      {/* section hero */}
      <section className="mt-24 md:mt-32 lg:mt-40">
        <div className="md:px-6 xl:px-16">
          <h1 className="text-center text-4xl sm:text-5xl xl:text-6xl  text-white">
            Saad, a software engineer based in Islamabad
          </h1>
          <p className="mt-5 lg:mt-10 text-center leading-relaxed sm:px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nulla harum aliquam commodi et magnam doloribus possimus porro omnis
            sit! Quas!
          </p>

          <SocialIcons className="mt-6 lg:mt-10" />
        </div>

        <Image
          src="/me.jpeg"
          alt="Picture of the author"
          width={2000}
          height={1025}
          className="mt-12"
        />
      </section>

      {/* section about */}
      <section className="mt-28 lg:mt-36">
        <div className="lg:flex justify-between items-start ">
          <h2 className="text-3xl xl:text-4xl text-white lg:w-6/12">
            Saad helps create products that scale and drive revenue
          </h2>
          <p className="leading-relaxed mt-5 lg:mt-0 lg:w-5/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus
            porta lorem morbi hendrerit. Maecenas et, at quis purus.
          </p>
        </div>

        <div
          className={cn(
            "grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 xl:gap-x-8 mt-10 lg:mt-16",
            "[&>*:nth-child(1)]:border-t-[0.08rem] sm:[&>*:nth-child(2)]:border-t-[0.08rem] lg:[&>*:nth-child(3)]:border-t-[0.08rem]"
          )}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="py-6 xl:py-8 border-b-[0.08rem] border-b-[#4a4a4a] border-t-[#4a4a4a]">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* section projects */}
      <section className="mt-28 lg:mt-36">
        <div className="md:text-center md:max-w-xl mx-auto lg:mb-20">
          <h2 className="text-3xl md:text-5xl xl:text-6xl text-white">
            Saad&apos;s Work
          </h2>
          <p className="leading-relaxed mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus
            porta lorem morbi hendrerit. Maecenas et, at quis purus.
          </p>
          <Link
            className="text-white block mt-4 md:mt-8 md:mx-auto"
            href="/projects">
            Browse all Projects
          </Link>
        </div>
        {/* relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 */}
        <Projects projects={selectedProjects} />
      </section>

      {/* section testimonials */}
      <section className="mt-28 lg:mt-36 lg:flex">
        <div className="lg:mt-12 lg:w-1/3 xl:w-2/5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  text-white">
            Client Testimonials
          </h2>
          <Link className="block mt-5 lg:mt-8 w-fit text-white" href="/">
            Contact Me
          </Link>
        </div>

        <div className="grid md:grid-cols-2 md:gap-5 lg:grid-cols-1 lg:w-2/3 xl:w-3/5">
          {testimonials.map((testimonial, index) => (
            <div
              className={`py-9 ${
                index !== testimonials.length - 1 &&
                "border-b-[0.08rem] border-b-[#4a4a4a]"
              }`}
              key={index}>
              <p className="mt-3 text-white leading-relaxed">
                {'"'}
                {testimonial.quote}
                {'"'}
              </p>
              <span className="block text-white mt-5">{testimonial.name}</span>
              <span className="block mt-1">{testimonial.designation}</span>
            </div>
          ))}
        </div>
      </section>

      {/* section blogs */}
      <section className="mt-28 lg:mt-36">
        <div className="lg:flex justify-between">
          <h2 className="text-3xl lg:text-5xl text-white">
            Saad&apos;s Articles
          </h2>
          <Link className="block mt-5 w-fit text-white" href="/">
            Browse All
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 mt-10 pt-10 lg:pt-20 gap-y-14 text-white border-t-[0.08rem] border-t-[#4a4a4a]">
          {selectedBlogs.map((blog, index) => (
            <div
              className="group hover:cursor-pointer transition-colors"
              key={index}>
              <div className="flex text-xs space-x-3">
                <span className="group-hover:text-white/50 transition-colors duration-700">
                  {blog.category}
                </span>
                <span className="w-4 h-[1px] bg-white/20 self-center"></span>
                <span className="group-hover:text-white/50 transition-colors duration-700">
                  {blog.date}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl group-hover:text-white/50 transition-colors duration-700">
                  {blog.topic}
                </h3>
              </div>
              <div>
                <Link className="block mt-5 w-fit text-white" href={blog.link}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section contact */}
      <div className="p-20 lg:pt-36 xl:pb-32 text-center  text-white">
        <h3 className="text-xl">Need a developer?</h3>
        <div>
          <h2 className="mt-3 text-4xl xl:text-6xl lg:text-5xl text-center transition-all group cursor-pointer">
            Let&apos;s work together
            <MoveRight
              className="inline-block ml-3 transform translate-x-0 group-hover:translate-x-3 transition-transform"
              size={40}
              color="#fffbfe"
            />
          </h2>
        </div>
      </div>
    </main>
  );
}
