import "@/styles/globals.css";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${marcellus.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
