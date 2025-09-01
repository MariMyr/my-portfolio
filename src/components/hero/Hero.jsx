import "./hero.css";
import profileLight from "../../assets/images/profile_light.png";
import profileDark from "../../assets/images/profile_dark.png";

function Hero({theme}) {
  const profileImg = theme === "light" ? profileLight : profileDark;
  return (
    <section className="hero">
      <article className="heroimg__container">
      <h1>Mari Myrmoen</h1>
      <img
        src={profileImg}
        alt="Profilbild av Mari Myrmoen"
        className="profile__img"
      />
      </article>
      <h3 className="hero__about">Frontend Developer in the making.</h3>
      <p className="hero__text">Looking for a LIA-pratice week 2-10 & 14-23 2026</p>
    </section>
  );
}

export default Hero;
