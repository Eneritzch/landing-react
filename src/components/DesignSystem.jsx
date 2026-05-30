import Icon from "./Icon";

const blues = [
  { token: "--blue-900", hex: "#08193A", name: "Azul 900" },
  { token: "--blue-600", hex: "#1B4DD1", name: "Azul 600" },
  { token: "--blue-400", hex: "#4F86F7", name: "Azul 400" },
  { token: "--blue-100", hex: "#DCE8FB", name: "Azul 100" },
];

const neutrals = [
  { token: "--ink", hex: "#121620", name: "Ink" },
  { token: "--muted", hex: "#5B6478", name: "Muted" },
  { token: "--line", hex: "#E4E8F0", name: "Line" },
  { token: "--surface", hex: "#F6F8FC", name: "Surface" },
];

const states = [
  { token: "--success", hex: "#1F8A54", name: "Success" },
  { token: "--danger", hex: "#D12F3F", name: "Danger" },
];

const radii = [
  { token: "--radius-sm", value: "8px" },
  { token: "--radius-md", value: "14px" },
  { token: "--radius-lg", value: "22px" },
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
        <code style={{ display: "block", color: "var(--blue-600)" }}>{item.token}</code>
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
        <h1>Design System de Aforo</h1>
        <p>
          Documentación viva de los tokens y componentes que construyen la interfaz.
          Toda la paleta se basa en cuatro tonos de azul, más neutros y colores de estado.
        </p>
      </div>

      <section className="ds-block">
        <h2>Color</h2>
        <p>Cuatro tonos de azul como base de marca, sin degradados. Los neutros aportan jerarquía y los colores de estado comunican retroalimentación del formulario.</p>

        <h3 style={{ margin: "0 0 16px" }}>Azules de marca</h3>
        <div className="swatch-grid">
          {blues.map((c) => <Swatch key={c.token} item={c} />)}
        </div>

        <h3 style={{ margin: "32px 0 16px" }}>Neutros</h3>
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
        <p>Escala basada en la fuente del sistema. Cada nivel usa un token de tamaño definido en el root.</p>
        <div>
          <div className="type-row"><span className="label">--fs-h1</span><span style={{ fontSize: "var(--fs-h1)", fontWeight: 800 }}>Título principal</span></div>
          <div className="type-row"><span className="label">--fs-h2</span><span style={{ fontSize: "var(--fs-h2)", fontWeight: 700 }}>Título de sección</span></div>
          <div className="type-row"><span className="label">--fs-h3</span><span style={{ fontSize: "var(--fs-h3)", fontWeight: 700 }}>Subtítulo</span></div>
          <div className="type-row"><span className="label">--fs-lg</span><span style={{ fontSize: "var(--fs-lg)" }}>Texto destacado de párrafo</span></div>
          <div className="type-row"><span className="label">--fs-body</span><span style={{ fontSize: "var(--fs-body)" }}>Texto de cuerpo estándar</span></div>
          <div className="type-row"><span className="label">--fs-small</span><span style={{ fontSize: "var(--fs-small)" }}>Texto pequeño y notas</span></div>
          <div className="type-row"><span className="label">eyebrow</span><span className="eyebrow">Etiqueta superior</span></div>
        </div>
      </section>

      <section className="ds-block">
        <h2>Botones</h2>
        <p>Tres variantes y un estado deshabilitado, todas con esquinas tipo pill.</p>
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
        <p>Badges para destacar estados de eventos.</p>
        <div className="ds-row">
          <span className="badge">Preventa</span>
          <span className="badge">Últimas</span>
          <span className="badge badge-solid">Nuevo</span>
        </div>
      </section>

      <section className="ds-block">
        <h2>Campos de formulario</h2>
        <p>Estados por defecto, foco, error y selección. Mismos controles usados en el registro.</p>
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
              <option>Quito</option>
              <option>Guayaquil</option>
            </select>
          </div>
          <label className="form-check">
            <input type="checkbox" defaultChecked />
            <span>Casilla de aceptación de términos</span>
          </label>
        </div>
      </section>

      <section className="ds-block">
        <h2>Tarjetas</h2>
        <p>Componentes de contenido usados en beneficios y eventos.</p>
        <div className="grid-3">
          <article className="card benefit-card">
            <span className="benefit-icon"><Icon name="shield" /></span>
            <h3>Tarjeta de beneficio</h3>
            <p>Icono, título y descripción breve sobre fondo blanco.</p>
          </article>
          <article className="event-card">
            <div className="event-date">
              <span className="day">12</span>
              <span className="mon">Jul</span>
            </div>
            <div className="event-body">
              <span className="badge">Preventa</span>
              <h3>Tarjeta de evento</h3>
              <ul className="event-meta">
                <li><Icon name="pin" size={16} /> Estadio Olímpico</li>
                <li><Icon name="clock" size={16} /> 19:00</li>
              </ul>
              <div className="event-foot">
                <span className="event-price">$45 <span>/ entrada</span></span>
                <button className="btn btn-primary btn-sm">Comprar</button>
              </div>
            </div>
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
