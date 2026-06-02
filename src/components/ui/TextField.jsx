export default function TextField({ label, error, type = "text", className = "", ...props }) {
  const isTextarea = type === "textarea";
  const Element = isTextarea ? "textarea" : "input";
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label" htmlFor={props.id}>{label}</label>}
      <Element
        className={`form-control ${error ? "invalid" : ""}`}
        type={isTextarea ? undefined : type}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}
