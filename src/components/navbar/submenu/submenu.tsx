"use client";

const Submenu = () => {
  return (
    <span className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
      <a className="button-submenu">Home</a>
      <a className="button-submenu">About</a>
      <a className="button-submenu">Portfolio</a>
      <a className="button-submenu">Content</a>
      <a className="button-submenu">FAQ</a>
    </span>
  );
};

export default Submenu;
