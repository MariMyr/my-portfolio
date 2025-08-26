import "./projectCard.css";

function ProjectCard() {
  return (
  <section className="projectcard">
    <img src="#" alt="image" className="projectcard__image" />
    <h3 className="projectcard__title">title</h3>
    <p className="projectcard__description">description</p>
    <div className="mt-4 flex gap-2">
      <a href="#" className="projectcard__link">Demo</a>
      <a href="#" className="projectcard__link">GitHub</a>
    </div>
  </section>
  )
}

export default ProjectCard;