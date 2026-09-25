type IconProps = {
  name: string;
  filled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function Icon({ name, filled = false, className = "", style }: IconProps) {
  return (
    <span
      aria-hidden
      className={`material-symbols-outlined select-none ${
        filled ? "material-symbols-filled" : ""
      } ${className}`}
      style={style}
    >
      {name}
    </span>
  );
}