import { useState } from "react";
import { reservePerks, guestOptions, timeSlots, occasions } from "../data";
import Icon from "./Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\s-]{7,}$/;

function today() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

const initial = { name: "", email: "", phone: "", date: "", time: "", guests: "", occasion: "", notes: "" };

function validate(v) {
  const errors = {};

  if (!v.name.trim()) {
    errors.name = "Ingresa tu nombre completo.";
  } else if (v.name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }

  if (!v.email.trim()) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_RE.test(v.email.trim())) {
    errors.email = "El correo no tiene un formato válido.";
  }

  if (!v.phone.trim()) {
    errors.phone = "Ingresa un teléfono de contacto.";
  } else if (!PHONE_RE.test(v.phone.trim())) {
    errors.phone = "Ingresa un teléfono válido (mínimo 7 dígitos).";
  }

  if (!v.date) {
    errors.date = "Selecciona una fecha.";
  } else if (v.date < today()) {
    errors.date = "La fecha no puede ser anterior a hoy.";
  }

  if (!v.time) {
    errors.time = "Selecciona un horario.";
  }

  if (!v.guests) {
    errors.guests = "Indica el número de personas.";
  }

  return errors;
}

export default function ReservationForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, date: true, time: true, guests: true });
    if (Object.keys(found).length === 0) {
      setDone(true);
      setValues(initial);
      setTouched({});
    }
  }

  return (
    <section className="section section-dark" id="reservar">
      <div className="container reserve-inner">
        <div className="reserve-aside">
          <span className="eyebrow">Reserva tu mesa</span>
          <h2>Te esperamos en Rúbra</h2>
          <p>Completa el formulario y recibirás la confirmación de tu mesa al instante.</p>
          <ul className="reserve-list">
            {reservePerks.map((p) => (
              <li key={p}><span className="ic"><Icon name="check" size={18} /></span> {p}</li>
            ))}
          </ul>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <h3>Datos de la reserva</h3>

          {done && (
            <div className="form-alert success" role="status">
              <Icon name="check" size={20} /> Reserva confirmada. Te enviamos los detalles por correo.
            </div>
          )}

          <div className="form-group full">
            <label className="form-label" htmlFor="name">Nombre completo</label>
            <input id="name" name="name" type="text" className={`form-control ${errors.name ? "invalid" : ""}`}
              placeholder="Ej. Ana Pérez" value={values.name} onChange={handleChange} onBlur={handleBlur} />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Correo electrónico</label>
              <input id="email" name="email" type="email" className={`form-control ${errors.email ? "invalid" : ""}`}
                placeholder="tucorreo@ejemplo.com" value={values.email} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Teléfono</label>
              <input id="phone" name="phone" type="tel" className={`form-control ${errors.phone ? "invalid" : ""}`}
                placeholder="+593 99 123 4567" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="date">Fecha</label>
              <input id="date" name="date" type="date" min={today()} className={`form-control ${errors.date ? "invalid" : ""}`}
                value={values.date} onChange={handleChange} onBlur={handleBlur} />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="time">Horario</label>
              <select id="time" name="time" className={`form-control ${errors.time ? "invalid" : ""}`}
                value={values.time} onChange={handleChange} onBlur={handleBlur}>
                <option value="">Selecciona una hora</option>
                {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.time && <span className="form-error">{errors.time}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="guests">Personas</label>
              <select id="guests" name="guests" className={`form-control ${errors.guests ? "invalid" : ""}`}
                value={values.guests} onChange={handleChange} onBlur={handleBlur}>
                <option value="">¿Cuántos asistirán?</option>
                {guestOptions.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              {errors.guests && <span className="form-error">{errors.guests}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="occasion">Ocasión (opcional)</label>
              <select id="occasion" name="occasion" className="form-control"
                value={values.occasion} onChange={handleChange}>
                <option value="">Sin especificar</option>
                {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>

          <div className="form-group full">
            <label className="form-label" htmlFor="notes">Notas para el restaurante (opcional)</label>
            <textarea id="notes" name="notes" className="form-control"
              placeholder="Alergias, silla para bebé, mesa junto a la ventana..." value={values.notes} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Confirmar reserva</button>
        </form>
      </div>
    </section>
  );
}
