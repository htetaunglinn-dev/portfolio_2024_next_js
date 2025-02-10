"use client";

import Image from "next/image";
import ExperienceCard from "../global/experienceCard/experienceCard";
import { IExperienceCard } from "../model/experience.model";

const Experience = () => {
  const experienceDataSource: IExperienceCard[] = [
    {
      logoUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739081714/Portfolio%20Next%20JS%202025/logo/1.png",
      companyName: "Smilax Global",
      companyUrl: "https://smilaxglobal.com/",
      expPeriod: "Mar 2022 - Feb 2023",
      position: "Frontend Developer",
    },
    {
      logoUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739081714/Portfolio%20Next%20JS%202025/logo/2.png",
      companyName: "ThitsaWorks",
      companyUrl: "https://www.thitsaworks.com/",
      expPeriod: "Apr 2023 - Jan 2024",
      position: "Frontend Developer",
    },
    {
      logoUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739081714/Portfolio%20Next%20JS%202025/logo/3.png",
      companyName: "GoFive",
      companyUrl: "https://www.gofive.co.th/",
      expPeriod: "Jan 2024 - Current",
      position: "Frontend Developer",
    },
  ];

  return (
    <div className="pb-48">
      <div className="content__container flex flex-col lg:flex-row gap-10 bg-white rounded-lg px-6 py-6 shadow-2xl shadow-blue-500/20">
        <section className="w-full max-w-[45%] flex-1 relative">
          <Image
            priority
            src="https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739075872/Portfolio%20Next%20JS%202025/experience-card.jpg"
            alt="experience card"
            fill
            className="object-cover rounded-md"
          />
        </section>
        <section className="flex-1 space-y-8">
          <h2 className="font-bold text-3xl text-gradient-gray w-fit">
            Work Experience
          </h2>
          <ul className="flex flex-col gap-5">
            <li>
              I started my career as a{" "}
              <span className="font-semibold">Frontend Developer </span>at{" "}
              <span className="font-semibold">Smilax Global </span> in Yangon,
              Myanmar, where I built HR software, CMS platforms, and asset
              management systems, eventually earning a promotion to{" "}
              <span className="font-semibold">
                Mid-Level Frontend Developer.
              </span>{" "}
            </li>
            <li>
              I then contributed to the{" "}
              <span className="font-semibold">Mojaloop Foundation </span> at{" "}
              <span className="font-semibold">ThitsaWorks</span>, working on
              microfinance and payment portal solutions.
            </li>
            <li>
              Currently, at <span className="font-semibold">GoFive</span> in
              Bangkok, Thailand, I’m developing the{" "}
              <span className="font-semibold">Venio Project</span>, a CMS
              platform, where I continue to create seamless and user-friendly
              experiences.
            </li>
          </ul>
          <ExperienceCard experienceDataSource={experienceDataSource} />
        </section>
      </div>
    </div>
  );
};

export default Experience;
