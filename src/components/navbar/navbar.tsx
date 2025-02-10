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

import "./Navbar.scss";
import Image from "next/image";
import Submenu from "./submenu/submenu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
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
          <Separator orientation="vertical" className="text-slate-200 " />
          <div className="hidden lg:flex">
            <Submenu />
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
            <Drawer>
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
                  <DrawerDescription>
                    <Submenu />
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
