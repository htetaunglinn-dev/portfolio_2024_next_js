"use client";

import Loading from "@/components/global/loading/loading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Intro = dynamic(() => import("@/components/intro/intro"), {
  ssr: true,
});
const Navbar = dynamic(() => import("@/components/navbar/navbar"), {
  ssr: true,
});
const Experience = dynamic(() => import("@/components/experience/experience"), {
  ssr: true,
});
const GradientCircle = dynamic(
  () => import("@/components/global/gradientCircle/gradientCircle"),
  { ssr: true }
);
const Projects = dynamic(() => import("@/components/projects/projects"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/contact/contact"), {
  ssr: true,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
