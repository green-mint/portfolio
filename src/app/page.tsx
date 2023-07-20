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
} from "./data";
import { Github, Linkedin, MoveRight, Twitter } from "lucide-react";
import Projects from "@/components/Projects";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="px-4 sm:px-6">
      {/* section hero */}
      <section>
        <h1 className="text-center text-4xl sm:text-5xl mt-24 text-white">
          Saad, a software engineer based in Islamabad
        </h1>
        <p className="mt-5 text-center leading-relaxed sm:px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          nulla harum aliquam commodi et magnam doloribus possimus porro omnis
          sit! Quas!
        </p>

        <ul className="flex mt-6 justify-center text-white space-x-5">
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

        <Image
          src="/me.jpeg"
          alt="Picture of the author"
          width={2000}
          height={1025}
          className="mt-12"
        />
      </section>

      {/* section about */}
      <section className="mt-28">
        <h2 className="text-3xl text-white">
          Saad helps create products that scale and drive revenue
        </h2>
        <p className="leading-relaxed mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus porta
          lorem morbi hendrerit. Maecenas et, at quis purus.
        </p>

        <div
          className={cn(
            "grid sm:grid-cols-2 sm:gap-x-4 mt-10",
            "[&>*:nth-child(1)]:border-t-[0.08rem]  sm:[&>*:nth-child(2)]:border-t-[0.08rem]"
          )}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="py-6 border-b-[0.08rem] border-b-[#4a4a4a] border-t-[#4a4a4a]">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* section projects */}
      <section className="mt-28">
        <h2 className="text-3xl text-white">Saad&apos;s Work</h2>
        <p className="leading-relaxed mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus porta
          lorem morbi hendrerit. Maecenas et, at quis purus.
        </p>
        {/* relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 */}
        <Link className="text-white block mt-4" href="/projects">
          Browse all Projects
        </Link>
        <Projects projects={selectedProjects} />
      </section>

      {/* section testimonials */}
      <section className="mt-28">
        <h2 className="text-3xl text-white">Client&apos;s Testimonials</h2>
        <Link className="block mt-5 w-fit text-white" href="/">
          Contact Me
        </Link>

        <div className="flex flex-col">
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
      <section className="mt-28">
        <h2 className="text-3xl text-white">Saad&apos;s Articles</h2>
        <Link className="block mt-5 w-fit text-white" href="/">
          Browse All
        </Link>

        <div className="flex mt-10 pt-10 flex-col space-y-14 text-white border-t-[0.08rem] border-t-[#4a4a4a]">
          {selectedBlogs.map((blog, index) => (
            <div key={index}>
              <div className="flex text-xs space-x-3">
                <span>{blog.category}</span>
                <span className="w-4 h-[1px] bg-white/20 self-center"></span>
                <span>{blog.date}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl">{blog.topic}</h3>
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
      <div className="p-20 text-center  text-white">
        <h3 className="text-xl">Need a developer?</h3>
        <div>
          <h2 className="mt-3 text-4xl text-center transition-all group cursor-pointer">
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
