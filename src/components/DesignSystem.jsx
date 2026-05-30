import Icon from "./Icon";

const reds = [
  { token: "--red-900", hex: "#38090C", name: "Rojo 900" },
  { token: "--red-600", hex: "#A4161A", name: "Rojo 600" },
  { token: "--red-400", hex: "#D24B46", name: "Rojo 400" },
  { token: "--red-100", hex: "#F7E4E2", name: "Rojo 100" },
];

const neutrals = [
  { token: "--ink", hex: "#211A18", name: "Ink" },
  { token: "--muted", hex: "#7C6F69", name: "Muted" },
  { token: "--line", hex: "#ECE4DC", name: "Line" },
  { token: "--surface", hex: "#FAF6F1", name: "Surface" },
];

const states = [
  { token: "--success", hex: "#2F7D4F", name: "Success" },
  { token: "--danger", hex: "#C62828", name: "Danger" },
];

const radii = [
  { token: "--radius-sm", value: "6px" },
  { token: "--radius-md", value: "12px" },
  { token: "--radius-lg", value: "18px" },
  { token: "--radius-pill", value: "999px" },
];

const spacing = [
  { token: "--space-2", value: "8px" },
  { token: "--space-4", value: "16px" },
  { token: "--space-5", value: "24px" },
  { token: "--space-7", value: "48px" },
];

function Swatch({ item }) {
  return (
    <div className="swatch">
      <div className="swatch-color" style={{ background: item.hex }} />
      <div className="swatch-meta">
        <strong>{item.name}</strong>
        <code>{item.hex}</code>
        <code style={{ display: "block", color: "var(--red-600)" }}>{item.token}</code>
      </div>
    </div>
  );
}

