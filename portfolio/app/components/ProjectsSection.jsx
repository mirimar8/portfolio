import React from "react";
import ProjectCard from "./ProjectCard";

const projectsdata = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/mirimar8/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Savings Calculator",
    description: "Clearbridge savings tool",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/mirimar8/Savings-Calculator",
    previewUrl: "https://app.clearone.ca/cb/miri/cost-calculator/index.html",
  },
  {
    id: 3,
    title: "Habitent",
    description: "Wordpress website",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/mirimar8/Inhabitent-Project-4",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="text-white mb-20">
      <div>
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2424] to-[#4A569D]
        font-extrabold text-4xl sm:text-5xl lg:text-6xl py-4 text-center mb-10"
        >
          My Projects
        </h1>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
