import "./header.css";

function Header() {
  return (
    <header className="header">
      <section className="header__top">
      </section>
      <h1 className="header__title">Mari Myrmoen</h1>
      <p className="header__text">Frontend Developer.</p>
      <article className="header__menu-mobile">
        <a href="#" className="header__link">
          GitHub
        </a>
        <a href="#" className="header__link">
          Ladda ner CV
        </a>
        <a href="#" className="header__link">
          LinkedIn
        </a>
        <a href="#" className="header__link">
          Contact
        </a>
      </article>
    </header>
  );
}

export default Header;