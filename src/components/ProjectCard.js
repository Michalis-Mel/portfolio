import React from "react";
const ProjectCard = ({
  project: { id, name, image, description, deployed_url, github_url },
}) => {
  return (
    <div className="projectCard">
      <figure className="wrapper">
        <h4>{name}</h4>

        <p>{description}</p>

        {image ? <img src={image} alt="" /> : ""}

        <div className="links">
          {deployed_url ? (
            <a href={deployed_url} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          ) : (
            ""
          )}
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
