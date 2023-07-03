import { ScrollToTop } from '../components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/cv.css'
import "nprogress/nprogress.css";

import NProgress from "nprogress";
import { useEffect } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const delay = 500; // in milliseconds
    let timer;
    const load = () => {
      timer = setTimeout(function () {
        NProgress.start();
      }, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      NProgress.done();
    };
    Router.events.on("routeChangeStart", () => load());
    Router.events.on("routeChangeComplete", () => stop());
    Router.events.on("routeChangeError", () => stop());
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default MyApp
