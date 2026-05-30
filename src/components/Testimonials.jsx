import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Opiniones</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-sub">
            Miles de mañanas mejores empiezan con una taza de Aurora.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article className="testimonial-card" key={t.name}>
              <div className="stars" aria-label="5 de 5 estrellas">{t.stars}</div>
              <p>“{t.quote}”</p>
              <div className="testimonial-author">
                <div className="avatar">{t.initial}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
