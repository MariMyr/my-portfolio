import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { useState } from "react";
import "./about.css";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about">
      <section className="about__content">
        <h3 className="about__title">About me</h3>
        <p className="about__text">
          Hi! I'm Mari, a Frontend Developer in the making, currently studying
          at Folkuniversitetet in Gothenburg. During my first year, I gained
          experience across a wide range of topics and technologies.
        </p>
        {showMore && (
          <>
            <p className="about__text">
              This year, I am continuing to build on that foundation by
              exploring cloud deployment, AI integration in modern applications,
              and fullstack development with TypeScript. My skill set covers
              both frontend and backend, with a strong focus on clean code,
              user-friendly design, and agile collaboration. I enjoy creating
              applications that are not only functional but also accessible and
              visually engaging.
            </p>
            <h3 className="about__subtitle">Tech Stack</h3>
            <ul className="about__list">
              <li>
                <FaCss3Alt /> HTML & CSS <FaCss3Alt />
              </li>
              <li>
                <FaJs /> JavaScript / React <FaReact />
              </li>
              <li>
                <FaNodeJs /> Node.js / Express / MongoDB
              </li>
              <li>
                UX / UI Design <FaFigma /> Figma
              </li>
              <li>
                <FaGitAlt /> Git, GitHub & Agile methods
              </li>
            </ul>
          </>
        )}
        <button
          className="about__button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </section>
    </section>
  );
}

export default About;
