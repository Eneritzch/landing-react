import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div>
          <span className="eyebrow">Cocina de Eli</span>
          <h1>
            Reserva tu mesa y vive una <span className="hl">velada memorable</span>
          </h1>
          <p className="hero-sub">
            En Cure cuidamos cada detalle: producto de temporada, maridajes
            precisos y un ambiente íntimo. Asegura tu lugar en pocos segundos.
          </p>
          <div className="hero-cta">
            <a href="#reservar" className="btn btn-primary">Reservar mesa</a>
            <a href="#menu" className="btn btn-ghost">Ver el menú</a>
          </div>
          <div className="hero-points">
            <span className="hero-point"><span className="ic"><Icon name="check" size={18} /></span> Confirmación inmediata</span>
            <span className="hero-point"><span className="ic"><Icon name="check" size={18} /></span> Sin costo de reserva</span>
          </div>
        </div>

        <div className="rescard" aria-hidden="true">
          <div className="rescard-bar" />
          <div className="rescard-top">
            <span className="name">Cure</span>
            <span className="badge">Confirmada</span>
          </div>
          <div className="rescard-body">
            <div className="rescard-field">
              <span>Fecha</span>
              <strong>Vie 12 Jun</strong>
            </div>
            <div className="rescard-field">
              <span>Hora</span>
              <strong>20:30</strong>
            </div>
            <div className="rescard-field">
              <span>Personas</span>
              <strong>4</strong>
            </div>
            <div className="rescard-field">
              <span>Mesa</span>
              <strong>Salón principal</strong>
            </div>
          </div>
          <div className="rescard-foot">
            <span>Reserva #RB-2048</span>
            <span>A nombre de Ana P.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
