import { forwardRef } from "react";
import ScaleRow from "../components/ScaleRow";

interface QuestionItemProps {
  questionId: number;
  questionText: string;
  questionNumber: number;
  value: number | null;
  onChange: (value: number) => void;
}

const QuestionItem = forwardRef<HTMLDivElement, QuestionItemProps>(
  ({ questionId, questionText, questionNumber, value, onChange }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
      >
        <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
            {questionNumber}
          </span>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 pt-0.5 sm:pt-1">
            {questionText}
          </p>
        </div>
        <ScaleRow value={value} onChange={onChange} />
      </div>
    );
  }
);

QuestionItem.displayName = "QuestionItem";

export default QuestionItem;
