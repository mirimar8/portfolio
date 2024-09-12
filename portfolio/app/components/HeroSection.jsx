"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="h-screen grid items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 text-center lg:text-left content-center mt-40 mb-20 lg:my-0">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
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
        </div>

        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-gradient-to-br from-[#DC2424] to-[#4A569D] p-1">
            <div className="rounded-full bg-[#323233] w-500 h-400">
              <Image
                className="rounded-full"
                src="/images/hero-image.png"
                alt="Miri Markovitz"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
