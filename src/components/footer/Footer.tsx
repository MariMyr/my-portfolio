import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Mari Myrmoen. Built with react.
    </footer>
  );
}

export default Footer;