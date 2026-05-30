export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">Café de especialidad</span>
          <h1>
            Despierta tus sentidos con <span>café recién tostado</span>
          </h1>
          <p className="hero-sub">
            Granos de origen único, tostados en lotes pequeños y enviados a tu
            puerta en 48 horas. Cada taza cuenta una historia.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">Ver productos</a>
            <a href="#contact" className="btn btn-secondary">Pre-ordenar ahora</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="num">12k+</div>
              <div className="lbl">Clientes felices</div>
            </div>
            <div>
              <div className="num">86+</div>
              <div className="lbl">Puntaje de cata</div>
            </div>
            <div>
              <div className="num">48h</div>
              <div className="lbl">Envío express</div>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <span className="cup" role="img" aria-label="Taza de café">☕</span>
          <div className="hero-badge">
            Tueste fresco<small>Cada semana</small>
          </div>
        </div>
      </div>
    </section>
  );
}
