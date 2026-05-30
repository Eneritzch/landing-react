import { useState } from "react";
import { registerPerks, cities } from "../data";
import Icon from "./Icon";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_RE = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

const initial = { name: "", email: "", city: "", password: "", confirm: "", terms: false };

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

  if (!v.city) {
    errors.city = "Selecciona tu ciudad.";
  }

  if (!v.password) {
    errors.password = "Crea una contraseña.";
  } else if (!PASSWORD_RE.test(v.password)) {
    errors.password = "Mínimo 8 caracteres, con letras y números.";
  }

  if (!v.confirm) {
    errors.confirm = "Repite tu contraseña.";
  } else if (v.confirm !== v.password) {
    errors.confirm = "Las contraseñas no coinciden.";
  }

  if (!v.terms) {
    errors.terms = "Debes aceptar los términos para continuar.";
  }

  return errors;
}

export default function RegisterForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    const next = { ...values, [name]: type === "checkbox" ? checked : value };
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
    setTouched({ name: true, email: true, city: true, password: true, confirm: true, terms: true });
    if (Object.keys(found).length === 0) {
      setDone(true);
      setValues(initial);
      setTouched({});
    }
  }

  return (
    <section className="section section-dark" id="registro">
      <div className="container register-inner">
        <div className="register-aside">
          <span className="eyebrow" style={{ color: "var(--blue-100)" }}>Crear cuenta</span>
          <h2>Regístrate y empieza a comprar entradas</h2>
          <p>Toma menos de un minuto. Tu cuenta queda lista para reservar en la preventa.</p>
          <ul className="register-list">
            {registerPerks.map((p) => (
              <li key={p}><span className="ic"><Icon name="check" size={16} /></span> {p}</li>
            ))}
          </ul>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <h3>Tus datos</h3>

          {done && (
            <div className="form-alert success" role="status">
              <Icon name="check" size={20} /> Cuenta creada. Revisa tu correo para confirmar el registro.
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
              <label className="form-label" htmlFor="city">Ciudad</label>
              <select id="city" name="city" className={`form-control ${errors.city ? "invalid" : ""}`}
                value={values.city} onChange={handleChange} onBlur={handleBlur}>
                <option value="">Selecciona tu ciudad</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.city && <span className="form-error">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Contraseña</label>
              <input id="password" name="password" type="password" className={`form-control ${errors.password ? "invalid" : ""}`}
                placeholder="Mínimo 8 caracteres" value={values.password} onChange={handleChange} onBlur={handleBlur} />
              {errors.password && <span className="form-error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="confirm">Repetir contraseña</label>
              <input id="confirm" name="confirm" type="password" className={`form-control ${errors.confirm ? "invalid" : ""}`}
                placeholder="Repite la contraseña" value={values.confirm} onChange={handleChange} onBlur={handleBlur} />
              {errors.confirm && <span className="form-error">{errors.confirm}</span>}
            </div>
          </div>

          <div className="form-group full">
            <label className="form-check">
              <input type="checkbox" name="terms" checked={values.terms} onChange={handleChange} onBlur={handleBlur} />
              <span>Acepto los <a href="#registro">términos de servicio</a> y la política de privacidad de Aforo.</span>
            </label>
            {errors.terms && <span className="form-error">{errors.terms}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">Crear mi cuenta</button>
        </form>
      </div>
    </section>
  );
}
