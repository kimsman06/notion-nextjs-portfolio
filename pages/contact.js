import Layout from "../components/layout";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Contact() {
  const { theme, setTheme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, msg }),
    });

    setName("");
    setEmail("");
    setMsg("");

    if (res.status === 201) {
      toast("연락해 주셔서 감사합니다.", { type: "success" });
    } else {
      toast("입력이 제대로 되지 않았습니다. 다시 확인해주세요.", {
        type: "error",
      });
    }
  };

  return (
    <Layout>
      <Head>
        <title>김재준의 포트폴리오 | 연락하기</title>
        <meta name="description" content="연락하기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer theme={theme === "dark" ? "dark" : "light"} />
      <form className="text-gray-600 body-font relative" onSubmit={onSubmit}>
        <div className="container px-5 py-24 mx-auto min-h-screen ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              연락하기
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              연락처를 남겨주시면 확인 후 답변드리겠습니다.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    성명
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    문의내용
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  보내기
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-300 dark:border-slate-500/50 text-center">
                <a className="text-indigo-500">me@kimsman.kr</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
