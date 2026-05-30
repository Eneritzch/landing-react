import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initial = { name: "", email: "", product: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Ingresa al menos 2 caracteres.";
  }

  if (!values.email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Ingresa un correo válido.";
  }

  if (!values.message.trim()) {
    errors.message = "Cuéntanos algo en tu mensaje.";
  } else if (values.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setValues(initial);
      setTouched({});
    }
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-inner">
        <div className="contact-aside">
          <span className="eyebrow">Contacto</span>
          <h2>Pre-ordena o escríbenos</h2>
          <p>
            ¿Listo para probar Aurora Café? Déjanos tus datos y un mensaje, y te
            responderemos en menos de 24 horas.
          </p>
          <ul className="contact-list">
            <li><span className="ic">📍</span> Quito, Ecuador</li>
            <li><span className="ic">✉️</span> hola@auroracafe.com</li>
            <li><span className="ic">📞</span> +593 99 123 4567</li>
            <li><span className="ic">🕒</span> Lun – Sáb, 8:00 – 18:00</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="form-success" role="status">
              ¡Gracias! Hemos recibido tu mensaje correctamente. 🎉
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="name">Nombre completo</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? "invalid" : ""}`}
              placeholder="Tu nombre"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? "invalid" : ""}`}
              placeholder="tucorreo@ejemplo.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="product">Producto de interés (opcional)</label>
            <select
              id="product"
              name="product"
              className="form-input"
              value={values.product}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="clasico">Aurora Clásico</option>
              <option value="geisha">Geisha de Altura</option>
              <option value="oscuro">Tueste Oscuro</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              className={`form-textarea ${errors.message ? "invalid" : ""}`}
              placeholder="Cuéntanos qué necesitas…"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && <div className="form-error">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
