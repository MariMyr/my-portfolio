import "./themeToggle.css";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    // Rensa gamla klasser
    document.body.classList.remove("light-theme", "dark-theme");

    // Lägg till nuvarande tema
    document.body.classList.add(`${theme}-theme`);

    // Spara i localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeToggle;