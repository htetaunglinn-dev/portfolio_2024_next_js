"use client";

import { Download } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Intro = () => {
  return (
    <div className="w-full">
      <section
        id="about"
        className="content__container h-[80vh] md:h-[90vh] pt-[100px] lg:pt-[70px] flex justify-center items-center "
      >
        <div className="intro-content__left flex flex-col justify-center items-center gap-5">
          <span className="text-sm">
            <Badge className="bg-skin-fill hover:bg-skin-button-muted">
              Location
            </Badge>
            <span className="ml-2 text-xs">
              <del>Yangon</del> Bangkok, Thailand
            </span>
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-center">
            <span className="text-gradient-gray">Htet Aung Linn @ David</span>
            <br />
            <span className="text-gradient-gray">Full Stack Developer</span>
          </h1>

          <p className="text-sm md:text-base  w-[80%] md:w-[70%] lg:w-[58%] xl:w-[50%] text-center">
            Passionate about crafting seamless web experiences with 4+ years of
            expertise in{" "}
            <span className="">
              Typescript, React, Angular, Next.js, Node.js, and MongoDB.{" "}
            </span>
            Turn ideas into scalable, high-performance applications that drive
            results. Let&apos;s build something amazing together!
          </p>
          <section className="intro-content__footer flex gap-2">
            <Button className="bg-skin-fill text-xs sm:text-sm hover:bg-skin-button-muted">
              Go to GitHub
            </Button>
            <Button className="bg-skin-button-accent text-xs sm:text-sm text-skin-inverted hover:bg-skin-button-accent-hover">
              <Download size={20} color="#4169e1" strokeWidth={1.5} /> Resume
            </Button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Intro;
