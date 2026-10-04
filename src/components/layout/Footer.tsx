export function Footer() {
  return (
    <footer className="footer">
      <div className="foot-brand">
        El <span>Palmar</span> · Puerto Vallarta
      </div>
      <div>© {new Date().getFullYear()} · Todos los derechos reservados</div>
      <div className="socials">
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
        <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
      </div>
    </footer>
  );
}