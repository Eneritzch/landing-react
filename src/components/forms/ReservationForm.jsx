import { useState } from "react";
import { reservePerks, guestOptions, timeSlots, occasions } from "../../data";
import Icon from "../Icon";
import TextField from "../ui/TextField";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/;

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
  } else if (!PHONE_RE.test(v.phone.replace(/\D/g, ""))) {
    errors.phone = "Ingresa un teléfono válido de Ecuador (10 dígitos).";
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

  function visible(allErrors, touchedMap) {
    return Object.fromEntries(
      Object.entries(allErrors).filter(([field]) => touchedMap[field])
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(visible(validate(next), touched));
  }

  function handleBlur(e) {
    const { name } = e.target;
    const nextTouched = { ...touched, [name]: true };
    setTouched(nextTouched);
    setErrors(visible(validate(values), nextTouched));
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
          <h2>Te esperamos en Cure</h2>
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

          <TextField
            id="name"
            name="name"
            label="Nombre completo"
            placeholder="Ej. Ana Pérez"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="full"
          />

          <div className="form-grid">
            <TextField
              id="email"
              name="email"
              type="email"
              label="Correo electrónico"
              placeholder="tucorreo@ejemplo.com"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <TextField
              id="phone"
              name="phone"
              type="tel"
              label="Teléfono"
              placeholder="0991234567"
              value={values.phone}
              error={errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <TextField
              id="date"
              name="date"
              type="date"
              label="Fecha"
              min={today()}
              value={values.date}
              error={errors.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <SelectField
              id="time"
              name="time"
              label="Horario"
              placeholder="Selecciona una hora"
              options={timeSlots}
              value={values.time}
              error={errors.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <SelectField
              id="guests"
              name="guests"
              label="Personas"
              placeholder="¿Cuántos asistirán?"
              options={guestOptions}
              value={values.guests}
              error={errors.guests}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <SelectField
              id="occasion"
              name="occasion"
              label="Ocasión (opcional)"
              placeholder="Sin especificar"
              options={occasions}
              value={values.occasion}
              onChange={handleChange}
            />
          </div>

          <TextField
            id="notes"
            name="notes"
            type="textarea"
            label="Notas para el restaurante (opcional)"
            placeholder="Alergias, silla para bebé, mesa junto a la ventana..."
            value={values.notes}
            onChange={handleChange}
            className="full"
          />

          <Button type="submit" className="btn-block">Confirmar reserva</Button>
        </form>
      </div>
    </section>
  );
}
