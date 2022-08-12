import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config/index";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>김재준의 포트폴리오 | 영상 포트폴리오</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-2xl font-bold sm:text-4xl">
          총 포트폴리오 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid gird-cols-1 p-12 m-4 gap-8 md:grid-cols-2 2xl:grid-cols-4">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 200,
      sorts: [
        {
          property: "제작년도",
          direction: "descending",
        },
        {
          property: "제목",
          direction: "ascending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects },
  };
}
