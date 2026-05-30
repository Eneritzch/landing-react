import { experience } from "../data";
import Icon from "./Icon";

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">La experiencia</span>
          <span className="divider" />
          <h2>Una mesa pensada en cada detalle</h2>
          <p>Tres pilares que definen lo que vivirás en cada visita a Cure.</p>
        </div>

        <div className="grid-3">
          {experience.map((e) => (
            <article className="exp-card" key={e.title}>
              <span className="exp-icon"><Icon name={e.icon} size={28} /></span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
