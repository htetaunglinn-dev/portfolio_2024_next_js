"use client";

import { Badge } from "../ui/badge";
import { useState, useEffect, useRef } from "react";
import { transition, variants } from "../../constants/constants";
import { motion } from "motion/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const cardDataSource = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739666729/Portfolio%20Next%20JS%202025/project/2_gf6cpa.svg",
      title: "DevEnv - News",
      description:
        "DevEnv is a cutting-edge technology news website built with Next.js, Tailwind CSS, shadcn UI, and TypeScript. It offers a responsive, user-friendly design with seamless dark mode support, ensuring an optimal reading experience across all devices. Stay updated with the latest in tech with DevEnv's sleek and modern interface.",
      link: "https://dev-env-five.vercel.app/",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739666729/Portfolio%20Next%20JS%202025/project/3_q3zabf.svg",
      title: "Global Supply",
      description:
        "Global Supply is a Thailand-based equipment supply company website, built with React, TypeScript (TS), Shadcn UI and Tailwind CSS to deliver a modern, responsive, and user-friendly web experience.",
      link: "https://global-supply.vercel.app/",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739666729/Portfolio%20Next%20JS%202025/project/1_d0b2h1.svg",
      title: "AirBnb - Rental",
      description:
        "Airbnb is a sleek and modern rental website inspired by Airbnb, built with Next.js, Tailwind CSS, shadcn UI, and JavaScript. It features a responsive, user-friendly design, making it easy to browse and book rentals seamlessly. Experience a contemporary and intuitive platform for all your rental needs.",
      link: "https://air-bnb-sooty-gamma.vercel.app/",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(
              entry.target as HTMLDivElement
            );
            setActiveSection(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, // Adjust this value to control when the section is considered "active"
      }
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div
        id="projects"
        className="content__container flex flex-col justify-center items-center gap-4 text-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1, staggerChildren: 0.04 }}
          className="flex flex-col justify-center items-center gap-4 text-center"
        >
          <motion.span transition={transition} variants={variants}>
            <Badge className="bg-skin-fill hover:bg-skin-button-muted">
              Art
            </Badge>
          </motion.span>
          <motion.h2
            transition={transition}
            variants={variants}
            className="text-5xl font-bold text-gradient-gray w-fit"
          >
            Selected Projects
          </motion.h2>
          <motion.p
            transition={transition}
            variants={variants}
            className="w-2/3"
          >
            Step into my portfolio of projects, where ideas come to life through
            thoughtful design and cutting-edge technology
          </motion.p>
        </motion.div>

        <div className="w-full flex gap-10 py-10">
          {/* Left Side (Scrollable) */}
          <section className="hidden md:block md:flex-1 overflow-y-auto scrollbar-hide ">
            {cardDataSource.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className="h-[80vh] flex items-center justify-center flex-col gap-4"
              >
                <h2 className="text-4xl font-bold">{section.title}</h2>
                <p>{section.description}</p>
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex justify-center items-center font-semibold gap-2 text-skin-inverted"
                >
                  Visit Live Demo{" "}
                  <ExternalLink size={14} color="#4169e1" strokeWidth={1.5} />
                </a>
              </div>
            ))}
          </section>

          {/* Right Side (Sticky) */}
          <section className="w-full md:w-1/2 sticky top-24 h-[80vh] flex flex-col items-start justify-start bg-white rounded-lg">
            <div className="w-full h-[100vh] relative">
              <Image
                priority
                src={cardDataSource[activeSection].imageUrl}
                alt={`Image ${cardDataSource[activeSection].id}`}
                fill
                className="max-w-full max-h-full rounded-lg object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
