"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const NAV_ITEMS = [
    { title: "About", link: "#about" },
    { title: "Experience", link: "#experience" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 30) {
        // Always show the navbar when at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openEmail = () => {
    window.location.href = "mailto:htaunglin@gmail.com";
  };

  const handleLinkClick = (link: string) => {
    const targetId = link.substring(1);
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        if ("scrollBehavior" in document.documentElement.style) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          targetElement.scrollIntoView();
        }
      }
    }, 100);
    setIsDrawerOpen(false);
  };

  return (
    <div
      className={`w-full bg-white/10 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="content__container  flex justify-between items-center">
        <section className="flex h-5 items-center space-x-4 text-sm">
          <Image
            src="/david-logo.svg"
            width={100}
            height={100}
            alt="logo black"
          />
          <Separator
            orientation="vertical"
            className="text-slate-200 hidden lg:block"
          />
          <div className="hidden lg:flex items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="button-submenu"
                onClick={() => handleLinkClick(item.link)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="navbar__btn--right flex gap-3">
            <Button
              className="bg-skin-fill hover:bg-skin-button-muted hidden lg:block dark:text-white"
              onClick={openEmail}
            >
              Get In Touch
            </Button>
          </div>

          <div className="lg:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <Button
                  size="icon"
                  className="bg-skin-fill hover:bg-skin-button-muted"
                >
                  <Image
                    src="/menu.png"
                    alt="menu"
                    width={20}
                    height={20}
                  ></Image>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerTitle></DrawerTitle>
                <DrawerHeader>
                  <DrawerDescription className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 text-xl lg:text-sm font-bold lg:font-normal">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        className="w-full button-submenu"
                        key={item.title}
                        href={item.link}
                        onClick={() => handleLinkClick(item.link)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
