import HamburgerComponent from "../hamburger/Hamburger";
import ThemeToggle from "../themeToggle/ThemeToggle";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <ThemeToggle />
      </div>
      <div className="navbar__right">
        <div className="navbar__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <HamburgerComponent />
      </div>
    </nav>
  )
}

export default Navbar;