import Header from "../components/layout/Header";
import MainSection from "./components/MainSection";
import QuestionSection from "./components/QuestionSection";

// { children: React.ReactNode } : children이라는 프롭(prop)의 타입이 React.ReactNode임을 명시
export default function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <QuestionSection />
      </main>
    </>
  );
}
