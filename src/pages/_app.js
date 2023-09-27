import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const documentHeightWidth = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
      doc.style.setProperty("--doc-width", `${window.innerWidth}px`);
      console.log("::: ", window.innerHeight, window.innerWidth);
    };
    window.addEventListener("resize", documentHeightWidth);
    documentHeightWidth();

    return () => {
      window.removeEventListener("resize", documentHeightWidth);
    };
  });

  return getLayout(<Component {...pageProps} />);
}
