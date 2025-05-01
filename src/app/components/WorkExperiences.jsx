import React from "react";
import '../css/HeroSection.css';
import '../css/skill.css';

const WorkExperiences = () => {
  return (
    <section id="work-experiences" className="py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="font-abc text-color-transition text-4xl font-black mb-4">Work Experiences</h2>
        </div>
        <ol className="relative border-l border-gray-500">

          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-color-transition rounded-full"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">July 2024 – Present</time>
            <h3 className="text-lg font-semibold">Junior Technician Hardware Centre Com Adelaide</h3>
            <p className="mb-4 text-base font-normal">Adelaide SA (On-site)</p>
            <ul className="list-disc pl-5 ml-3 text-sm">
                <li>Building PCs</li>
                <li>Determines software and hardware requirements to provide solutions to problems</li>
                <li>Responds to queries on software and hardware problems</li>
                <li>Installs and downloads appropriate software and drivers</li>
                <li>Adapting existing programs to meet users&apos; requirements</li>
                <li>Ensuring efficient use of applications and equipment</li>
                <li>Run Benmarking to ensure system meet standard</li>
                <li>Implementing computer networks, designing and maintaining websites</li>
                <li>Repairing and replacing peripheral equipment such as terminals, printer and modems</li>
                <li>Customer service desk</li>
            </ul>  
          </li>

          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-color-transition rounded-full"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">February 2024 – May 2024</time>
            <h3 className="text-lg font-semibold">Ellenex Software Developer Intern</h3>
            <p className="mb-4 text-base font-normal">Melbourne VIC (On-site)</p>
            <p className="text-base font-normal mb-2">During my three-month internship at Ellenex, a leading provider of serverless solutions, I honed my full stack development skills by actively participating in both front-end and back-end projects. My role involved:</p>
            <ul className="list-disc pl-5 ml-3 text-sm">
                <li className="mb-1"><strong>UI/UX Design:</strong> I designed the platform&apos;s dashboard and a new hierarchy system using Figma, focusing on ease of use and simplified navigation.</li>
                <li className="mb-1"><strong>Front-End Development:</strong>I implemented my designs with Angular and TypeScript, and addressed bugs in both the platform&apos;s logic and front end.</li>
                <li className="mb-1"><strong>API Documentation:</strong> I used Postman to document API endpoints and created a static website to host these documents, facilitating easier access for developers.</li>
                <li className="mb-1"><strong>Collaboration and Testing:</strong> I worked closely with hardware&apos;s teams and marketing&apos;s team to integrate designs and improve platform functionalities based on user feedback.</li>
                <li className="mb-1"><strong>Adaptation and Learning:</strong> I quickly adapted to new technologies and participated in Agile processes to continually refine our work.</li>
            </ul>  
          </li>

          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-color-transition rounded-full"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">July 2023 – present</time>
            <h3 className="text-lg font-semibold">Project: Advanced Technologies for Water Management & Treatment in Aquaculture</h3>
            <p className="mb-4 text-base font-normal">Binh Dinh Province, Vietnam (remote work)</p>
            <p className="text-base font-normal mb-2">I lead the front-end development team, consisting of three other developers, for a web platform managing aquaculture. Our current stack includes D3.js, React, HTML, and CSS. I also contribute to back-end development using PHP and SQL. As part of our future plans, we aim to transition all existing vanilla HTML and JavaScript into a more robust framework to streamline development and maintenance. My role is pivotal in implementing advanced water management technologies and ensuring the secure handling of sensitive data, adhering to strict confidentiality protocols.</p>
          </li>

          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-color-transition rounded-full"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">July 2020 – present</time>
            <h3 className="text-lg font-semibold">Full Stack Freelancer</h3>
            <p className="mb-4 text-base font-normal">On Fiver</p>
            <p className="text-base font-normal mb-2">I design and develop websites for clients on Fiverr, using a variety of technologies including HTML, CSS, PHP, SQL, JavaScript, Angular, and React. My work spans creating simple sites with vanilla technologies to more complex applications using modern frameworks.</p>
          </li>

          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-color-transition rounded-full"></span>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">July 2020 – present</time>
            <h3 className="text-lg font-semibold">Video Editor Freelancer</h3>
            <p className="mb-4 text-base font-normal">On Fiver</p>
            <p className="text-base font-normal mb-2">I edit YouTube videos for clients, using Adobe Premiere Pro. My experience includes a range of video editing tasks tailored to enhance viewer engagement and video quality.</p>
          </li>
          {/* Repeat for other items */}
        </ol>
      </div>
    </section>
  );
};

export default WorkExperiences;
