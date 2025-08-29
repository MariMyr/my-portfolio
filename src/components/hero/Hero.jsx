import "./hero.css";
import profileLight from "../../assets/images/profile_light.png";
import profileDark from "../../assets/images/profile_dark.png";

function Hero({theme}) {
  const profileImg = theme === "light" ? profileLight : profileDark;
  return (
    <section className="hero">
      <article className="heroimg__container">
      <h1 className="hero">Mari Myrmoen</h1>
      <img
        src={profileImg}
        alt="Profilbild av Mari Myrmoen"
        className="profile__img"
      />
      </article>
      <h3 className="hero">Frontend Developer in the making.</h3>
      <article className="hero__links">
        <a href="https://github.com/MariMyr" className="hero__link">
          GitHub
        </a>
        <a href="#" className="hero__link">
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/mari-myrmoen-74714b145/"
          className="hero__link"
        >
          LinkedIn
        </a>
        <a href="#" className="hero__link">
          Contact
        </a>
      </article>
    </section>
  );
}

export default Hero;
