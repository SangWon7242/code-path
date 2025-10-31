"use client";

import Header from "./components/layouts/Header";
import QuestionSection from "./components/Main/QuestionSection";

// { children: React.ReactNode } : children이라는 프롭(prop)의 타입이 React.ReactNode임을 명시
export default function App() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        <QuestionSection />
      </main>
    </>
  );
}
