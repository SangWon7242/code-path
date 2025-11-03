export const CAREER_FRONTEND_DATA = {
  name: "프론트엔드 개발자",
  description: "사용자가 직접 경험하는 웹 인터페이스를 개발하는 개발자",
  icon: "⚛️",
  characteristics: [
    "동적인 웹 애플리케이션 개발",
    "사용자 경험(UX) 최적화",
    "상태 관리와 데이터 흐름 설계",
    "API 연동 및 데이터 처리",
    "성능 최적화와 테스트",
  ],
  curriculum: [
    {
      phase: "1단계",
      title: "프로그래밍 기초",
      duration: "3-4개월",
      topics: ["JavaScript 기초", "ES6+ 문법", "DOM 조작", "비동기 프로그래밍"],
    },
    {
      phase: "2단계",
      title: "프레임워크",
      duration: "3-4개월",
      topics: [
        "React 기초",
        "컴포넌트 설계",
        "Hooks",
        "상태 관리 (Redux/Zustand)",
      ],
    },
    {
      phase: "3단계",
      title: "TypeScript & 고급 기술",
      duration: "2-3개월",
      topics: [
        "TypeScript",
        "Next.js/Remix",
        "테스팅 (Jest, RTL)",
        "성능 최적화",
      ],
    },
    {
      phase: "4단계",
      title: "실무 역량",
      duration: "지속적",
      topics: ["API 설계", "CI/CD", "모니터링", "팀 협업"],
    },
  ],
  careerPath: [
    "주니어 프론트엔드",
    "시니어 프론트엔드",
    "테크 리드",
    "프론트엔드 아키텍트",
  ],
  salary: {
    junior: "3,000만원 ~ 4,500만원",
    mid: "4,500만원 ~ 7,000만원",
    senior: "7,000만원 ~ 10,000만원+",
  },
};
