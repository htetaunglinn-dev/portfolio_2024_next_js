"use client";

import { IExperienceCard } from "@/components/model/experience.model";
import { ExternalLink } from "lucide-react";
import { transition, variants } from "@/constants/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  experienceDataSource: IExperienceCard[];
}

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
              <Link
                href={data.companyUrl}
                target="_blank"
                className="font-semibold flex gap-1 items-center"
                rel="noopener noreferrer nofollow"
              >
                {data.companyName}
                <ExternalLink size={14} color="#4169e1" strokeWidth={1.5} />
              </Link>
              <p>{data.position}</p>
            </div>
          </motion.div>
          <motion.div transition={transition} variants={variants}>
            <p className="text-sm">{data.expPeriod}</p>
          </motion.div>
        </motion.section>
      ))}
    </>
  );
};

export default ExperienceCard;
