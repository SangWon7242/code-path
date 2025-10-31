interface SurveyResultProps {
  answers: Record<number, number>;
  onRestart: () => void;
}

interface CareerScore {
  name: string;
  score: number;
  percentage: number;
  color: string;
  description: string;
  skills: string[];
}

export default function SurveyResult({
  answers,
  onRestart,
}: SurveyResultProps) {
  const calculateScores = (): CareerScore[] => {
    const categoryMapping = {
      publisher: [
        1, 4, 6, 8, 11, 13, 16, 19, 21, 23, 26, 31, 33, 35, 38, 40, 41, 46, 48,
      ],
      frontend: [3, 9, 14, 18, 19, 24, 28, 29, 36, 39, 43, 44, 49],
      backend: [
        2, 5, 7, 10, 12, 15, 17, 20, 22, 25, 27, 30, 32, 34, 37, 39, 42, 45, 47,
        50,
      ],
    };

    const scores = {
      publisher: 0,
      frontend: 0,
      backend: 0,
    };

    // 점수 계산 (낮을수록 적합: 1=매우 그렇다, 7=그렇지 않다)
    Object.entries(categoryMapping).forEach(([category, questionIds]) => {
      const totalScore = questionIds.reduce(
        (sum, id) => sum + (answers[id] || 4),
        0
      );
      const avgScore = totalScore / questionIds.length;
      // 점수 반전 후 지수 함수로 차이를 극대화 (높을수록 적합하도록)
      const reversedScore = 8 - avgScore;
      scores[category as keyof typeof scores] = Math.exp(reversedScore * 0.8);
    });

    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);

    return [
      {
        name: "웹 퍼블리셔",
        score: scores.publisher,
        percentage: (scores.publisher / total) * 100,
        color: "bg-blue-500",
        description: "HTML, CSS를 활용해 디자인을 코드로 구현하는 전문가",
        skills: ["HTML/CSS", "반응형 디자인", "웹 접근성", "크로스 브라우징"],
      },
      {
        name: "프론트엔드 개발자",
        score: scores.frontend,
        percentage: (scores.frontend / total) * 100,
        color: "bg-green-500",
        description: "사용자가 직접 경험하는 웹 인터페이스를 개발하는 개발자",
        skills: [
          "JavaScript/TypeScript",
          "React/Vue",
          "상태관리",
          "UX/UI 구현",
        ],
      },
      {
        name: "백엔드 개발자",
        score: scores.backend,
        percentage: (scores.backend / total) * 100,
        color: "bg-purple-500",
        description: "서버, 데이터베이스, API를 구축하는 개발자",
        skills: ["서버 언어", "데이터베이스", "API 설계", "클라우드/인프라"],
      },
    ].sort((a, b) => b.score - a.score);
  };

  const results = calculateScores();
  const topCareer = results[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎉 설문 결과
          </h1>
          <p className="text-gray-600 text-lg">
            당신에게 가장 적합한 웹 개발 진로는
          </p>
        </div>

        {/* 최적 진로 카드 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">{topCareer.name}</h2>
            <p className="text-blue-100 text-lg mb-4">
              {topCareer.description}
            </p>
            <div className="text-5xl font-bold mb-2">
              {topCareer.percentage.toFixed(1)}%
            </div>
            <p className="text-blue-100">적합도</p>
          </div>
        </div>

        {/* 전체 점수 비교 */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            📊 직군별 적합도 비교
          </h3>
          <div className="space-y-6">
            {results.map((career, index) => (
              <div key={career.name}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                    </span>
                    <span className="font-semibold text-gray-700">
                      {career.name}
                    </span>
                  </div>
                  <span className="text-gray-600 font-medium">
                    {career.percentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`${career.color} h-4 rounded-full transition-all duration-1000`}
                    style={{ width: `${career.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 각 진로별 상세 정보 */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {results.map((career) => (
            <div
              key={career.name}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-all"
            >
              <h4 className="font-bold text-lg text-gray-800 mb-2">
                {career.name}
              </h4>
              <p className="text-sm text-gray-600 mb-4">{career.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  주요 기술
                </p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 재시작 버튼 */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-blue-600 hover:bg-blue-50"
          >
            🔄 다시 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
