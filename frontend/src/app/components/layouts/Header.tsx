import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Code Path
          </span>
        </Link>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            홈으로
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            테스트 하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
