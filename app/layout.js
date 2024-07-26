import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./universal-components/Navbar";
import Footer from "./universal-components/Footer";
import Script from "next/script";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "CUET Preparation",
  description: "CUET Preparation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar/>

          {children}
        <Footer/>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}
