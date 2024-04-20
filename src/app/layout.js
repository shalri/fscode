import { Inter, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "FScode",
  description: "Notes on web develepment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
