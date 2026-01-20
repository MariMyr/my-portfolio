import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  } from "react-icons/fa";
import { SiAwslambda, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useState } from "react";
import "./about.css";
import profileLight from "../../assets/images/profile_light.webp";
import profileDark from "../../assets/images/profile_dark.webp";
import { useTranslation, Trans } from "react-i18next";

function About({ theme }) {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation("about");
  const profileImg = theme === "light" ? profileLight : profileDark;

  return (
    <section className="about" id="about">
      <section className="about__content">
        <article className="about__imgcontainer">
          <img
            src={profileImg}
            alt="Profilbild av Mari Myrmoen"
            className="profile__img"
            loading="lazy"
          />
        </article>

        <h3 className="about__stack">{t("stack")}</h3>
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
          <li>
            <SiAwslambda /> Cloud & AWS
          </li>
          <li>
            <SiTailwindcss /> Tailwind
          </li>
          <li>
            <SiTypescript /> TypeScript
          </li>
        </ul>
        
        <p className="about__text">
          <Trans
            i18nKey="intro"
            ns="about"
            components={[<span className="highlight" />]}
          />
        </p>

        {showMore && (
          <>
            <p className="about__text">{t("more1")}</p>
            <p className="about__text">
              <Trans
                i18nKey="more2"
                ns="about"
                components={[
                  <a
                    href="#contact"
                    className="about__link"
                    aria-label="contact link"
                  />,
                  <a
                    href="https://www.linkedin.com/in/yourprofile"
                    className="about__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  />,
                ]}
              />
            </p>
          </>
        )}

        <button
          className="about__button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? t("showLess") : t("showMore")}
        </button>
      </section>
    </section>
  );
}

export default About;
