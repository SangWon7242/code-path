import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gmarketSans = localFont({
  src: "../assets/fonts/GmarketSansTTFMedium.ttf",
  display: "swap",
  variable: "--font-gmarket-sans",
});

export const metadata: Metadata = {
  title: "Code Path - 웹 개발 적성 테스트",
  description:
    "퍼블리셔, 프론트엔드, 백엔드 중 당신에게 맞는 웹 개발 진로를 찾아보세요!",

  metadataBase: new URL("https://codepath.blap.kr"),

  // Open Graph (카카오톡, 페이스북 등)
  openGraph: {
    title: "Code Path - 웹 개발 적성 테스트",
    description:
      "퍼블리셔, 프론트엔드, 백엔드 중 당신에게 맞는 웹 개발 진로를 찾아보세요!",
    url: "https://codepath.blap.kr/", // 실제 배포된 URL로 변경
    siteName: "Code Path",
    images: [
      {
        url: "/thumbnail.png", // 썸네일 이미지 URL (1200x630 권장)
        width: 1200,
        height: 630,
        alt: "Code Path 웹 개발 적성 테스트",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`antialiased ${gmarketSans.className}`}>{children}</body>
    </html>
  );
}
