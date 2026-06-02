export default function Button({ children, variant = "primary", size, className = "", as: Component = "button", ...props }) {
  const sizeClass = size ? `btn-${size}` : "";
  return (
    <Component className={`btn btn-${variant} ${sizeClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}
