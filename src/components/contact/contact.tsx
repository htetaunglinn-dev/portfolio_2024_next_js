import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { Badge } from "../ui/badge";

const Contact = () => {
  return (
    <div
      id="content"
      className="h-[80vh] content__container flex flex-col justify-center items-center gap-4 text-center relative"
    >
      <Badge className="bg-skin-fill hover:bg-skin-button-muted">
        Contacts
      </Badge>
      <h2 className="text-gradient-gray font-bold text-5xl ">
        Let’s keep in touch
      </h2>
      <p className="w-2/3">
        I’d love to stay connected and hear from you! Whether you have a
        question, want to collaborate, or just say hello, feel free to reach
        out. You can contact me via email at{" "}
        <a
          href="mailto:htaunglin@gmail.com"
          className="text-skin-inverted font-semibold"
          rel="noopener noreferrer nofollow"
        >
          htaunglin@gmail.com
        </a>{" "}
        or connect with me on social media platforms. Looking forward to stay in
        touch!
      </p>

      <section className="content-logo flex gap-4 mt-10 ">
        <a
          href="https://www.linkedin.com/in/htet-aung-linn-51146923b/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <IoLogoLinkedin size={30} className="cursor-pointer" />
        </a>
        <a
          href="https://x.com/HTAUNGLINN1/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaSquareXTwitter size={30} className="cursor-pointer" />
        </a>
        <a
          href="https://web.facebook.com/HtetAg11/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaFacebookSquare size={30} className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/htetaunglinn-dev"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <FaSquareGithub size={30} className="cursor-pointer" />
        </a>
      </section>

      <p className="flex justify-center items-center absolute bottom-5 m-auto font-semibold">
        Created with passion by Htet Aung Linn <LuCopyright /> 2025
      </p>
    </div>
  );
};

export default Contact;
