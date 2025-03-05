import AuthContextProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <style jsx global>{`
        html {
          font-family: ${marcellus.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
