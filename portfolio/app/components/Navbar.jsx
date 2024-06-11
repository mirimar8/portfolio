"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#252526] bg-opacity-100 shadow-xl">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10">
        <Link href={"/"} className="">
          <Image
            src="/images/logo.png"
            alt="Miri logo"
            width={120}
            height={120}
            className="w-full h-full top-0 left-0"
          />
        </Link>
        <div className="mobile-menu block md:hidden ">
          {navbarOpen ? (
            <button 
            onClick={() => setNavbarOpen(false)}
            className="flex items-center text-slate-200 border rounded px-2 py-2">
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button 
            onClick={() => setNavbarOpen(true)}
            className="flex items-center text-slate-200 border rounded px-2 py-2">
                <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-row px-4 space-x-8 text-xl">
            {navLinks.map((link, index) => (
              <li key={index} className="text-white hover:shadow-[#DC2424] hover:text-shadow-lg">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;
