import React, { Suspense } from "react";
import Loading from "@/components/global/loading/loading";

const Intro = React.lazy(() => import("@/components/intro/intro"));
const Navbar = React.lazy(() => import("@/components/navbar/navbar"));
const Experience = React.lazy(
  () => import("@/components/experience/experience")
);
const GradientCircle = React.lazy(
  () => import("@/components/global/gradientCircle/gradientCircle")
);
const Projects = React.lazy(() => import("@/components/projects/projects"));
const Contact = React.lazy(() => import("@/components/contact/contact"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <GradientCircle />
        <Navbar />
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}
