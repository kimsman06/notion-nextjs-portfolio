import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
        <h1 className="title-font sm:text-6xl text-4xl mb-6 font-light text-gray-900 sm:leading-tight leading-tight">
          안녕하세요 <br /> <span className="font-bold">영상</span>하는 <br />
          <span className=" font-bold">김재준</span> 입니다.
        </h1>
        <p className="sm:text-xl text-sm mb-8 sm:leading-relaxed sm:text-left text-center">
          저는 아주대학교 미디어학과에 재학중이며{" "}
          <br className="md:hidden inline-block" />
          단편영화를 주로 만듭니다.
          <br className="hidden md:inline-block" />
          이외에도 뮤직비디오, <br className="md:hidden inline-block" />
          다큐멘터리 등 다양한 분야의 영상을 제작했습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">포트폴리오 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
