import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  NProgress.done(false);
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
