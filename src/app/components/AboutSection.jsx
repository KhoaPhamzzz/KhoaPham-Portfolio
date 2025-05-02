"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import '../css/HeroSection.css';
import '../css/skill.css';


import HtmlIcon from "../../../public/html-icon.png";
import CssIcon from "../../../public/css-icon.png";
import JavascriptIcon from "../../../public/javascript-icon.png";
import TypescriptIcon from "../../../public/typescript10.svg";
import TailwindIcon from "../../../public/tailwind-icon.png";
import NextjsIcon from "../../../public/nextjs-icon.svg";
import ReactIcon from "../../../public/react-icon.png";
import D3Icon from "../../../public/d3-icon.svg";
import phpIcon from "../../../public/php-icon.svg";
import MySQLIcon from "../../../public/mysql-icon.svg";
import AdobexdIcon from "../../../public/adobexd-icon.svg";
import RIcon from "../../../public/r-icon.svg";
import RubyIcon from "../../../public/ruby-icon.svg";
import SPSSIcon from "../../../public/spss-icon.svg";
import PythonIcon from "../../../public/python-icon.svg";
import CIcon from "../../../public/c-icon.svg";
import CsharpIcon from "../../../public/csharp-icon.svg";
import AngularIcon from "../../../public/angular.svg";
import PostmanIcon from "../../../public/postman.svg";
import FigmaIcon from "../../../public/figma.svg";
import SwaggerIcon from "../../../public/swagger.svg";


const TAB_DATA = [
  {
    title: "Service-design",
    id: "Service-design",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Service blueprints", "Current/future state mapping", "User journeys"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Human-centred-design",
    id: "Human-centred-design",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Co-design facilitation", "Empathy mapping", "User personas"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "User-research",
    id: "User-research",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Interviews", "Usuability testing", "Thematic analysis"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Design-tools",
    id: "Design-tools",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Figma", "Miro", "Creately", "Adobe XD"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Front-end/prototyping",
    id: "Front-end/prototyping",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["HTML", "CSS", "JavaScript", "React"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Game development",
    id: "Game development",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Unity", "OpenXR", "Oculus SDK"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Programming-languages",
    id: "Programming-languages",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Python", "C++", "C#"].map((item, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            <li className="list-disc list-inside font-abc small">{item}</li>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col justify-between w-full">
          <p className="font-abc text-xs text-gray-400">
            June. 2022 – December. 2024
          </p>
          <p className="font-abc font-bold text-base">
            Bachelor of Design (Games)
          </p>
          <p className="font-abc text-sm text-gray-400 font-bold">
            RMIT University, Melbourne Australia
          </p>
          
          <div className="w-full pt-2">
            <a href="/Testamur - Bachelor of Design (Games) Khoa Pham.pdf" download="Testamur - Bachelor of Design (Games) Khoa Pham.pdf" className="w-full transition duration-300 ease-in-out rounded-full text-black inline-block">
              <span className="font-abc bg-white hover:bg-slate-200 font-bold rounded-full px-3 py-1 text-xs md:text-sm lg:text-base block text-center">
                Download Testamur
              </span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col justify-between w-full">
          <p className="font-abc text-xs text-gray-400">
            January. 2019 – January. 2022
          </p>
          <p className="font-abc font-bold text-base">
          Bachelor of Information Technology
          </p>
          <p className="font-abc text-sm text-gray-400 font-bold">
          Monash University, Melbourne Australia 
          </p>

          <div className="w-full pt-2">
            <a href="/Monash transcript Khoa Pham.pdf" download="Monash transcript Khoa Pham.pdf" className="w-full transition duration-300 ease-in-out rounded-full text-black inline-block">
              <span className="font-abc bg-white hover:bg-slate-200 font-bold rounded-full px-3 py-1 text-xs md:text-sm lg:text-base block text-center">
                Download Transcript
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full">
          <p className="font-abc text-xs text-gray-400">
            April 2025
          </p>
          <p className="font-abc font-bold text-base">
          Certificate III in Business
          </p>
          <p className="font-abc text-sm text-gray-400 font-bold">
          Rexcel Training 
          </p>

          <div className="w-full pt-2">
            <a href="/BSB3Cert Khoa Pham.pdf" download="BSB3Cert Khoa Pham.pdf" className="w-full transition duration-300 ease-in-out rounded-full text-black inline-block">
              <span className="font-abc bg-white hover:bg-slate-200 font-bold rounded-full px-3 py-1 text-xs md:text-sm lg:text-base block text-center">
                Download Certificate
              </span>
            </a>
          </div>
        </div>
      </div>

      


    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Programming-languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <span class="-mt-200 text-black"  id="about" alt="aboutsection">.</span>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image class="object-scale-down [h-684px] w-[467px]" src="/images/about-image.jpg" width={3734} height={5468} alt="Side Photo" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-abc text-color-transition text-2xl font-black text-white mb-4">About Me</h2>
          <h3 className="font-abc text-4xl font-bold text-white mb-4">A dedicated Designer based in Australia 📍</h3>
          <p className="font-abc text-base">
          I blend design and technology to develop inclusive, user-focused solutions. As a Service and Human-Centred Designer, I aim to create meaningful impact, while my work in UI/UX and Interaction Design transforms these ideas into intuitive, engaging interfaces. With a background in game development and web programming, I bring hands-on technical skills to prototype, build, and test immersive experiences across digital platforms and VR game environments.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("Service-design")}
              active={tab === "Service-design"}
            >
              {" "}
              Service design{" "}
          </TabButton>
          <TabButton
              selectTab={() => handleTabChange("Human-centred-design")}
              active={tab === "Human-centred-design"}
            >
              {" "}
              HCD{" "}
          </TabButton>
          <TabButton
              selectTab={() => handleTabChange("User-research")}
              active={tab === "User-research"}
            >
              {" "}
              User research{" "}
          </TabButton>
          <TabButton
              selectTab={() => handleTabChange("Design-tools")}
              active={tab === "Design-tools"}
            >
              {" "}
              Design tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Front-end/prototyping")}
              active={tab === "Front-end/prototyping"}
            >
              {" "}
              Web development{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Game development")}
              active={tab === "Game development"}
            >
              {" "}
              Game/VR development{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("Programming-languages")}
              active={tab === "Programming-languages"}
            >
              {" "}
              Programming languages{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
