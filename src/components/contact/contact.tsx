import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { Badge } from "../ui/badge";

const Contact = () => {
  return (
    <div className="h-[80vh] content__container flex flex-col justify-center items-center gap-4 text-center relative">
      <Badge className="bg-skin-fill hover:bg-skin-button-muted">
        Contacts
      </Badge>
      <h2 className="text-gradient-gray font-bold text-5xl ">
        Let`s keep in touch
      </h2>
      <p className="w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        ducimus quasi odio nisi. Reiciendis perspiciatis quae atque facilis
        explicabo voluptas, dolore necessitatibus vero autem voluptatem?
      </p>

      <section className="content-logo flex gap-4 mt-10 ">
        <IoLogoLinkedin size={30} className="cursor-pointer" />
        <FaSquareXTwitter size={30} className="cursor-pointer" />
        <FaFacebookSquare size={30} className="cursor-pointer" />
        <FaSquareGithub size={30} className="cursor-pointer" />
      </section>

      <p className="flex justify-center items-center absolute bottom-5 m-auto font-semibold">
        Created with passion by Htet Aung Linn <LuCopyright /> 2025
      </p>
    </div>
  );
};

export default Contact;
