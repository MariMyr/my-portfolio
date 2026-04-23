import { useTranslation } from "react-i18next";
import "./languageSwitcher.css";

type LanguageSwitcherProps = {
  onClick?: () => void;
};

function LanguageSwitcher({ onClick }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: "en" | "sv") => {
    i18n.changeLanguage(lang);
    onClick?.();
  };

  return (
    <section className="language__switcher">
      <button aria-label="Switch language" onClick={() => switchLanguage("en")}>EN</button>
      <button aria-label="Switch language" onClick={() => switchLanguage("sv")}>SV</button>
    </section>
  );
}

export default LanguageSwitcher;
