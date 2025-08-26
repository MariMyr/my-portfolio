import "./about.css";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">Om mig</h2>
      <p className="about__text">
        Jag är en frontendutvecklare som nyligen studerat HTML, CSS, JavaScript,
        React och Node.js med MongoDB.
      </p>
      <ul className="about__list">
        <li>HTML / CSS</li>
        <li>JavaScript / React</li>
        <li>Node.js / Express / MongoDB</li>
      </ul>
    </section>
  );
}

export default About;