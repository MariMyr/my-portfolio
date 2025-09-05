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
          <label htmlFor="name" className="visually-hidden">{t("nameLabel")}</label>
          <input type="text" id="name" name="from_name" placeholder={t("namePlaceholder")} required />
          <label htmlFor="email" className="visually-hidden">{t("emailLabel")}</label>
          <input type="email" id="email" name="from_email" placeholder={t("emailPlaceholder")} required />
          <label htmlFor="message" className="visually-hidden">{t("messageLabel")}</label>
          <textarea name="message" id="message" placeholder={t("messagePlaceholder")} required />
          <button type="submit" aria-label={t("sendButton")}>{t("sendButton")}</button>
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