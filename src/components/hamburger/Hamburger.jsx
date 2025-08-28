import { useEffect, useState } from "react";
import "./hamburger.css";
import Hamburger from "hamburger-react";

function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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

  return (
    <div className="hamburger">
      <div className="hamburger__icon">
        <Hamburger
          size={30}
          toggled={open}
          toggle={setOpen}
          color={isDark ? "#f5f5f5" : "#1a1a1a"}  
        />
      </div>

      {open && (
        <div className="hamburger__menu">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}

export default HamburgerComponent;
