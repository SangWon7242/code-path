interface SurveyProgressProps {
  currentPage: number;
  totalPages: number;
  totalAnswered: number;
  totalQuestions: number;
  progressPercentage: number;
}

export default function SurveyProgress({
  currentPage,
  totalPages,
  totalAnswered,
  totalQuestions,
  progressPercentage,
}: SurveyProgressProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">전체 진행률</span>
        <span className="text-sm font-semibold text-blue-600">
          {totalAnswered} / {totalQuestions} 문항
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>
          페이지 {currentPage + 1} / {totalPages}
        </span>
        <span>{progressPercentage.toFixed(0)}% 완료</span>
      </div>
    </div>
  );
}
