import HamburgerComponent from "../hamburger/Hamburger";
import LanguageSwitcher from "../languageswitcher/LanguageSwitcher";
import ThemeToggle from "../themeToggle/ThemeToggle";
import "./navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation("navbar");

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <ThemeToggle />
      </div>
      <div className="navbar__right">
        <div className="navbar__links">
          <a href="#about">{t("about")}</a>
          <a href="#projects">{t("projects")}</a>
          <a href="#contact">{t("contact")}</a>
        </div>
        <div className="navbar__language">
          <LanguageSwitcher />
        </div>
        <HamburgerComponent />
      </div>
    </nav>
  )
}

export default Navbar;