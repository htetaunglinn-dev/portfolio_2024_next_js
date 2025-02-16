"use client";

const Submenu = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
      <span
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("about")}
      >
        About
      </span>
      <span
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </span>
      <span
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </span>
      <span
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("content")}
      >
        Content
      </span>
    </span>
  );
};

export default Submenu;
