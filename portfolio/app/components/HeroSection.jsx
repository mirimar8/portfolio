"use client"

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
                "Miri",
                1000,
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
            I love writing code, make beautiful things work and celebrate the
            outcome.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-10 inline-block py-3 w-full sm:w-fit rounded mr-4 
              bg-gradient-to-r from-[#DC2424] to-[#4A569D] text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded 
              bg-gradient-to-br from-[#DC2424] to-[#4A569D] text-white mt-3"
            >
              <span className="block bg-[#252526] rounded px-5 py-2">
                Download CV
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
