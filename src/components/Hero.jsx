import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div>
          <span className="eyebrow">Entradas de conciertos</span>
          <h1>
            Crea tu cuenta y asegura tu lugar en el <span className="hl">próximo concierto</span>
          </h1>
          <p className="hero-sub">
            Regístrate en Aforo para comprar entradas con preventa exclusiva,
            pago seguro y tu acceso digital listo al instante.
          </p>
          <div className="hero-cta">
            <a href="#registro" className="btn btn-primary">Crear cuenta gratis</a>
            <a href="#eventos" className="btn btn-ghost">Ver eventos</a>
          </div>
          <div className="hero-points">
            <span className="hero-point"><span className="ic"><Icon name="check" size={16} /></span> Sin costos ocultos</span>
            <span className="hero-point"><span className="ic"><Icon name="check" size={16} /></span> Preventa exclusiva</span>
            <span className="hero-point"><span className="ic"><Icon name="check" size={16} /></span> Entrada con QR</span>
          </div>
        </div>

        <div className="ticket" aria-hidden="true">
          <div className="ticket-top">
            <span className="badge">Preventa</span>
            <h3>Nova Sound Fest</h3>
            <span>Estadio Olímpico · Quito</span>
          </div>
          <div className="ticket-perf" />
          <div className="ticket-body">
            <div className="ticket-field">
              <span>Fecha</span>
              <strong>12 Jul · 19:00</strong>
            </div>
            <div className="ticket-field">
              <span>Zona</span>
              <strong>General A</strong>
            </div>
            <div className="ticket-field">
              <span>Precio</span>
              <strong>$45</strong>
            </div>
            <div className="ticket-qr">
              <Icon name="qr" size={56} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
