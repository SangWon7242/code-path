"use client";

import { useState, useRef, useEffect } from "react";
import {
  questions,
  QUESTIONS_PER_PAGE,
  TOTAL_PAGES,
} from "@/constants/questionData";
import SurveyResult from "./SurveyResult";
import SurveyBanner from "./components/SurveyBanner";
import SurveyProgress from "./components/SurveyProgress";
import QuestionItem from "./components/QuestionItem";

export default function QuestionSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const questionsRef = useRef<HTMLDivElement>(null);
  const questionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const progressRef = useRef<HTMLDivElement>(null);

  const scrollToFirstQuestion = () => {
    // 전체 진행률 표시 부분으로 스크롤 (100px 위로)
    if (progressRef.current) {
      setTimeout(() => {
        progressRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // 100px 위로 추가 스크롤
        setTimeout(() => {
          window.scrollBy({
            top: -200,
            behavior: "smooth",
          });
        }, 100);
      }, 100);
    }
  };

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    // 다음 질문으로 자동 스크롤
    const pageQuestions = getCurrentPageQuestions();
    const currentIndex = pageQuestions.findIndex((q) => q.id === questionId);
    const nextQuestion = pageQuestions[currentIndex + 1];

    if (nextQuestion && questionRefs.current[nextQuestion.id]) {
      // 짧은 딜레이 후 스크롤 (애니메이션이 자연스럽게 보이도록)
      setTimeout(() => {
        questionRefs.current[nextQuestion.id]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
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

  // 페이지가 변경될 때마다 첫 번째 질문으로 스크롤
  useEffect(() => {
    scrollToFirstQuestion();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div ref={questionsRef} className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            웹 개발 적성 테스트
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            총 50문항 / 페이지당 5문항
          </p>
        </div>

        {/* 3단계 안내 배너 */}
        <SurveyBanner />

        {/* 진행률 표시 */}
        <div ref={progressRef}>
          <SurveyProgress
            currentPage={currentPage}
            totalPages={TOTAL_PAGES}
            totalAnswered={totalAnswered}
            totalQuestions={questions.length}
            progressPercentage={progressPercentage}
          />
        </div>

        {/* 질문 목록 */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {pageQuestions.map((question, index) => (
            <QuestionItem
              key={question.id}
              ref={(el) => {
                questionRefs.current[question.id] = el;
              }}
              questionId={question.id}
              questionText={question.text}
              questionNumber={currentPage * QUESTIONS_PER_PAGE + index + 1}
              value={answers[question.id] || null}
              onChange={(value) => handleAnswer(question.id, value)}
            />
          ))}
        </div>

        {/* 페이지 네비게이션 */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* 이전 버튼 */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`
              px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-xs sm:text-sm md:text-base whitespace-nowrap
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
          <div className="flex gap-1.5 sm:gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index);
                }}
                className={`
                  w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all
                  ${
                    index === currentPage
                      ? "bg-blue-600 w-6 sm:w-8"
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
                px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-[10px] sm:text-sm md:text-base whitespace-nowrap
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
                px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-[10px] sm:text-sm md:text-base whitespace-nowrap
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
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              💡 현재 페이지의 모든 질문에 답변해야 다음으로 넘어갈 수 있습니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
