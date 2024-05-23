"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "careers",
    url: "/careers",
  },
  {
    title: "contact",
    url: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(false);
  // console.log(showNav);

  return (
    <>
      <header className="h-fit backdrop-blur-sm z-50 top-0 left-0 shadow-sm shadow-black/30 fixed w-full bg-white/90">
        <nav className="flex relative w-full justify-between items-center container">
          <button>
            <img
              src="https://unfluke.in/static/media/UNFLUKE%20-01.b7e8c772.png"
              alt="logo"
              className="w-[12rem]"
            />
          </button>
          <AnimatePresence>
            {!showNav ? (
              <button onClick={() => setShowNav(true)}>
                <motion.i
                  whileTap={{ opacity: 0 }}
                  className="fi fi-sr-menu-burger sm:hidden"
                />
              </button>
            ) : (
              <button onClick={() => setShowNav(false)}>
                <motion.i
                  whileTap={{ opacity: 0, rotate: 0 }}
                  className="fi fi-sr-cross sm:hidden"
                />
              </button>
            )}
          </AnimatePresence>
          <ul
            className={`${
              showNav ? "h-screen p-8" : "p-0 h-0 overflow-hidden"
            } flex absolute items-center gap-4 flex-col right-0 top-full bg-white sm:p-0 w-full sm:w-auto sm:bg-inherit sm:h-auto sm:flex-row sm:relative`}
          >
            {links.map((l, i) => (
              <li
                key={i}
                className={`${
                  pathname == l.url ? "nav-link-active" :  "nav-link"
                }`}
              >
                <a href={l.url}>{l.title}</a>
              </li>
            ))}
            <button className="btn-primary-sm">log In</button>
          </ul>
        </nav>
      </header>
      <div className="pt-[5rem] sm:pt-[5rem] bg-transparent relative md:pt-[7rem]" />
    </>
  );
};

export default Header;
