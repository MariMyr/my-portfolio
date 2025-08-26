import "./contactForm.css";

function ContactForm() {
  return (
    <section className="contactform">
      <h2 className="contactform__title">Kontakta mig</h2>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Namn"
          className="contactform__input"
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          className="contactform__input"
        />
        <textarea
          name="message"
          placeholder="Meddelande"
          rows="4"
          className="contactform__textarea"
        />
        <button type="submit" className="contactform__button">
          Skicka
        </button>
      </form>
    </section>
  );
}

export default ContactForm