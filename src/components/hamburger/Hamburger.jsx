import { useEffect, useState } from "react";
import "./hamburger.css";
import Hamburger from "hamburger-react";
import LanguageSwitcher from "../languageswitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";


function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [size, setSize] = useState(30);
  const { t } = useTranslation("navbar");

  useEffect(() => {
    const theme = document.body.classList.contains("dark-theme");
    setIsDark(theme);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-theme"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 550 && window.innerWidth <= 768) {
        setSize(40); 
      } else {
        setSize(30); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hamburger">
      <div className="hamburger__icon">
        <Hamburger
          size={size}
          toggled={open}
          toggle={setOpen}
          label="Toggle menu"
          color={isDark ? "#f5f5f5" : "#1a1a1a"}  
        />
      </div>

      {open && (
        <div className="hamburger__menu" role="menu">
          <a href="#about" onClick={() => setOpen(false)}>{t("about")}</a>
          <a href="#projects" onClick={() => setOpen(false)}>{t("projects")}</a>
          <a href="#contact" onClick={() => setOpen(false)}>{t("contact")}</a>
          <LanguageSwitcher onClick={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default HamburgerComponent;
