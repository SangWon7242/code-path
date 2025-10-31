import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import logo from "@/assets/images/logo.png";

const jalnan = localFont({
  src: "../../../assets/fonts/Jalnan2TTF.ttf",
  display: "swap",
});

export default function Header() {
  return (
    <header className="top-bar bg-white fixed inset-x-0 top-0 z-999 shadow-sm">
      <div className="con px-3 sm:px-5 flex h-[70px] sm:h-[80px] md:h-[90px]">
        <div className="top-bar__left">
          <div className="logo-box h-full">
            <Link
              href="/"
              className="logo flex h-full items-center gap-x-1 sm:gap-x-2"
            >
              <Image
                src={logo}
                alt="로고"
                width={35}
                height={35}
                className="sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px]"
              />
              <span
                className={`logo-text text-[16px] sm:text-[18px] md:text-[20px] font-bold ${jalnan.className}`}
              >
                Code Path
              </span>
            </Link>
          </div>
        </div>
        <div className="top-bar__center"></div>
        <div className="top-bar__right"></div>
      </div>
    </header>
  );
}
