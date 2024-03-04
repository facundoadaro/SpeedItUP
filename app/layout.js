import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Speed It UP",
  description: "Empower your business with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights></SpeedInsights>
          <Header></Header>
          {children}
          <Footer></Footer>
        
      </body>
    </html>
  );
}
