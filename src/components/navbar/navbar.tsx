import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import "./Navbar.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-lg shadow-sm">
      <nav className="w-full lg:w-[80%] m-auto px-8 py-4  flex justify-between items-center">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <Image
            src="/logo-black.svg"
            width={30}
            height={30}
            alt="logo black"
          />
          <Separator orientation="vertical" />
          <a className="cursor-pointer">Home</a>
          <a className="cursor-pointer">About</a>
          <a className="cursor-pointer">Portfolio</a>
          <a className="cursor-pointer">Content</a>
          <a className="cursor-pointer">FAQ</a>
        </div>

        <div>
          <Button>Contact Me</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
