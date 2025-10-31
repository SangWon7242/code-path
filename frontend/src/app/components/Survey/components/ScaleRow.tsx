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
    <div className="w-full max-w-2xl mx-auto px-2">
      {/* 모바일: 세로 배치, 태블릿 이상: 가로 배치 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        {/* "그렇다" 레이블 - 모바일에서는 숨김, 태블릿 이상에서만 표시 */}
        <span className="hidden md:block text-xs md:text-sm text-gray-500 mr-2 md:mr-4 whitespace-nowrap">
          그렇다
        </span>

        {/* 원형 버튼들 */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
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

        {/* "그렇지 않다" 레이블 - 모바일에서는 숨김, 태블릿 이상에서만 표시 */}
        <span className="hidden md:block text-xs md:text-sm text-gray-500 ml-2 md:ml-4 whitespace-nowrap">
          그렇지 않다
        </span>

        {/* 모바일 전용 레이블 - 원 아래에 표시 */}
        <div className="flex md:hidden justify-between text-xs text-gray-500 px-1">
          <span>그렇다</span>
          <span>그렇지 않다</span>
        </div>
      </div>
    </div>
  );
}
