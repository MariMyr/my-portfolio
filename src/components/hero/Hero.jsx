import "./hero.css";
import profileLight from "../../assets/images/profile_light.png";
import profileDark from "../../assets/images/profile_dark.png";

function Hero({theme}) {
  const profileImg = theme === "light" ? profileLight : profileDark;
  return (
    <section className="hero">
      <article className="heroimg__container">
              <img
        src={profileImg}
        alt="Profilbild av Mari Myrmoen"
        className="profile__img"
      />
      <h1 className="hero__heading">Mari Myrmoen</h1>
      <h3 className="hero__about">Frontend Developer in the making.</h3>
      </article>
      <p className="hero__text">Looking for a LIA-pratice week 2-10 & 14-23 2026</p>
    </section>
  );
}

export default Hero;
