import { events } from "../data";
import Icon from "./Icon";

export default function Events() {
  return (
    <section className="section section-surface" id="eventos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Próximos eventos</span>
          <h2>Conciertos abiertos para compra</h2>
          <p>Inicia sesión o crea tu cuenta para reservar tu lugar en cualquiera de estos shows.</p>
        </div>

        <div className="grid-3">
          {events.map((e) => (
            <article className="event-card" key={e.title}>
              <div className="event-date">
                <span className="day">{e.day}</span>
                <span className="mon">{e.month}</span>
              </div>
              <div className="event-body">
                <span className="badge">{e.tag}</span>
                <h3>{e.title}</h3>
                <ul className="event-meta">
                  <li><Icon name="pin" size={16} /> {e.venue}, {e.city}</li>
                  <li><Icon name="clock" size={16} /> {e.time}</li>
                </ul>
                <div className="event-foot">
                  <span className="event-price">${e.price} <span>/ entrada</span></span>
                  <a href="#registro" className="btn btn-primary btn-sm">Comprar</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
