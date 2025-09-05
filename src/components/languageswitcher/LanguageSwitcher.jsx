import { useTranslation } from "react-i18next";
import "./languageSwitcher.css";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    if (onclick) onclick();
  };

  return (
    <section className="language__switcher">
      <button aria-label="Switch language" onClick={() => switchLanguage("en")}>EN</button>
      <button aria-label="Switch language" onClick={() => switchLanguage("sv")}>SV</button>
    </section>
  );
}

export default LanguageSwitcher;
