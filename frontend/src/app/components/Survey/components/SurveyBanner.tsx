export default function SurveyBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* 1단계 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-500">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-4 flex items-center justify-center">
            <svg
              className="w-full h-full text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            1단계
          </span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">테스트 완료</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            여러분의 웹 개발 적성을 확인할 수 있도록 솔직하게 답변해 주세요.
          </p>
        </div>
      </div>

      {/* 2단계 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-green-500">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-4 flex items-center justify-center">
            <svg
              className="w-full h-full text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            2단계
          </span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            상세 결과 보기
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            여러분의 적성이 웹 개발의 다양한 분야에 어떻게 적용되는지
            알아보세요.
          </p>
        </div>
      </div>

      {/* 3단계 */}
      <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-purple-500">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-4 flex items-center justify-center">
            <svg
              className="w-full h-full text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            3단계
          </span>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            커리어 로드맵 확인
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            맞춤형 학습 경로를 통해 원하는 웹 개발자로 성장하세요.
          </p>
        </div>
      </div>
    </div>
  );
}
