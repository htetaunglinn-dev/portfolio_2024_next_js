"use client";

import Link from "next/link";

const Submenu = () => {
  const NAV_ITEMS = [
    { title: "About", link: "#about" },
    { title: "Experience", link: "#experience" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <span className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
      {NAV_ITEMS.map((item) => (
        <Link key={item.title} href={item.link} className="button-submenu">
          {item.title}
        </Link>
      ))}
    </span>
  );
};

export default Submenu;
