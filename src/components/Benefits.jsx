import { benefits } from "../data";
import Icon from "./Icon";

export default function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Por qué registrarte</span>
          <h2>Una cuenta, todas las ventajas</h2>
          <p>Crear tu cuenta en Aforo desbloquea beneficios pensados para que nunca te quedes sin tu entrada.</p>
        </div>

        <div className="grid-4">
          {benefits.map((b) => (
            <article className="card benefit-card" key={b.title}>
              <span className="benefit-icon"><Icon name={b.icon} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
