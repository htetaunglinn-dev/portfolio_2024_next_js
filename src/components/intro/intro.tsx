"use client";

import { Download } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { transition, variants } from "../../constants/constants";
import Link from "next/link";

const Intro = () => {
  const handleGithubRedirect = () => {
    window.open("https://github.com/htetaunglinn-dev", "_blank");
  };

  return (
    <div id="about" className="w-full">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.04 }}
        className="content__container h-[100vh] md:h-[100vh] pt-[100px] lg:pt-[70px] flex justify-center items-center "
      >
        <div className="intro-content__left flex flex-col justify-center items-center gap-5">
          <motion.span
            className="text-sm"
            transition={transition}
            variants={variants}
          >
            <Badge className="bg-skin-fill hover:bg-skin-button-muted">
              Location
            </Badge>
            <span className="ml-2 text-xs">
              <del>Yangon</del> Bangkok, Thailand
            </span>
          </motion.span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-center">
            <span>
              <motion.span
                className="inline-block text-gray-600"
                transition={transition}
                variants={variants}
              >
                Htet Aung Linn @ David
              </motion.span>
            </span>

            <br />

            <span>
              <motion.h2
                className="inline-block text-gray-600"
                transition={transition}
                variants={variants}
              >
                Full Stack Developer
              </motion.h2>
            </span>
          </h1>

          <motion.p
            transition={transition}
            variants={variants}
            className="text-sm md:text-base  w-[80%] md:w-[70%] lg:w-[58%] xl:w-[50%] text-center"
          >
            Passionate about crafting seamless web experiences with 4+ years of
            expertise in{" "}
            <span>
              Typescript, React, Angular, Next.js, Node.js, and MongoDB.{" "}
            </span>
            Turn ideas into scalable, high-performance applications that drive
            results. Let&apos;s build something amazing together!
          </motion.p>
          <motion.section
            transition={transition}
            variants={variants}
            className="intro-content__footer flex gap-2"
          >
            <Button
              className="bg-skin-fill text-xs sm:text-sm hover:bg-skin-button-muted"
              onClick={handleGithubRedirect}
            >
              Go to GitHub
            </Button>
            <Link
              href="/Htet_Aung_Linn_Resume.pdf"
              download="Htet_Aung_Linn_Resume.pdf"
            >
              <Button className="bg-skin-button-accent text-xs sm:text-sm text-skin-inverted hover:bg-skin-button-accent-hover">
                <Download size={20} color="#4169e1" strokeWidth={1.5} /> Resume
              </Button>
            </Link>
          </motion.section>
        </div>
      </motion.section>
    </div>
  );
};

export default Intro;
