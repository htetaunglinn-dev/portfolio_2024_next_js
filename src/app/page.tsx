import Intro from "@/components/intro/intro";
import Navbar from "@/components/navbar/navbar";
import Experience from "@/components/experience/experience";
import GradientCircle from "@/components/gradientCircle.tsx/gradientCircle";

export default function Home() {
  return (
    <>
      <GradientCircle />
      <Navbar />
      <Intro />
      <Experience />
    </>
  );
}
