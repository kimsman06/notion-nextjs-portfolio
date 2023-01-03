import Layout from "../components/layout";
import Head from "next/head";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>김재준의 포트폴리오 | 소개합니다</title>
        <meta name="description" content="연락하기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen">
        <h1>안녕하세요</h1>
      </section>
    </Layout>
  );
}
