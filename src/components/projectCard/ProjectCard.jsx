import "./projectCard.css";
import { projectsMeta } from "../../data/projectsData";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ProjectCard() {
  const { t } = useTranslation("projects");
  const texts = t("projects", { returnObjects: true });

  return (
    <section className="projectcard__container">
      {projectsMeta.map((project, index) => {
        const text = texts[index];
        return <Card key={index} project={project} text={text} t={t} />;
      })}
    </section>
  );
}

function Card({ project, text, t }) {
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
      <h3 className="projectcard__title">{text.title}</h3>
      <p className="projectcard__description">
        {isMobile ? (
          <>
            {expanded ? text.description : text.description.slice(0, 60) + "... "}
            <button
              className="readmore-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? t("readLess") : t("readMore")}
            </button>
          </>
        ) : (
          text.description
        )}
      </p>
      <img
        src={project.image}
        alt={`Image of ${text.title}`}
        className="projectcard__image"
      />
      <div>
        {project.netlify && (
          <a href={project.netlify} className="projectcard__link">
            {t("netlify")}
          </a>
        )}
        <a href={project.github} className="projectcard__link">
          {t("github")}
        </a>
      </div>
    </section>
  );
}

export default ProjectCard;
