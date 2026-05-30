import Icon from "./Icon";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand">
              <span className="brand-mark"><Icon name="utensils" size={18} /></span>
              Cure
            </span>
            <p>Cocina de Eli con producto de temporada. Reserva tu mesa y déjate sorprender en cada visita.</p>
          </div>

          <div className="footer-col">
            <h4>Restaurante</h4>
            <ul>
              <li><a href="#experiencia">Experiencia</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#reservar">Reservar</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visítanos</h4>
            <ul>
              <li><a href="#reservar">Av. de la Cocina 123, Quito</a></li>
              <li><a href="#reservar">+593 99 123 4567</a></li>
              <li><a href="#reservar">Mar a Dom, 13:00 - 23:00</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul>
              <li>
                <button className="nav-link-btn" onClick={() => onNavigate("design")} style={{ color: "var(--red-100)" }}>
                  Design System
                </button>
              </li>
              <li><a href="#inicio">Términos</a></li>
              <li><a href="#inicio">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Cure. Todos los derechos reservados.</span>
          <span>Hecho con React</span>
        </div>
      </div>
    </footer>
  );
}
