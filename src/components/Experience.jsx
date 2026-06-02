import { experience } from "../data";
import Icon from "./Icon";
import Card from "./ui/Card";

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
            <Card
              key={e.title}
              title={e.title}
              description={e.text}
              icon={<Icon name={e.icon} size={28} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
