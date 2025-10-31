import ScaleButton from "./ScaleButton";

interface ScaleRowProps {
  value: number | null;
  onChange: (value: number) => void;
}

export default function ScaleRow({ value, onChange }: ScaleRowProps) {
  const scales = [
    { value: 1, size: "large" as const, color: "green" as const },
    { value: 2, size: "medium" as const, color: "green" as const },
    { value: 3, size: "small" as const, color: "green" as const },
    { value: 4, size: "small" as const, color: "gray" as const },
    { value: 5, size: "small" as const, color: "purple" as const },
    { value: 6, size: "medium" as const, color: "purple" as const },
    { value: 7, size: "large" as const, color: "purple" as const },
  ];

  return (
    <div className="flex items-center justify-between max-w-2xl mx-auto px-4">
      <span className="text-sm text-gray-500 mr-4 whitespace-nowrap">
        그렇다
      </span>
      <div className="flex items-center gap-3">
        {scales.map((scale) => (
          <ScaleButton
            key={scale.value}
            selected={value === scale.value}
            onClick={() => onChange(scale.value)}
            size={scale.size}
            color={scale.color}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
        그렇지 않다
      </span>
    </div>
  );
}
