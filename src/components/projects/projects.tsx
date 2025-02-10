"use client";

import { Badge } from "../ui/badge";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Projects = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const cardDataSource = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739114790/Portfolio%20Next%20JS%202025/project/pexels-114877721-27940302_vfsncw.jpg",
      title: "",
      description: "",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739114789/Portfolio%20Next%20JS%202025/project/pexels-114877721-28544350_g4ocxk.jpg",
      title: "",
      description: "",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/htetaunglinn-dev/image/upload/v1739114789/Portfolio%20Next%20JS%202025/project/pexels-114877721-28544353_akbtuy.jpg",
      title: "",
      description: "",
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
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <div className="content__container flex flex-col justify-center items-center gap-4 text-center">
        <Badge className="bg-skin-fill hover:bg-skin-button-muted">Art</Badge>
        <h2 className="text-5xl font-bold">Selected Projects</h2>
        <p className="w-2/3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ut
          tempore fugiat consequuntur temporibus. Accusantium dignissimos sunt
          sequi temporibus tenetur?
        </p>

        <div className="w-full flex gap-10 py-10">
          {/* Left Side (Scrollable) */}
          <section className="hidden md:block md:flex-1 overflow-y-auto scrollbar-hide ">
            {cardDataSource.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className="h-[80vh] flex items-center justify-center "
              >
                <h2 className="text-4xl font-bold">Project {section.id}</h2>
              </div>
            ))}
          </section>

          {/* Right Side (Sticky) */}
          <section className="w-full md:w-1/2 sticky top-24 h-[80vh] flex flex-col items-start justify-start bg-white rounded-lg shadow-2xl shadow-blue-500/20">
            <div className="w-full h-[40vh] relative">
              <Image
                src={cardDataSource[activeSection].imageUrl}
                alt={`Image ${cardDataSource[activeSection].id}`}
                fill
                className="max-w-full max-h-full rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 p-5 text-left flex flex-col gap-4">
              <h3 className="text-gradient-gray text-3xl font-semibold">{`Project ${cardDataSource[activeSection].id}`}</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis illum perspiciatis non adipisci? Sint autem rerum
                soluta, at, quia neque voluptates, sed maiores aliquid
                dignissimos mollitia fugiat corrupti non quaerat!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
