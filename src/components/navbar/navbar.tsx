"use client";

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
  return (
    <div className="w-full bg-white/10 backdrop-blur-sm shadow-sm fixed top-0 left-0">
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
          <Button className="bg-skin-fill hover:bg-skin-button-muted hidden lg:block">
            Contact Me
          </Button>

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
