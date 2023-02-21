import Link from "next/link";
import { CiCamera } from "react-icons/ci";
import DarkModeToggleButton from "./home/dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <CiCamera className="md:w-10 md:h-10 w-8 h-8 text-white p-2 bg-indigo-500 rounded-full" />
              <span className="md:ml-3 md:text-2xl text-lg ml-2">
                김재준 포트폴리오
              </span>
            </a>
          </Link>
          <nav className="md:ml-auto sm:text-base text-sm flex items-center justify-between">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">포트폴리오</a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 hover:text-gray-900">연락하기</a>
            </Link>
            <DarkModeToggleButton />
          </nav>
        </div>
      </header>
    </>
  );
}
