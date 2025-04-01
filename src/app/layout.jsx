export const dynamic = "force-dynamic";

import AuthContextProvider from "@/context/AuthContext";
import { Marcellus } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${marcellus.className}`}>
        <AuthContextProvider>
          {children}
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
      </body>
    </html>
  );
}
