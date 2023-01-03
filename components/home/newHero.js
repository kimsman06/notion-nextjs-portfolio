import Image from "next/image";

export default function NewHero() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="sm:text-6xl sm:leading-normal text-3xl font-bold text-gray-900 mb-6">
            안녕하세요 <br /> 영상하는 <br /> 김재준 입니다.
          </h1>
          <p className="sm:text-2xl sm:leading-loose text-sm text-gray-900 leaidng-loose">
            저는 아주대학교 미디어학과에 재학중이며 단편영화를 주로 만듭니다.{" "}
            <br />
            이외에도 뮤직비디오, 다큐멘터리 등 다양한 분야의 영상을
            제작해봤습니다.
          </p>
        </div>
        <Image src="/avatar.png" width="100%" height="100%" />
      </div>
    </>
  );
}
