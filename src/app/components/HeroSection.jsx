"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className=" text-color-transition text-transparent bg-clip-text">
            <span class="wave">👋</span> Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Khoa Pham",
                1000,
                "UI/UX Designer",
                1000,
                "Service Designer",
                1000,
                "Game Designer",
                1000,
                "Web Developer",
                1000,
                "Game Developer",
                1000,
              ]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="font-abc font-bold text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I love designing and creating 🚀. I&apos;m a lifelong learner, and I love what I do. A passionate Designer and Developer based in Australia.📍
          </p>
          <div>
            <Link
              href="/#contact"
              className="bg-color-transition px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 hover:bg-slate-800 text-white"
            >
            <span className="font-abc font-bold hover:bg-slate-800 rounded-full px-5 py-2 inline-block">Hire Me</span>
            </Link>
            <a
              href="/khoa-CV2.pdf" 
              download="khoa-CV2.pdf"
              className="bg-color-transition px-1 inline-block py-1 w-full sm:w-fit rounded-full b hover:bg-slate-800 text-white mt-3"
            >
              <span className="font-abc font-bold block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative animated-div overflow-hidden">
            <Image
                src="/images/KDProfile.png"
                alt="hero image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width={1354}
                height={1441}
            />
        </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
