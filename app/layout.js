// import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import { Overpass, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const op = Overpass({ subsets: ["latin"] });
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "FScode",
  description: "Notes on web develepment",
  icons: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${op.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
