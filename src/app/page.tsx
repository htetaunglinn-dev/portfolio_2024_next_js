"use client";

import Loading from "@/components/global/loading/loading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Intro = dynamic(() => import("@/components/intro/intro"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/navbar/navbar"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/experience/experience"), {
  ssr: false,
});
const GradientCircle = dynamic(
  () => import("@/components/global/gradientCircle/gradientCircle"),
  { ssr: false }
);
const Projects = dynamic(() => import("@/components/projects/projects"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/contact/contact"), {
  ssr: false,
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
