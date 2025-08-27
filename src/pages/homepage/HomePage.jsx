import "./homePage.css";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import ContactForm from "../../components/contactform/ContactForm";
import Footer from "../../components/footer/Footer";
import backgroundLight from "../../assets/images/background_light.png"
import backgroundDark from "../../assets/images/background_dark.png"
import Menu from "../../components/menu/Menu";
import { useEffect, useState } from "react";

function HomePage() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Uppdatera state när theme ändras på body
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("dark-theme")) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);


  const backgroundImage = theme === 'light' ? backgroundLight : backgroundDark;

  return (
    <section className="mainPage">
      <article className="main__image"
      style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Header />
        <Menu />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
      </article>
    </section>
  );
}

export default HomePage;