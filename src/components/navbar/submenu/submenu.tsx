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
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("about")}
        onTouchEnd={() => scrollToSection("about")}
      >
        About
      </a>
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("experience")}
        onTouchEnd={() => scrollToSection("experience")}
      >
        Experience
      </a>
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("projects")}
        onTouchEnd={() => scrollToSection("projects")}
      >
        Projects
      </a>
      <a
        rel="noopener noreferrer nofollow"
        className="button-submenu"
        onClick={() => scrollToSection("content")}
        onTouchEnd={() => scrollToSection("content")}
      >
        Content
      </a>
    </span>
  );
};

export default Submenu;
