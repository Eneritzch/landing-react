import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          <span className="dot" /> Aurora<span style={{ color: "var(--accent-dark)" }}>Café</span>
        </a>

        <nav>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta-desktop">Pre-ordenar</a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
