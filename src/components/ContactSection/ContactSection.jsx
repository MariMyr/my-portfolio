import { useState } from "react";
import "./contactSection.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const [status, setStatus] = useState("");
  const { t } = useTranslation("contact");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_whbbbur",  
      "template_q81tgoh",
      e.target,
      "eC9EyShyIYGEYZC35"
    )
    .then(() => {
      setStatus(t("statusSuccess"));
      e.target.reset();
    })
    .catch(() => setStatus(t("statusError")));
  };

    return (
    <section className="contact__container" id="contact">
      <section className="contact__section">
        <h2 className="contactform__title">{t("title")}</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder={t("namePlaceholder")} required />
          <input type="email" name="from_email" placeholder={t("emailPlaceholder")} required />
          <textarea name="message" placeholder={t("messagePlaceholder")} required />
          <button type="submit">{t("sendButton")}</button>
          {status && <p className="status">{status}</p>}
        </form>

        <section className="contact__buttons">
          <a
            href="https://www.linkedin.com/in/mari-myrmoen-74714b145/"
            className="contact__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ marginRight: "0.5rem" }} />
            {t("linkedin")}
          </a>

          <a
            href="https://github.com/MariMyr"
            className="contact__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ marginRight: "0.5rem" }} />
            {t("github")}
          </a>
        </section>
      </section>
    </section>
  );
}

export default ContactSection;