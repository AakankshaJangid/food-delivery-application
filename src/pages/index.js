import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./home";
import LandingPage from "./landing-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <HelpPage /> */}
      {/* <HomePage /> */}
      <LandingPage />
    </main>
  );
}
