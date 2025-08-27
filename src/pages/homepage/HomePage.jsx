import "./homePage.css";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import ContactForm from "../../components/contactform/ContactForm";
import Footer from "../../components/footer/Footer";
import backgroundLight from "../../assets/images/background_light.png"

function HomePage() {
  return (
    <section className="mainPage">
      <article className="main__image">
        {/* <img src={backgroundLight} 
        alt="Background image of blue skies over a forest" 
        className="background__image"/> */}
        <Header />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
      </article>
    </section>
  );
}

export default HomePage;