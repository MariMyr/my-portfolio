import ProjectCard from "../projectCard/ProjectCard";
import "./projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">My projects</h2>
      <ProjectCard />
    </section>
  );
}

export default Projects;