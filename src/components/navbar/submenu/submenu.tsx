"use client";

const Submenu = () => {
  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <span className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        href="#about"
        // onClick={() => scrollToSection("about")}
      >
        About
      </a>
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        href="#experience"
        // onClick={() => scrollToSection("experience")}
      >
        Experience
      </a>
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        href="#projects"
        // onClick={() => scrollToSection("projects")}
      >
        Projects
      </a>
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        href="#content"
        // onClick={() => scrollToSection("content")}
      >
        Content
      </a>
    </span>
  );
};

export default Submenu;
