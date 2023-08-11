import Layout from "../components/layout";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";
import clientPromise from "../lib/mongodb";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>김재준의 포트폴리오 | 영상 포트폴리오</title>
        <meta name="description" content="제작한 영상들을 볼 수 있습니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-sm md:container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="flex flex-col items-center justify-center min-h-screen mb-10">
          <h1 className="text-2xl font-bold md:text-4xl mb-8">
            총 포트폴리오 :
            <span className="pl-4 text-blue-500">{projects.length}</span>
          </h1>
          <div className="grid gird-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
            {projects.map((aProject) => (
              <ProjectItem key={aProject._id} data={aProject} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("video");

  let projects = await db.collection("data").find({}).toArray();
  projects = JSON.parse(JSON.stringify(projects));

  return {
    props: { projects },
  };
}
