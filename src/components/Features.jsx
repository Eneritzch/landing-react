import { features } from "../data";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Por qué Aurora</span>
          <h2 className="section-title">Café que se siente diferente</h2>
          <p className="section-sub">
            Cuidamos cada paso, desde la finca hasta tu taza, para ofrecerte una
            experiencia inolvidable.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
