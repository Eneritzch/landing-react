export default function Badge({ children, variant = "default", className = "" }) {
  const variantClass = variant === "solid" ? "badge-solid" : "";
  return (
    <span className={`badge ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
