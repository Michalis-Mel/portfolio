import React, { useState, useEffect } from "react";
import data_projects from "./data/projects_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Footer from "./Footer";
const Projects = () => {
  useEffect(() => {
    document.querySelector(".mdl-layout__content").scrollTop = 0;
  }, []);

  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
    setActive(name);
  };

  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <div
          className={active === "All" ? "projects__navbar-active" : undefined}
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          className={
            active === "JavaScript" ? "projects__navbar-active" : undefined
          }
          onClick={() => handleFilterCategory("JavaScript")}
        >
          Vanilla-JavaScript
        </div>
        <div
          className={active === "React" ? "projects__navbar-active" : undefined}
          onClick={() => handleFilterCategory("React")}
        >
          React
        </div>
        <div
          className={active === "Redux" ? "projects__navbar-active" : undefined}
          onClick={() => handleFilterCategory("Redux")}
        >
          Redux
        </div>
        <div
          className={
            active === "Express" ? "projects__navbar-active" : undefined
          }
          onClick={() => handleFilterCategory("Express")}
        >
          Express
        </div>
      </div>

      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Projects;
