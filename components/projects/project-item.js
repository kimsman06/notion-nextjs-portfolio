import Image from "next/image";

export default function ProjectItem({ data }) {
  const { title, youtube, synopsis, imgSrc, roles, genre, years } = data;

  return (
    <a href={youtube}>
      <div className="project-card">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          width="100%"
          height="56%"
          layout="responsive"
          objectFit="cover"
          quality={100}
          alt={title}
        />

        <div className="p-4 flex flex-col justify-items-stretch">
          <h1 className="flex flex-col text-xl">
            {title} <span className="text-sm">({years})</span>
          </h1>

          <p className="mt-1 text-sm">
            {synopsis === null ? "준비중입니다..." : synopsis}
          </p>

          <div className="flex items-strat mt-4">
            <h2 className="px-2 py-1 mr-2 rounded-md bg-sky-100 dark:bg-sky-700/50 w-30 text-xs">
              {genre === null ? "기타" : genre}
            </h2>
          </div>

          <div className="flex items-strat mt-2">
            {roles.map((aRole) => (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-sky-100 dark:bg-sky-700/50 w-30 text-xs"
                key={aRole.id}
              >
                {aRole.name}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
