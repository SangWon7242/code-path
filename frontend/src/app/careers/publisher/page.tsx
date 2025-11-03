"use client";

import ReTestButton from "@/app/components/common/buttons/reTestButton";
import { CAREER_PUBLISHER_DATA } from "@/constants/careersData/publisher";
import GoBackButton from "@/app/components/common/buttons/GoBackButton";

export default function PublisherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <GoBackButton />

          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{CAREER_PUBLISHER_DATA.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {CAREER_PUBLISHER_DATA.name}
              </h1>
              <p className="text-lg text-gray-600">
                {CAREER_PUBLISHER_DATA.description}
              </p>
            </div>
          </div>
        </div>

        {/* 주요 특징 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            💡 주요 특징
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {CAREER_PUBLISHER_DATA.characteristics.map((char, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
              >
                <span className="text-blue-600 font-bold">{index + 1}</span>
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
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            {/* 커리큘럼 단계 */}
            <div className="space-y-8">
              {CAREER_PUBLISHER_DATA.curriculum.map((phase, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* 단계 아이콘 */}
                  <div className="absolute left-4 top-0 w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hidden md:flex">
                    {index + 1}
                  </div>

                  {/* 단계 내용 */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-semibold">
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
              {CAREER_PUBLISHER_DATA.careerPath.map((path, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{
                          width: `${
                            ((index + 1) /
                              CAREER_PUBLISHER_DATA.careerPath.length) *
                            100
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
                  {CAREER_PUBLISHER_DATA.salary.junior}
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="text-sm text-gray-600 mb-1">미드 (3-7년)</div>
                <div className="text-lg font-bold text-gray-800">
                  {CAREER_PUBLISHER_DATA.salary.mid}
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <div className="text-sm text-gray-600 mb-1">시니어 (7년+)</div>
                <div className="text-lg font-bold text-gray-800">
                  {CAREER_PUBLISHER_DATA.salary.senior}
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
