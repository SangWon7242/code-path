"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import ReTestButton from "@/app/components/common/buttons/reTestButton";
import GoBackButton from "@/app/components/common/buttons/GoBackButton";
import { getCareerData } from "@/constants/careersData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CareerDetailPage({ params }: PageProps) {
  // Next.js 15+에서 params는 Promise입니다
  const resolvedParams = use(params);
  const career = getCareerData(resolvedParams.slug);

  // 디버깅용 로그 (개발 환경에서만)
  if (process.env.NODE_ENV === "development") {
    console.log("Slug:", resolvedParams.slug);
    console.log("Career Data:", career);
  }

  // 유효하지 않은 slug면 404 페이지로
  if (!career) {
    notFound();
  }

  // 색상 클래스 동적 생성
  const getColorClasses = () => {
    const { primary } = career.colors;
    return {
      characteristic: `bg-${primary}-50`,
      characteristicText: `text-${primary}-600`,
      timeline: `bg-gradient-to-b from-${primary}-500 via-${
        career.colors.primary === "green" ? "blue" : "purple"
      }-500 to-${
        career.colors.primary === "blue"
          ? "pink"
          : career.colors.primary === "green"
          ? "purple"
          : "pink"
      }-500`,
      phaseIcon: `bg-gradient-to-br ${career.colors.gradient}`,
      phaseBg: `bg-gradient-to-br from-${primary}-50 to-${
        career.colors.primary === "blue"
          ? "purple"
          : career.colors.primary === "green"
          ? "blue"
          : "blue"
      }-50`,
      phaseBadge: `bg-${primary}-600`,
      careerPathIcon: `bg-gradient-to-br ${career.colors.gradient}`,
      careerPathBar: `bg-gradient-to-r ${career.colors.gradient}`,
    };
  };

  const colors = getColorClasses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <GoBackButton />

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
                className={`flex items-start gap-3 p-4 ${colors.characteristic} rounded-lg`}
              >
                <span className={`${colors.characteristicText} font-bold`}>
                  {index + 1}
                </span>
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
            <div
              className={`absolute left-8 top-0 bottom-0 w-1 ${colors.timeline} hidden md:block`}
            />

            {/* 커리큘럼 단계 */}
            <div className="space-y-8">
              {career.curriculum.map((phase, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* 단계 아이콘 */}
                  <div
                    className={`absolute left-4 top-0 w-9 h-9 ${colors.phaseIcon} rounded-full flex items-center justify-center text-white font-bold shadow-lg hidden md:flex`}
                  >
                    {index + 1}
                  </div>

                  {/* 단계 내용 */}
                  <div
                    className={`${colors.phaseBg} rounded-xl p-6 hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-3 py-1 ${colors.phaseBadge} text-white text-sm rounded-full font-semibold`}
                      >
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
                  <div
                    className={`flex-shrink-0 w-8 h-8 ${colors.careerPathIcon} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colors.careerPathBar}`}
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
          <ReTestButton />
        </div>
      </div>
    </div>
  );
}
