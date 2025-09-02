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
import profileLight from "../../assets/images/profile_light.png";
import profileDark from "../../assets/images/profile_dark.png";

function About({ theme }) {
  const [showMore, setShowMore] = useState(false);
  const profileImg = theme === "light" ? profileLight : profileDark;

  return (
    <section className="about" id="about">
      <section className="about__content">
        <article className="about__imgcontainer">
          <img
            src={profileImg}
            alt="Profilbild av Mari Myrmoen"
            className="profile__img"
          />
        </article>
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
            <p className="about__text">
              I am looking for a LIA internship during weeks 2-10 and 15-24,
              2026. If you have an available position or know someone I can get
              in touch with, I would love to hear from you! Send me an{" "}
              <a href="#contact" className="about__link">email</a> or a message on{" "}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                className="about__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>.
            </p>
            <h3 className="about__subtitle">Tech Stack</h3>
            <ul className="about__list">
              <li>
                <FaHtml5 /> HTML & CSS <FaCss3Alt />
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
