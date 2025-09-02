import { useState } from "react";
import "./contactSection.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from "emailjs-com";

function ContactSection() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_whbbbur",  
      "template_q81tgoh",
      e.target,
      "eC9EyShyIYGEYZC35"
    )
    .then(() => {
      setStatus("✅ Message sent!");
      e.target.reset();
    })
    .catch(() => setStatus("❌ Something went wrong, try again."));
  };

  return (
    <section className="contact__container" id="contact">
    <section className="contact__section">
      <h2 className="contactform__title">Contact me</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your name" required />
          <input type="email" name="from_email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required />
          <button type="submit">Send</button>
          {status && <p className="status">{status}</p>}
        </form>
      <section className="contact__buttons">

        <a
          href="https://www.linkedin.com/in/mari-myrmoen-74714b145/"
          className="contact__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ marginRight: '0.5rem' }}/>
           LinkedIn
        </a>

        <a
          href="https://github.com/MariMyr"
          className="contact__button"
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

export default ContactSection;