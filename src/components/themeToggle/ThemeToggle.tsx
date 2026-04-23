import "./themeToggle.css";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <section className={`theme-toggle-wrapper ${theme}`}>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </section>
  );
}

export default ThemeToggle;
