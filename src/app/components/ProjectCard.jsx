import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, gitUrl, previewUrl, detailedDescription, skilluse }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl }
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="font-abc text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-center text-xl font-semibold mb-2">{title}</h5>

        <div className="flex justify-center items-center cursor-pointer" onClick={toggleDropdown}>
          <div className="p-1 rounded-full transition-all duration-500 hover:scale-110 hover:bg-gray-700">
            {isDropdownOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-[#ADB7BE]" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-[#ADB7BE]" />
            )}
          </div>
        </div>

        {/* Dropdown Content with Smooth Transition */}
        <div className={`text-sm mt-2 text-[#ADB7BE] overflow-hidden transition-all ease-in-out ${isDropdownOpen ? 'max-h-96 opacity-100 duration-700' : 'max-h-0 opacity-0 duration-500'}`}>
          <p>{detailedDescription}</p>
          <div className="pt-3 skills-container flex flex-wrap">
            {skilluse.split(" ").map((skill, index) => (
              <div
                key={index}
                className="text-xs text-white w-[70px] h-6 flex items-center justify-center rounded-full bg-zinc-800 mr-2 mb-2" // added mb-2 for margin-bottom
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
