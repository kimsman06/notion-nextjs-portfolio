import Head from "next/head";
import Hero from "../components/home/hero";
import Animation from "../components/home/animation";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김재준의 포트폴리오</title>
        <meta name="description" content="김재준의 영상 포트폴리오 웹사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center text-gray-600 body-font">
        <div className="container min-h-screen mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
