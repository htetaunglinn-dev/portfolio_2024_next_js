import Intro from "@/components/intro/intro";
import Navbar from "@/components/navbar/navbar";
import Experience from "@/components/experience/experience";
import GradientCircle from "@/components/gradientCircle.tsx/gradientCircle";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <GradientCircle />
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
