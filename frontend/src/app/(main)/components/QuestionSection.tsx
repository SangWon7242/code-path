"use client";

import React, { useState } from "react";

interface Question {
  id: number;
  text: string;
}

interface ScaleButtonProps {
  selected: boolean;
  onClick: () => void;
  size: "large" | "medium" | "small";
  color: "green" | "purple" | "gray";
}

const ScaleButton: React.FC<ScaleButtonProps> = ({
  selected,
  onClick,
  size,
  color,
}) => {
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
};

interface ScaleRowProps {
  value: number | null;
  onChange: (value: number) => void;
}

const ScaleRow: React.FC<ScaleRowProps> = ({ value, onChange }) => {
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
      <span className="text-sm text-gray-500 mr-4">그렇다</span>
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
      <span className="text-sm text-gray-500 ml-4">그렇지 않다</span>
    </div>
  );
};

interface QuestionItemProps {
  question: Question;
  value: number | null;
  onChange: (value: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <p className="text-gray-700 text-center mb-6 leading-relaxed">
        {question.text}
      </p>
      <ScaleRow value={value} onChange={onChange} />
    </div>
  );
};

export default function QuestionSection() {
  const questions: Question[] = [
    {
      id: 1,
      text: "주기적으로 새로운 친구를 사귄다.",
    },
    {
      id: 2,
      text: "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
    },
    {
      id: 3,
      text: "일반적으로 사실에 기반한 주장보다 감정적으로 공감 가는 내용이 더 설득력 있다고 느낀다.",
    },
  ];

  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("설문 답변:", answers);
    alert("설문이 제출되었습니다!");
  };

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            웹 개발 진로 설문조사
          </h1>
          <p className="text-gray-600">
            각 질문에 대해 가장 적합한 답변을 선택해주세요
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              value={answers[question.id] || null}
              onChange={(value) => handleAnswer(question.id, value)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`
              px-8 py-3 rounded-lg font-semibold text-white
              transition-all duration-200
              ${
                allAnswered
                  ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                  : "bg-gray-400 cursor-not-allowed"
              }
            `}
          >
            {allAnswered
              ? "제출하기"
              : `${Object.keys(answers).length}/${questions.length} 답변 완료`}
          </button>
        </div>
      </div>
    </div>
  );
}
