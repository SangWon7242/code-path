interface ScaleButtonProps {
  selected: boolean;
  onClick: () => void;
  size: "large" | "medium" | "small";
  color: "green" | "purple" | "gray";
}

export default function ScaleButton({
  selected,
  onClick,
  size,
  color,
}: ScaleButtonProps) {
  const sizeClasses = {
    large: "w-16 h-16",
    medium: "w-12 h-12",
    small: "w-10 h-10",
  };

  const colorClasses = {
    green: selected ? "border-emerald-500 bg-emerald-50" : "border-emerald-300",
    purple: selected ? "border-purple-500 bg-purple-50" : "border-purple-300",
    gray: selected ? "border-gray-400 bg-gray-50" : "border-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-full
        border-4
        transition-all
        duration-200
        hover:scale-110
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        ${
          color === "green" ? "focus:ring-emerald-500" : "focus:ring-purple-500"
        }
      `}
    />
  );
}
