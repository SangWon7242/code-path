"use client";
import Link from "next/link";

export default function GoBackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
    >
      ← 돌아가기
    </Link>
  );
}
