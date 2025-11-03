import { CAREER_BACKEND_DATA } from "./backend";
import { CAREER_FRONTEND_DATA } from "./frontend";
import { CAREER_PUBLISHER_DATA } from "./publisher";

export interface CareerCurriculum {
  phase: string;
  title: string;
  duration: string;
  topics: string[];
}

export interface CareerData {
  name: string;
  description: string;
  icon: string;
  characteristics: string[];
  curriculum: CareerCurriculum[];
  careerPath: string[];
  salary: {
    junior: string;
    mid: string;
    senior: string;
  };
  // UI 테마 색상
  colors: {
    primary: string; // 주요 색상 (특징 배경)
    gradient: string; // 그라데이션 (타임라인, 버튼)
  };
}

export const CAREERS_DATA: Record<string, CareerData> = {
  publisher: {
    ...CAREER_PUBLISHER_DATA,
    colors: {
      primary: "blue",
      gradient: "from-blue-500 to-purple-500",
    },
  },
  frontend: {
    ...CAREER_FRONTEND_DATA,
    colors: {
      primary: "green",
      gradient: "from-green-500 to-blue-500",
    },
  },
  backend: {
    ...CAREER_BACKEND_DATA,
    colors: {
      primary: "purple",
      gradient: "from-purple-500 to-blue-500",
    },
  },
};

// 유효한 slug 목록
export const VALID_CAREER_SLUGS = Object.keys(CAREERS_DATA);

// slug로 데이터 가져오기
export function getCareerData(slug: string): CareerData | null {
  return CAREERS_DATA[slug] || null;
}
