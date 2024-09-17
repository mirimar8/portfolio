import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="rounded-xl bg-gradient-to-br from-[#DC2424] to-[#4A569D] p-1">
      <div
        className="h-80 md:h-96 relative group rounded-xl bg-[#252526]"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
      >
        <div
          className="items-center justify-center obsolute top-0 left-0 w-full h-full bg-[#252526]/0 hidden
        md:group-hover:flex md:group-hover:bg-[#252526]/80 transition-all duration-500 rounded-xl"
        >
          <Link
            target="_blank"
            href={gitUrl}
            className="md:h-14 md:w-14 h-9 w-9 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon
              className="md:h-10 md:w-10 h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
            />
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="md:h-14 md:w-14 h-9 w-9 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon
              className="md:h-10 md:w-10 h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"
            />
          </Link>
        </div>
      </div>
      </div>
      <div className="text-white mt-3 bg-[#252526] py-6 text-center md:text-left">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-3">{description}</p>
        <div
          className="md:hidden w-full h-full flex justify-center md:justify-start"
        >
          <Link
            href={gitUrl}
            className="h-9 w-9 mr-2 border-2 relative rounded-full border-[#ADB7BE]"
          >
            <CodeBracketIcon
              className="md:h-10 md:w-10 h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-9 w-9 border-2 relative rounded-full border-[#ADB7BE]"
          >
            <EyeIcon
              className="md:h-10 md:w-10 h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
