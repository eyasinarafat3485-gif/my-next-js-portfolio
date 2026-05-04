import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import MotionWrapper from "./components/MotionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eyasin Arafat | Full Stack Developer",
  description: "Portfolio of Eyasin Arafat",
  icons: {
    icon: [
      { url: "/EA-favicon.png" },
    ],
    apple: [
      { url: "/EA-favicon.png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionWrapper>
        <Navbar />

        <main > 
          {children}
        </main>
</MotionWrapper>
        <Footer />
      </body>
    </html>
  );
}
