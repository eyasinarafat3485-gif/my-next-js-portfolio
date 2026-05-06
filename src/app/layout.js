import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import MotionWrapper from "./components/MotionWrapper";
import SmoothScrolling from "./components/SmoothScroll";
import CursorFollower from "./components/CursorFollower";

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
      { url: "/ea.jpg" },
    ],
    apple: [
      { url: "/ea.jpg" },
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
        <SmoothScrolling >
          <MotionWrapper>
            <CursorFollower />
            <Navbar />

            <main>{children}</main>

          </MotionWrapper>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
