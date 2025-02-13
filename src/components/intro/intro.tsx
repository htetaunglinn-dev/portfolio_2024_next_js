"use client";

import { Download } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const name = "Htet Aung Linn @ David";
const position = "Full Stack Developer";

const Intro = () => {
  const titles = name.split(" ");
  const positions = position.split(" ");

  const handleGithubRedirect = () => {
    window.open("https://github.com/htetaunglinn-dev", "_blank");
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.05 }}
    >
      <section
        id="about"
        className="content__container h-[80vh] md:h-[90vh] pt-[100px] lg:pt-[70px] flex justify-center items-center "
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
            {titles.map((title, index) => (
              <span key={index}>
                <motion.span
                  className="inline-block text-gray-600"
                  transition={transition}
                  variants={variants}
                >
                  {title}
                </motion.span>
                {index < title.length - 1 && " "}
              </span>
            ))}
            <br />
            {positions.map((position, index) => (
              <span key={index}>
                <motion.span
                  className="inline-block text-gray-600"
                  transition={transition}
                  variants={variants}
                >
                  {position}
                </motion.span>
                {index < position.length - 1 && " "}
              </span>
            ))}
          </h1>

          <motion.p
            transition={transition}
            variants={variants}
            className="text-sm md:text-base  w-[80%] md:w-[70%] lg:w-[58%] xl:w-[50%] text-center"
          >
            Passionate about crafting seamless web experiences with 4+ years of
            expertise in{" "}
            <span className="">
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
            <Button className="bg-skin-button-accent text-xs sm:text-sm text-skin-inverted hover:bg-skin-button-accent-hover">
              <Download size={20} color="#4169e1" strokeWidth={1.5} /> Resume
            </Button>
          </motion.section>
        </div>
      </section>
    </motion.div>
  );
};

export default Intro;
