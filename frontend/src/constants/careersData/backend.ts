export const CAREER_BACKEND_DATA = {
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
