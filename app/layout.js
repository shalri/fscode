import { Overpass, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

const op = Overpass({ subsets: ["latin"] });
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: {
    template: "%s | FScode",
    default: "FScode",
  },
  description: "Notes on web develepment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${op.className} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
