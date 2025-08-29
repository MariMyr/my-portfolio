import "./contactForm.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function ContactForm() {
  return (
    <section className="contact__container">
    <section className="contact-section">
      <h2 className="contactform__title">Contact me</h2>
      <p className="availability">Looking for a LIA-pratice week 2-10 & 14-23 2026</p>
      <section className="contact-buttons">
        <a
          href="mari.myr@gmail.com"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope style={{ marginRight: '0.5rem' }}/>
           Email me
        </a>

        <a
          href="https://www.linkedin.com/in/mari-myrmoen-74714b145/"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ marginRight: '0.5rem' }}/>
           LinkedIn
        </a>

        <a
          href="https://github.com/MariMyr"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ marginRight: '0.5rem' }}/>
           GitHub
        </a>
      </section>
    </section>
  </section>
  );
}

export default ContactForm