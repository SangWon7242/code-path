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
    large: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
    medium: "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12",
    small: "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10",
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
        border-2 sm:border-3 md:border-4
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
