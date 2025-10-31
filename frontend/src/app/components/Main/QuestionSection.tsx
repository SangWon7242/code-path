"use client";

import { useState, useRef, useEffect } from "react";
import {
  questions,
  QUESTIONS_PER_PAGE,
  TOTAL_PAGES,
} from "@/constants/questionData";
import SurveyResult from "./SurveyResult";

interface ScaleButtonProps {
  selected: boolean;
  onClick: () => void;
  size: "large" | "medium" | "small";
  color: "green" | "purple" | "gray";
}

function ScaleButton({ selected, onClick, size, color }: ScaleButtonProps) {
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

interface ScaleRowProps {
  value: number | null;
  onChange: (value: number) => void;
}

function ScaleRow({ value, onChange }: ScaleRowProps) {
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

interface QuestionItemProps {
  questionId: number;
  questionText: string;
  questionNumber: number;
  value: number | null;
  onChange: (value: number) => void;
}

function QuestionItem({
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

export default function QuestionSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const questionsRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (questionsRef.current) {
      questionsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 페이지가 변경될 때마다 자동으로 스크롤
  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const getCurrentPageQuestions = () => {
    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = startIndex + QUESTIONS_PER_PAGE;
    return questions.slice(startIndex, endIndex);
  };

  const isCurrentPageComplete = () => {
    const pageQuestions = getCurrentPageQuestions();
    return pageQuestions.every((q) => answers[q.id] !== undefined);
  };

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES - 1 && isCurrentPageComplete()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentPage(0);
    setShowResult(false);
  };

  const totalAnswered = Object.keys(answers).length;
  const progressPercentage = (totalAnswered / questions.length) * 100;
  const isLastPage = currentPage === TOTAL_PAGES - 1;
  const allQuestionsAnswered = totalAnswered === questions.length;

  // 결과 화면 표시
  if (showResult) {
    return <SurveyResult answers={answers} onRestart={handleRestart} />;
  }

  const pageQuestions = getCurrentPageQuestions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div ref={questionsRef} className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            웹 개발 진로 탐색 설문조사
          </h1>
          <p className="text-gray-600">총 50문항 / 페이지당 5문항</p>
        </div>

        {/* 진행률 표시 */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">
              전체 진행률
            </span>
            <span className="text-sm font-semibold text-blue-600">
              {totalAnswered} / {questions.length} 문항
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
              페이지 {currentPage + 1} / {TOTAL_PAGES}
            </span>
            <span>{progressPercentage.toFixed(0)}% 완료</span>
          </div>
        </div>

        {/* 질문 목록 */}
        <div className="space-y-4 mb-8">
          {pageQuestions.map((question, index) => (
            <QuestionItem
              key={question.id}
              questionId={question.id}
              questionText={question.text}
              questionNumber={currentPage * QUESTIONS_PER_PAGE + index + 1}
              value={answers[question.id] || null}
              onChange={(value) => handleAnswer(question.id, value)}
            />
          ))}
        </div>

        {/* 페이지 네비게이션 */}
        <div className="flex items-center justify-between gap-4">
          {/* 이전 버튼 */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all
              ${
                currentPage === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg"
              }
            `}
          >
            ← 이전
          </button>

          {/* 페이지 인디케이터 */}
          <div className="flex gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index);
                }}
                className={`
                  w-3 h-3 rounded-full transition-all
                  ${
                    index === currentPage
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }
                `}
                aria-label={`페이지 ${index + 1}로 이동`}
              />
            ))}
          </div>

          {/* 다음 또는 결과 버튼 */}
          {isLastPage ? (
            <button
              onClick={handleShowResult}
              disabled={!allQuestionsAnswered}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all
                ${
                  allQuestionsAnswered
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              {allQuestionsAnswered ? "결과 보기 🎉" : "모든 문항 답변 필요"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isCurrentPageComplete()}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all
                ${
                  isCurrentPageComplete()
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              {isCurrentPageComplete() ? "다음 →" : "현재 페이지 답변 필요"}
            </button>
          )}
        </div>

        {/* 안내 메시지 */}
        {!isCurrentPageComplete() && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              💡 현재 페이지의 모든 질문에 답변해야 다음으로 넘어갈 수 있습니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
