"use client";

const Submenu = () => {
  return (
    <span className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
      <a rel="noopener noreferrer nofollow" className="button-submenu">
        Home
      </a>
      <a rel="noopener noreferrer nofollow" className="button-submenu">
        About
      </a>
      <a rel="noopener noreferrer nofollow" className="button-submenu">
        Experience
      </a>
      <a rel="noopener noreferrer nofollow" className="button-submenu">
        Portfolio
      </a>
      <a rel="noopener noreferrer nofollow" className="button-submenu">
        Content
      </a>
    </span>
  );
};

export default Submenu;
