import "./projectCard.css";
import { projects } from "../../data/projectsData";
import { useEffect, useState } from "react";


function ProjectCard() {
  return (
    <section className="projectcard__container">
      {projects.map((project, index) => (
        <Card key={index} project={project} index={index} />
      ))}
    </section>
  );
}

function Card({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="projectcard">
      <h3 className="projectcard__title">{project.title}</h3>
      <p className="projectcard__description">
        {isMobile ? (
          <>
            {expanded
              ? project.description
              : project.description.slice(0, 40) + "... "}
            <button
              className="readmore-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Read less" : "read more"}
            </button>
          </>
        ) : (
          project.description
        )}
      </p>
      <img
        src={project.image}
        alt={`Image of ${project.title}`}
        className="projectcard__image"
      />
      <div>
        {project.netlify && (
          <a href={project.netlify} className="projectcard__link">Netlify</a>
        )}
        <a href={project.github} className="projectcard__link">GitHub</a>
      </div>
    </section>
  );
}

export default ProjectCard;
