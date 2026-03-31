import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Montserrat } from "next/font/google";

export const metadata = {
  title: "Menu Digital - Restaurante",
  description: "Desenvolvido no curso de Next.js",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-gray-50 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}