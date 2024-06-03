"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl pt-10 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2424] to-[#4A569D]">
              Hey! I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Miri Markovitz",
                2000,
                "Front-End Developer",
                1000,
                "WordPress Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
         Specializing in front-end web development, I am dedicated to creating and optimizing interactive, 
         user-friendly, and feature-rich websites. 
         <br></br>With a keen eye for user experience, design and a strong 
         attention to detail, I can deliver original and efficient web solutions. 
         <br></br>I am capable of building new websites from start to finish, 
         passionate about learning new skills, and successfully collaborate with a team of other software 
         professionals.

          </p>
          <div>
            <Link
              href="/#contact"
              className="px-10 inline-block py-3 w-full sm:w-fit rounded mr-4 
              bg-gradient-to-r from-[#DC2424] to-[#4A569D] text-white font-semibold text-center transition 
              duration-300 hover:from-[#bf1313] hover:to-[#2d3a81] ease"
            >
              Hire Me
            </Link>
            {/* <Link
              href="/#contact"
              class="relative inline-flex items-center justify-center px-10 py-3 mr-4 overflow-hidden font-medium
            text-white rounded-lg shadow-2xl group"
            >
              <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-gradient-to-r from-[#DC2424] to-[#4A569D] 
              rounded-full blur-md ease"></span>
              <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#4A569D] rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#DC2424] rounded-full blur-md"></span>
              </span>
              <span class="relative text-white">Hire Me</span>
            </Link> */}
            <Link
              href="/"
              className="relative p-1 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span
                class="w-full h-full bg-gradient-to-br from-[#DC2424] to-[#4A569D] 
                group-hover:from-[#4A569D] group-hover:to-[#DC2424] absolute"
              ></span>
              <span class="relative px-5 py-2 transition-all ease-out bg-[#252526] rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white">Download CV</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-8">
          <div className="rounded-full bg-gradient-to-br from-[#DC2424] to-[#4A569D] p-1">
            <div className="rounded-full bg-[#323233] w-500 h-400">
              <Image
                className="rounded-full"
                src="/images/hero-image.png"
                alt="Miri Markovitz"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
