import React from "react";
import ProjectCard from "./ProjectCard";

const projectsdata = [
  {
    id: 1,
    title: "Portfolio",
    description: "My personal portfolio website built with Next.js and TailwindCSS.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/mirimar8/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sunny Side Up Bartending",
    description: "A wordpress landing page design created for a bartending business.",
    image: "/images/projects/2.png",
    gitUrl: "",
    previewUrl: "https://sunnysideupbartending.com/",
  },
  {
    id: 3,
    title: "Savings Calculator",
    description: "An interactive savings calculator tool built with vanilla JavaScript, HTML5 and CSS3.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/mirimar8/Savings-Calculator",
    previewUrl: "https://mirimar8.github.io/Savings-Calculator/",
  },
  {
    id: 4,
    title: "Habitent",
    description: "A WordPress custom theme website, built with PHP, JavaScript, CSS3 and Sass.",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/mirimar8/Inhabitent-Project-4",
    previewUrl: "https://github.com/mirimar8/Inhabitent-Project-4",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="text-white mb-20 scroll-mt-32">
      <div>
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2424] to-[#4A569D]
        font-extrabold text-4xl sm:text-5xl lg:text-6xl py-4 text-center mb-10"
        >
          My Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projectsdata.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
