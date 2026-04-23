import "./hero.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation("hero");

  return (
    <section className="hero">
      <h1 className="hero__heading">{t("name")}</h1>
      <h3 className="hero__about">{t("title")}</h3>
      <p className="hero__text">{t("text")}</p>
    </section>
  );
}

export default Hero;
