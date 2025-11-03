"use client";

import { useEffect } from "react";
import Header from "./components/layouts/Header";
import QuestionSection from "./components/Survey/QuestionSection";

// { children: React.ReactNode } : children이라는 프롭(prop)의 타입이 React.ReactNode임을 명시
export default function App() {
  // 페이지 진입 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      <main>
        <QuestionSection />
      </main>
    </>
  );
}
