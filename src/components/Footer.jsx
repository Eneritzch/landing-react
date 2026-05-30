import Icon from "./Icon";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark"><Icon name="ticket" size={20} /></span>
              Aforo
            </span>
            <p>La plataforma para registrarte, comprar entradas y guardar tu acceso digital a los mejores conciertos.</p>
          </div>

          <div className="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#beneficios">Beneficios</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#registro">Crear cuenta</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Soporte</h4>
            <ul>
              <li><a href="#registro">Centro de ayuda</a></li>
              <li><a href="#registro">Reembolsos</a></li>
              <li><a href="#registro">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>
                <button className="nav-link-btn" onClick={() => onNavigate("design")} style={{ color: "var(--blue-100)" }}>
                  Design System
                </button>
              </li>
              <li><a href="#inicio">Términos</a></li>
              <li><a href="#inicio">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Aforo. Todos los derechos reservados.</span>
          <span>Hecho con React</span>
        </div>
      </div>
    </footer>
  );
}
