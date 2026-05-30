import { dishes } from "../data";

export default function Menu() {
  return (
    <section className="section section-surface" id="menu">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Nuestra carta</span>
          <span className="divider" />
          <h2>Especialidades de la casa</h2>
          <p>Una muestra de nuestro menú de temporada, que evoluciona con cada cosecha.</p>
        </div>

        <div className="menu-list">
          {dishes.map((d) => (
            <article className="menu-item" key={d.name}>
              <div className="menu-top">
                <span className="menu-name">{d.name}</span>
                <span className="menu-dots" />
                <span className="menu-price">${d.price}</span>
              </div>
              <p className="menu-desc">{d.desc}</p>
              <span className="badge">{d.tag}</span>
            </article>
          ))}
        </div>

        <div className="menu-foot">
          <a href="#reservar" className="btn btn-primary">Reservar mesa</a>
        </div>
      </div>
    </section>
  );
}
