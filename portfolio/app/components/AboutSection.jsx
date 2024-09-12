import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { UserIcon } from "@heroicons/react/24/solid";
import TechSkill from "./TechSkill";

const techSkills = [
  {
    src: "/images/html-icon.png",
    alt: "HTML",
    title: "HTML",
    className: "row-start-2",
  },
  {
    src: "/images/css-icon.png",
    alt: "CSS",
    title: "CSS",
    className: "row-start-1",
  },
  {
    src: "/images/js-icon.png",
    alt: "JavaScript",
    title: "JAVASCRIPT",
    className: "row-start-2",
  },
  {
    src: "/images/wordpress-icon.png",
    alt: "WordPress",
    title: "WORDPRESS",
    className: "row-start-4",
  },
  {
    src: "/images/react-icon.png",
    alt: "React",
    title: "REACT",
    className: "row-start-3",
  },
  {
    src: "/images/nextjs-icon.png",
    alt: "Next.js",
    title: "NEXT.JS",
    className: "row-start-4",
  },
  {
    src: "/images/php-icon.png",
    alt: "php",
    title: "PHP",
    className: "row-start-6",
  },
  {
    src: "/images/mysql-icon.png",
    alt: "MySql",
    title: "MYSQL",
    className: "row-start-5",
  },
  {
    src: "/images/git-icon.png",
    alt: "Git",
    title: "GIT",
    className: "row-start-6",
  },
  {
    src: "/images/github-icon.png",
    alt: "GitHub",
    title: "GITHUB",
    className: "row-start-7",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="text-white mb-20 scroll-mt-32">
       <h1
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2424] to-[#4A569D]
             font-extrabold text-4xl sm:text-5xl lg:text-6xl py-4 text-center mb-10"
          >
            About Me
          </h1>
      <div className="lg:flex lg:flex-row justify-between text-center lg:text-left">
        <div className="lg:w-2/5 lg:mr-10 mb-20 lg:mb-0 self-center">
          <p className="pt-4 px-10 lg:px-0">
            Based in Vancouver, BC, Canada, I am a full-stack developer
            specializing in frontend web development, dedicated to
            creating and optimizing interactive, user-friendly, and feature-rich
            websites.
            <br></br>
            <br></br>
            My background is in accounting but diving into code and creating new
            and fun websites, made me change my direction in life. I love
            writing code, make beautiful things work and celebrate the outcome.
            <br></br>
            <br></br>
            With a keen eye for user experience, design and a strong
            attention to detail, I am passionate about how things function, how they look and the
            combination of both.
          </p>
          <div className="pt-10">
            <Link
              href="/#contact"
              className="px-12 py-3 mb-4 mr-0 min-[406px]:mr-4 inline-flex items-center justify-center w-fit rounded-lg sm:inline-block  
              bg-gradient-to-r from-[#DC2424] to-[#4A569D] text-white font-semibold text-center transition 
              duration-300 hover:from-[#bf1313] hover:to-[#2d3a81] ease"
            >
              Hire Me
            </Link>
            <Link
              href="/resume.pdf" 
              download="Miri_Markovitz_Resume_.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative sm:w-fit p-1 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-xl"
            >
              <span
                className="w-full h-full bg-gradient-to-br from-[#DC2424] to-[#4A569D] 
                group-hover:from-[#4A569D] group-hover:to-[#DC2424] absolute">
                </span>
              <span
                className="relative px-5 py-2 transition-all ease-out bg-[#252526] rounded-lg group-hover:bg-opacity-0 
                duration-400"
              >
                <span className="relative text-white">Download CV</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:ml-10 grid grid-cols-6 grid-rows-8 gap-4 items-center justify-items-center">
          {techSkills.map((skill, index) => (
            <TechSkill
              key={index}
              src={skill.src}
              alt={skill.alt}
              title={skill.title}
              className={skill.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
