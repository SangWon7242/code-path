import Link from "next/link";

export default function ReTestButton() {
  return (
    <Link
      href="/"
      className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-xl transition-all"
    >
      다시 테스트하기
    </Link>
  );
}
