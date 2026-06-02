export default function SelectField({ label, options = [], error, placeholder, className = "", ...props }) {
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label" htmlFor={props.id}>{label}</label>}
      <select className={`form-control ${error ? "invalid" : ""}`} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}
