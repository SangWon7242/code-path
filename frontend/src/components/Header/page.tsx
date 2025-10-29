import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import localFont from "next/font/local";

const jalnan = localFont({
  src: "../../assets/fonts/Jalnan2/Jalnan2TTF.ttf",
  display: "swap",
});

export default function Header() {
  return (
    <header className="top-bar bg-white fixed inset-x-0 top-0 z-999 border-b">
      <div className="con px-5 flex h-[90px]">
        <div className="top-bar__left">
          <div className="logo-box h-full">
            <Link href="#" className="logo flex h-full items-center gap-x-1">
              <Image src={logo} alt="로고" width={45} height={45} />
              <span
                className={`logo-text text-[20px] font-bold ${jalnan.className}`}
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