export default function DesignSystem({ onNavigate }) {
  return (
    <main className="container ds">
      <div className="ds-head">
        <button className="btn btn-ghost btn-sm" onClick={() => onNavigate("landing")}>
          <Icon name="arrow" size={16} /> Volver al landing
        </button>
        <h1>Design System de Cure</h1>
        <p>
          Documentación viva de los tokens y componentes de la interfaz. La identidad
          se construye con cuatro tonos de rojo, neutros cálidos y una tipografía serif
          para títulos junto a una sans limpia para el cuerpo.
        </p>
      </div>

      <section className="ds-block">
        <h2>Color</h2>
        <p>Cuatro tonos de rojo como base de marca, sin degradados. Los neutros cálidos sostienen la lectura y los colores de estado comunican la validación del formulario.</p>

        <h3 style={{ margin: "0 0 16px" }}>Rojos de marca</h3>
        <div className="swatch-grid">
          {reds.map((c) => <Swatch key={c.token} item={c} />)}
        </div>

        <h3 style={{ margin: "32px 0 16px" }}>Neutros cálidos</h3>
        <div className="swatch-grid">
          {neutrals.map((c) => <Swatch key={c.token} item={c} />)}
        </div>

        <h3 style={{ margin: "32px 0 16px" }}>Estados</h3>
        <div className="swatch-grid">
          {states.map((c) => <Swatch key={c.token} item={c} />)}
        </div>
      </section>

      <section className="ds-block">
        <h2>Tipografía</h2>
        <p>Cormorant Garamond aporta el carácter de restaurante en los títulos; Inter mantiene el cuerpo claro y minimalista.</p>
        <div>
          <div className="type-row"><span className="label">--fs-h1 · serif</span><span style={{ fontSize: "var(--fs-h1)", fontFamily: "var(--font-serif)" }}>Título principal</span></div>
          <div className="type-row"><span className="label">--fs-h2 · serif</span><span style={{ fontSize: "var(--fs-h2)", fontFamily: "var(--font-serif)" }}>Título de sección</span></div>
          <div className="type-row"><span className="label">--fs-h3 · serif</span><span style={{ fontSize: "var(--fs-h3)", fontFamily: "var(--font-serif)" }}>Subtítulo</span></div>
          <div className="type-row"><span className="label">--fs-lg · sans</span><span style={{ fontSize: "var(--fs-lg)" }}>Texto destacado de párrafo</span></div>
          <div className="type-row"><span className="label">--fs-body · sans</span><span style={{ fontSize: "var(--fs-body)" }}>Texto de cuerpo estándar</span></div>
          <div className="type-row"><span className="label">--fs-small · sans</span><span style={{ fontSize: "var(--fs-small)" }}>Texto pequeño y notas</span></div>
          <div className="type-row"><span className="label">eyebrow</span><span className="eyebrow">Etiqueta superior</span></div>
        </div>
      </section>

      <section className="ds-block">
        <h2>Botones</h2>
        <p>Tres variantes y un estado deshabilitado, con esquinas sutiles para un acabado limpio.</p>
        <div className="ds-row">
          <button className="btn btn-primary">Primario</button>
          <button className="btn btn-secondary">Secundario</button>
          <button className="btn btn-ghost">Contorno</button>
          <button className="btn btn-primary btn-sm">Pequeño</button>
          <button className="btn btn-primary" disabled>Deshabilitado</button>
        </div>
      </section>

      <section className="ds-block">
        <h2>Etiquetas</h2>
        <p>Badges para clasificar los platos del menú y estados de la reserva.</p>
        <div className="ds-row">
          <span className="badge">Entrada</span>
          <span className="badge">Postre</span>
          <span className="badge badge-solid">Confirmada</span>
        </div>
      </section>

      <section className="ds-block">
        <h2>Campos de formulario</h2>
        <p>Estados por defecto, foco, error y selección. Mismos controles usados en la reserva.</p>
        <div className="ds-panel" style={{ maxWidth: "560px" }}>
          <div className="form-group">
            <label className="form-label">Campo de texto</label>
            <input className="form-control" placeholder="Escribe aquí" defaultValue="Ana Pérez" />
          </div>
          <div className="form-group">
            <label className="form-label">Campo con error</label>
            <input className="form-control invalid" defaultValue="correo-invalido" />
            <span className="form-error">El correo no tiene un formato válido.</span>
          </div>
          <div className="form-group">
            <label className="form-label">Selector</label>
            <select className="form-control" defaultValue="">
              <option value="">Selecciona una opción</option>
              <option>2 personas</option>
              <option>4 personas</option>
            </select>
          </div>
          <label className="form-check">
            <input type="checkbox" defaultChecked />
            <span>Casilla de confirmación de datos</span>
          </label>
        </div>
      </section>

      <section className="ds-block">
        <h2>Componentes de contenido</h2>
        <p>Tarjeta de experiencia e ítem de menú, reutilizados en el landing.</p>
        <div className="grid-3">
          <article className="exp-card">
            <span className="exp-icon"><Icon name="wine" size={28} /></span>
            <h3>Tarjeta de experiencia</h3>
            <p>Icono, título serif y descripción breve, centrados.</p>
          </article>
        </div>
        <div className="menu-list" style={{ marginTop: "32px" }}>
          <article className="menu-item">
            <div className="menu-top">
              <span className="menu-name">Ítem de menú</span>
              <span className="menu-dots" />
              <span className="menu-price">$18</span>
            </div>
            <p className="menu-desc">Nombre del plato, línea de puntos, precio y descripción debajo.</p>
            <span className="badge">Principal</span>
          </article>
        </div>
      </section>

      <section className="ds-block">
        <h2>Tokens de forma y espacio</h2>
        <p>Radios y espaciados reutilizados en todos los componentes.</p>
        <div className="ds-tokens">
          {radii.map((t) => (
            <div className="ds-token" key={t.token}><code>{t.token}</code><span>{t.value}</span></div>
          ))}
          {spacing.map((t) => (
            <div className="ds-token" key={t.token}><code>{t.token}</code><span>{t.value}</span></div>
          ))}
        </div>
      </section>
    </main>
  );
}
