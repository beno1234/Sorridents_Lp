import "@/styles/globals.css";
import "@/styles/why.css";
import "@/styles/HoverButton.css";
import "../components/Section3/index.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
