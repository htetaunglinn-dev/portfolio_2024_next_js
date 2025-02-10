"use client";

import { IExperienceCard } from "@/components/model/experience.model";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  experienceDataSource: IExperienceCard[];
}

const ExperienceCard = ({ experienceDataSource }: ExperienceCardProps) => {
  return (
    <>
      {experienceDataSource.map((data) => (
        <section key={data.companyName} className="flex justify-between">
          <div className="flex justify-center items-center gap-4">
            <Image
              src={data.logoUrl}
              alt={data.companyName}
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
          </div>
          <div>
            <p className="text-sm">{data.expPeriod}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default ExperienceCard;
