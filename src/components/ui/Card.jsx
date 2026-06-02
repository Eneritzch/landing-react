export default function Card({ title, description, icon, className = "" }) {
  return (
    <article className={`exp-card ${className}`}>
      {icon && <span className="exp-icon">{icon}</span>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
    </article>
  );
}
