"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import '../css/HeroSection.css';

const projectsData = [
  {
    id: 1,
    title: "Dental Landing Page",
    skilluse: "Nextjs Tailwind",
    detailedDescription: "Introducing a sleek and stylish landing page project designed exclusively for a cutting-edge dental clinic. Our emphasis lies solely on crafting a captivating frontend experience that not only showcases the clinic's excellence but also leaves a lasting impression on visitors.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web UI/UX"],
    gitUrl: "https://github.com/KhoaPhamzzz/landing-page",
    previewUrl: "https://landing-page-beta-sable.vercel.app/",
  },
  {
    id: 2,
    title: "Next Portfolio Website",
    skilluse: "Next.js Tailwind JavaScript",
    detailedDescription: "Welcome to my portfolio website, a concise yet comprehensive platform where I highlight my skills, technologies, and a curated selection of past and present projects.",
    image: "/images/projects/4.png",
    tag: ["All", "Web UI/UX"],
    gitUrl: "https://github.com/KhoaPhamzzz/New-Portfolio-main",
    previewUrl: "https://khoaphams.com",
  },
  {
    id: 3,
    title: "Water Management Website",
    skilluse: "Next Tailwind JavaScript",
    detailedDescription: "This project aims to create a user-friendly website for real-time monitoring of essential water parameters in aquaculture. Users, including administrators and the public, can access live data on pH, H2S, NO3, NH4, and temperature (T0) from a central server. This innovative solution enhances aquaculture practices and sustainability in Binh Dinh Province.",
    image: "/images/projects/5.png",
    tag: ["All", "Web UI/UX"],
    gitUrl: "https://water-management-website-info-page.vercel.app/",
    previewUrl: "https://pondwatcher-dashboard.vercel.app/",
  },
  {
    id: 4,
    title: "Games Design and Development Portfolio",
    skilluse: "C# Unity Adobe OpenXR Oculus-sdk Maya Blender",
    detailedDescription: "This page features all my published games, ready for you to play or download. Whether you're exploring browser-based prototypes or full releases on different platforms, each game here is a direct link to my work in game design and development. Enjoy the experience and feel free to share your feedback.",
    image: "/images/projects/1.png",
    tag: ["All", "Games"],
    gitUrl: "https://kd2301.itch.io/",
    previewUrl: "https://kd2301.itch.io/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="font-abc text-color-transition text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web UI/UX"
          isSelected={tag === "Web UI/UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              detailedDescription={project.detailedDescription}
              skilluse={project.skilluse}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;