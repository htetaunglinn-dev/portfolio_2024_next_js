"use client";

import Image from "next/image";
import ExperienceCard from "../global/experienceCard/experienceCard";
import { IExperienceCard } from "../model/experience.model";
import { transition, variants } from "../../constants/constants";
import { motion } from "motion/react";

const Experience = () => {
  const experienceDataSource: IExperienceCard[] = [
    {
      logoUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739081714/Portfolio%20Next%20JS%202025/logo/1.png",
      companyName: "Smilax Global",
      companyUrl: "https://smilaxglobal.com/",
      expPeriod: "Mar 2022 - Feb 2023",
      position: "Frontend Developer",
      alt: "Htet Aung Linn - Full Stack Developer in Bangkok, Thailand, Smilax Global",
    },
    {
      logoUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739081714/Portfolio%20Next%20JS%202025/logo/2.png",
      companyName: "ThitsaWorks",
      companyUrl: "https://www.thitsaworks.com/",
      expPeriod: "Apr 2023 - Jan 2024",
      position: "Frontend Developer",
      alt: "Htet Aung Linn - Full Stack Developer in Bangkok, Thailand, ThitsaWorks",
    },
    {
      logoUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739081714/Portfolio%20Next%20JS%202025/logo/3.png",
      companyName: "GoFive",
      companyUrl: "https://www.gofive.co.th/",
      expPeriod: "Jan 2024 - Current",
      position: "Frontend Developer",
      alt: "Htet Aung Linn - Full Stack Developer in Bangkok, Thailand, GoFive",
    },
  ];

  return (
    <div className="pb-36" id="experience">
      <motion.div
        // initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.04 }}
        className="content__container flex flex-col lg:flex-row gap-10 rounded-lg px-6 py-6 "
      >
        <motion.section
          transition={transition}
          variants={variants}
          className="w-full max-w-[45%] flex-1 relative"
        >
          <Image
            priority
            src="https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739679704/Portfolio%20Next%20JS%202025/experinece/Welcome_n2yrcl.svg"
            alt="experience card"
            fill
            className="object-contain rounded-md"
          />
        </motion.section>
        <section className="flex-1 space-y-8">
          <motion.h2
            transition={transition}
            variants={variants}
            className="font-bold header__font text-gradient-gray w-fit"
          >
            Work Experience
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1, staggerChildren: 0.04 }}
            className="flex flex-col gap-5 paragraph__font"
          >
            <motion.li transition={transition} variants={variants}>
              I started my career as a{" "}
              <span className="font-semibold">Frontend Developer </span>at{" "}
              <span className="font-semibold">Smilax Global </span> in Yangon,
              Myanmar, where I built HR software, CMS platforms, and asset
              management systems, eventually earning a promotion to{" "}
              <span className="font-semibold">
                Mid-Level Frontend Developer.
              </span>{" "}
            </motion.li>
            <motion.li transition={transition} variants={variants}>
              I then contributed to the{" "}
              <span className="font-semibold">Mojaloop Foundation </span> at{" "}
              <span className="font-semibold">ThitsaWorks</span>, working on
              microfinance and payment portal solutions.
            </motion.li>
            <motion.li transition={transition} variants={variants}>
              Currently, at <span className="font-semibold">GoFive</span> in
              Bangkok, Thailand, I’m developing the{" "}
              <span className="font-semibold">Venio Project</span>, a CMS
              platform, where I continue to create seamless and user-friendly
              experiences.
            </motion.li>
          </motion.ul>
          <ExperienceCard experienceDataSource={experienceDataSource} />
        </section>
      </motion.div>
    </div>
  );
};

export default Experience;
