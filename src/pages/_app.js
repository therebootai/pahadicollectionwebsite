import AuthContextProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Marcellus } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
        className="z-[1100]"
      />
    </AuthContextProvider>
  );
}
