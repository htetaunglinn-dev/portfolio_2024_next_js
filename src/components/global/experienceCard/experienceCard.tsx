"use client";

import { IExperienceCard } from "@/components/model/experience.model";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

interface ExperienceCardProps {
  experienceDataSource: IExperienceCard[];
}

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const ExperienceCard = ({ experienceDataSource }: ExperienceCardProps) => {
  return (
    <>
      {experienceDataSource.map((data) => (
        <motion.section
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.04 }}
          viewport={{ once: true }}
          key={data.companyName}
          className="flex justify-between"
        >
          <motion.div
            transition={transition}
            variants={variants}
            className="flex justify-center items-center gap-4"
          >
            <Image
              src={data.logoUrl}
              alt={data.alt}
              width={60}
              height={60}
              className=" rounded-full p-2 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            />
            <div>
              <a
                href={data.companyUrl}
                target="_blank"
                className="font-semibold flex gap-1 items-center"
                rel="noopener noreferrer nofollow"
              >
                {data.companyName}
                <ExternalLink size={14} color="#4169e1" strokeWidth={1.5} />
              </a>
              <p>{data.position}</p>
            </div>
          </motion.div>
          <div>
            <p className="text-sm">{data.expPeriod}</p>
          </div>
        </motion.section>
      ))}
    </>
  );
};

export default ExperienceCard;
