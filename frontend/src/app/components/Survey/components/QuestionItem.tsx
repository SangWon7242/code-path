import ScaleRow from "../components/ScaleRow";

interface QuestionItemProps {
  questionId: number;
  questionText: string;
  questionNumber: number;
  value: number | null;
  onChange: (value: number) => void;
}

export default function QuestionItem({
  questionId,
  questionText,
  questionNumber,
  value,
  onChange,
}: QuestionItemProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
          {questionNumber}
        </span>
        <p className="text-gray-700 leading-relaxed flex-1 pt-1">
          {questionText}
        </p>
      </div>
      <ScaleRow value={value} onChange={onChange} />
    </div>
  );
}
