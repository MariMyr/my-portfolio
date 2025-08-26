import "./homePage.css";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import ContactForm from "../../components/contactform/ContactForm";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <section className="mainPage">
      <article className="main__image">
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