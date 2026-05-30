export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="nav-logo">
              <span className="dot" /> AuroraCafé
            </a>
            <p>
              Café de especialidad tostado en lotes pequeños y enviado fresco a
              tu puerta. Hecho con amor en Ecuador.
            </p>
          </div>

          <div className="footer-col">
            <h4>Tienda</h4>
            <ul>
              <li><a href="#products">Productos</a></li>
              <li><a href="#products">Suscripción</a></li>
              <li><a href="#products">Tarjetas regalo</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#features">Nosotros</a></li>
              <li><a href="#testimonials">Opiniones</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Síguenos</h4>
            <ul>
              <li><a href="#top">Instagram</a></li>
              <li><a href="#top">Facebook</a></li>
              <li><a href="#top">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Aurora Café. Todos los derechos reservados. Hecho con ☕ y React.
        </div>
      </div>
    </footer>
  );
}
