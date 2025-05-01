"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import '../css/HeroSection.css';

const projectsData = [
  {
    id: 1,
    title: "Ellenex Monitoring Platform",
    skilluse: "Angular InfluxDB Tailwind Figma TypeScript",
    detailedDescription: "Among a team of senior developers, I played a significant role in crafting the dashboard and device pages of Ellenex.io, a platform for monitoring Wirepass, NBiot, and Lowerwan devices. Leveraging Angular for frontend development and designing with Figma, I ensured an intuitive interface that facilitates efficient device management. My contributions focused on enhancing usability, resulting in a seamless experience for users navigating the dashboard and device pages.",
    image: "/images/projects/ellenexio.png",
    tag: ["All", "Web"],
    gitUrl: "https://ellenex.net/",
    previewUrl: "https://ellenex.net/",
  },
  {
    id: 2,
    title: "Ellenex's API",
    skilluse: "Postman Angular Swagger Tailwind",
    detailedDescription: "API documentation project: A dynamic Angular-based platform seamlessly integrating Wirepass, NBiot, and Lowerwan devices. Designed with developers in mind, it offers streamlined data exchange and communication. Leveraging Swagger UI and Editor, alongside Postman for endpoint testing, it provides comprehensive documentation, editing capabilities, and robust testing. Dive in to unlock the full potential of device connectivity and accelerate your development journey",
    image: "/images/projects/ellenexapi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KhoaPhamzzz/Ellenex-API-swagger-ui-done",
    previewUrl: "https://api.ellenex.net/",
  },
  {
    id: 3,
    title: "Dental Landing Page",
    skilluse: "Nextjs Tailwind",
    detailedDescription: "Introducing a sleek and stylish landing page project designed exclusively for a cutting-edge dental clinic. Our emphasis lies solely on crafting a captivating frontend experience that not only showcases the clinic's excellence but also leaves a lasting impression on visitors.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KhoaPhamzzz/landing-page",
    previewUrl: "https://landing-page-beta-sable.vercel.app/",
  },
  {
    id: 4,
    title: "Data Visualization Website",
    skilluse: "HTML CSS JavaScript D3.js",
    detailedDescription: "This elegantly designed website offers comprehensive statistics on overseas migration to Australia over the past decade. With its captivating blend of interactive geo-maps, dynamic bar charts, and informative line graphs, it provides an immersive and visually appealing way to explore the data.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Data"],
    gitUrl: "https://github.com/KhoaPhamzzz/Data-visualization-D3" ,
    previewUrl: "https://data-visualization-d3-psi.vercel.app/",
  },
  {
    id: 5,
    title: "Next Portfolio Website",
    skilluse: "Next.js Tailwind JavaScript",
    detailedDescription: "Welcome to my portfolio website, a concise yet comprehensive platform where I highlight my skills, technologies, and a curated selection of past and present projects.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KhoaPhamzzz/New-Portfolio",
    previewUrl: "https://khoaphams.com",
  },
  {
    id: 6,
    title: "Water Management Website",
    skilluse: "Next Tailwind JavaScript",
    detailedDescription: "This project aims to create a user-friendly website for real-time monitoring of essential water parameters in aquaculture. Users, including administrators and the public, can access live data on pH, H2S, NO3, NH4, and temperature (T0) from a central server. This innovative solution enhances aquaculture practices and sustainability in Binh Dinh Province.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://water-management-website-info-page.vercel.app/",
    previewUrl: "https://water-management-website-info-page.vercel.app/",
  },
  {
    id: 7,
    title: "Manova Test",
    skilluse: "R RStudio",
    detailedDescription: "This project aims to utilize multivariate analyses in R to examine and compare the academic performance of 240 randomly selected year 10 students from diverse socio-economic backgrounds, with a particular focus on their performance in Mathematics and English.",
    image: "/images/projects/6.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/KhoaPhamzzz/Manova-Test",
    previewUrl: "https://drive.google.com/file/d/1beIn80xEUnrOZYF6HsFWOSKEgIcAMLRR/view?usp=sharing",
  },
  {
    id: 8,
    title: "Multivariate Data Analysis",
    skilluse: "R RStudio",
    detailedDescription: "This project involves an in-depth analysis of three diverse datasets: measurements of Alaskan grizzly bears, chemical properties of Italian wines, and housing satisfaction responses. The primary objective is to apply advanced statistical methods to gain insights and make informed decisions.",
    image: "/images/projects/7.png",
    tag: ["All", "Data"],
    gitUrl: "https://github.com/KhoaPhamzzz/Multivariate-Data-Analysis-for-Grizzly-Bears-Italian-Wines-and-Housing-Satisfaction",
    previewUrl: "https://drive.google.com/file/d/1FWGUeoFlcSOYcH9O0pg-nLo6UPpLSGIo/view?usp=sharing",
  },
  {
    id: 9,
    title: "Full-Stack E-Commerce Web",
    skilluse: "RectJs MongoDB Express NodeJs",
    detailedDescription: "This online shopping platform features a fully functional user login/logout system, a seamlessly operational shopping cart, and an intuitive and user-friendly interface for an enhanced shopping experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
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