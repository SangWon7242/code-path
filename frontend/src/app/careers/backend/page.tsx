"use client";

import Link from "next/link";

export default function BackendPage() {
  const career = {
    name: "백엔드 개발자",
    description: "서버, 데이터베이스, API를 구축하는 개발자",
    icon: "🔧",
    characteristics: [
      "서버 사이드 로직 구현",
      "데이터베이스 설계 및 최적화",
      "RESTful/GraphQL API 개발",
      "보안과 인증 시스템 구축",
      "대용량 트래픽 처리",
    ],
    curriculum: [
      {
        phase: "1단계",
        title: "프로그래밍 기초",
        duration: "3-4개월",
        topics: [
          "서버 언어 (Node.js/Python/Java)",
          "알고리즘/자료구조",
          "OOP 개념",
          "Git",
        ],
      },
      {
        phase: "2단계",
        title: "데이터베이스",
        duration: "2-3개월",
        topics: [
          "SQL (MySQL/PostgreSQL)",
          "NoSQL (MongoDB)",
          "ORM",
          "쿼리 최적화",
        ],
      },
      {
        phase: "3단계",
        title: "서버 & API",
        duration: "3-4개월",
        topics: [
          "RESTful API",
          "인증/인가 (JWT)",
          "프레임워크 (Express/NestJS)",
          "테스팅",
        ],
      },
      {
        phase: "4단계",
        title: "인프라 & DevOps",
        duration: "지속적",
        topics: ["Docker/Kubernetes", "AWS/GCP", "CI/CD", "모니터링"],
      },
    ],
    careerPath: [
      "주니어 백엔드",
      "시니어 백엔드",
      "백엔드 리드",
      "시스템 아키텍트",
    ],
    salary: {
      junior: "3,500만원 ~ 5,000만원",
      mid: "5,000만원 ~ 8,000만원",
      senior: "8,000만원 ~ 12,000만원+",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            ← 돌아가기
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{career.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {career.name}
              </h1>
              <p className="text-lg text-gray-600">{career.description}</p>
            </div>
          </div>
        </div>

        {/* 주요 특징 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            💡 주요 특징
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {career.characteristics.map((char, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg"
              >
                <span className="text-purple-600 font-bold">{index + 1}</span>
                <span className="text-gray-700">{char}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 커리큘럼 로드맵 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            📚 학습 로드맵
          </h2>
          <div className="relative">
            {/* 연결선 */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 hidden md:block" />

            {/* 커리큘럼 단계 */}
            <div className="space-y-8">
              {career.curriculum.map((phase, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* 단계 아이콘 */}
                  <div className="absolute left-4 top-0 w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hidden md:flex">
                    {index + 1}
                  </div>

                  {/* 단계 내용 */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full font-semibold">
                        {phase.phase}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                        {phase.title}
                      </h3>
                      <span className="ml-auto text-sm text-gray-500">
                        ⏱️ {phase.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-white text-gray-700 text-sm rounded-lg border border-gray-200"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 커리어 패스 & 연봉 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 커리어 패스 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              🚀 커리어 패스
            </h2>
            <div className="space-y-4">
              {career.careerPath.map((path, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                        style={{
                          width: `${
                            ((index + 1) / career.careerPath.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                  <span className="font-semibold text-gray-700">{path}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 예상 연봉 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              💰 예상 연봉
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="text-sm text-gray-600 mb-1">주니어 (0-3년)</div>
                <div className="text-lg font-bold text-gray-800">
                  {career.salary.junior}
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="text-sm text-gray-600 mb-1">미드 (3-7년)</div>
                <div className="text-lg font-bold text-gray-800">
                  {career.salary.mid}
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <div className="text-sm text-gray-600 mb-1">시니어 (7년+)</div>
                <div className="text-lg font-bold text-gray-800">
                  {career.salary.senior}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all"
          >
            다시 테스트하기
          </Link>
        </div>
      </div>
    </div>
  );
}
