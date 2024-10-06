import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LAZAREV. 🪀 — Digital Product Design Agency | Award Winning UX & UI Agency",
  description: "Integarate AI in your business to secure your future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative bg-[#111]">
          <Navbar />
          <div className="bg-[#111]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
