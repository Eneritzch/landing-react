import { useState } from "react";
import { navLinks } from "../data";
import Icon from "./Icon";

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);

  function goHome() {
    onNavigate("landing");
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={goHome}>
          <span className="brand-mark"><Icon name="utensils" size={18} /></span>
          Cure
        </button>

        <nav>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={goHome}>{l.label}</a>
              </li>
            ))}
            <li>
              <button className="nav-link-btn" onClick={() => { onNavigate("design"); setOpen(false); }}>
                Design System
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#reservar" className="btn btn-primary btn-sm nav-cta-desktop" onClick={goHome}>
            Reservar
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
