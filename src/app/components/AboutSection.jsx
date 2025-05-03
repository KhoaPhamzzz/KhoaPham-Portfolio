"use client";
import React, { useRef, useEffect, useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "../css/HeroSection.css";
import "../css/skill.css";

const TAB_DATA = [
  {
    title: "Service-design",
    id: "Service-design",
    content: (
      <div className="flex flex-col items-start space-y-4">
        {["Service blueprints", "Current/future state mapping", "User journeys"].map((item, index) => (
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
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
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
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
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
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
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
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
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
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
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
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
          <li key={index} className="list-disc list-inside font-abc small transition duration-300 transform hover:scale-110">
            {item}
          </li>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-col space-y-4">
        {[
          {
            date: "June. 2022 – December. 2024",
            title: "Bachelor of Design (Games)",
            school: "RMIT University, Melbourne Australia",
            file: "/Testamur - Bachelor of Design (Games) Khoa Pham.pdf",
            name: "Testamur - Bachelor of Design (Games) Khoa Pham.pdf",
            label: "Download Testamur",
          },
          {
            date: "January. 2019 – January. 2022",
            title: "Bachelor of Information Technology",
            school: "Monash University, Melbourne Australia",
            file: "/Monash transcript Khoa Pham.pdf",
            name: "Monash transcript Khoa Pham.pdf",
            label: "Download Transcript",
          },
          {
            date: "April 2025",
            title: "Certificate III in Business",
            school: "Rexcel Training",
            file: "/BSB3Cert Khoa Pham.pdf",
            name: "BSB3Cert Khoa Pham.pdf",
            label: "Download Certificate",
          },
        ].map((cert, index) => (
          <div key={index} className="flex flex-col justify-between w-full">
            <p className="font-abc text-xs text-gray-400">{cert.date}</p>
            <p className="font-abc font-bold text-base">{cert.title}</p>
            <p className="font-abc text-sm text-gray-400 font-bold">{cert.school}</p>
            <div className="w-full pt-2">
              <a href={cert.file} download={cert.name} className="inline-block">
                <span className="font-abc bg-white hover:bg-slate-200 font-bold rounded-full px-3 py-1 text-xs md:text-sm lg:text-base block text-center text-black">
                  {cert.label}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Service-design");
  const [isPending, startTransition] = useTransition();
  const scrollRef = useRef(null);

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  // Scroll wheel to horizontal scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0 || e.shiftKey) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="text-white">
      <span className="-mt-200 text-black" id="about" aria-hidden="true">.</span>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="object-scale-down h-auto w-full max-w-md mx-auto"
          src="/images/about-image.jpg"
          width={3734}
          height={5468}
          alt="Side Photo"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="font-abc text-color-transition text-2xl font-black mb-4">About Me</h2>
          <h3 className="font-abc text-4xl font-bold mb-4">A dedicated Designer based in Australia 📍</h3>
          <p className="font-abc text-base">
            I blend design and technology to develop inclusive, user-focused solutions. As a Service and Human-Centred Designer, I aim to create meaningful impact, while my work in UI/UX and Interaction Design transforms these ideas into intuitive, engaging interfaces. With a background in game development and web programming, I bring hands-on technical skills to prototype, build, and test immersive experiences across digital platforms and VR game environments.
          </p>

          {/* Scrollable Tab Button Container */}
          <div className="relative mt-8">
            <div ref={scrollRef} className="overflow-x-auto whitespace-nowrap scrollbar-modern px-2">
              <div className="flex space-x-4 min-w-max px-2">
                {TAB_DATA.map((tabData) => (
                  <TabButton
                    key={tabData.id}
                    selectTab={() => handleTabChange(tabData.id)}
                    active={tab === tabData.id}
                  >
                    {tabData.title.replace(/-/g, " ")}
                  </TabButton>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
