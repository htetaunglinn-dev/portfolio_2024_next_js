"use client";

import Loading from "@/components/global/loading/loading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Intro = dynamic(() => import("@/components/intro/intro"));
const Navbar = dynamic(() => import("@/components/navbar/navbar"));
const Experience = dynamic(() => import("@/components/experience/experience"));
const GradientCircle = dynamic(
  () => import("@/components/global/gradientCircle/gradientCircle")
);
const Projects = dynamic(() => import("@/components/projects/projects"));
const Contact = dynamic(() => import("@/components/contact/contact"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
