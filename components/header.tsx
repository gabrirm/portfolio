"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSection } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastScroll } =
    useActiveSection();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="
            fixed
            top-0
            left-1/2
            h-[4.5rem]
            w-full
            rounded-none
            border
          border-white
            border-opacity-40
          bg-white
            bg-opacity-80
            shadow-lg
            shadow-black/[0.03]
            backdrop-blur-[0.5rem]
            sm:top-6
            sm:h-[3.25rem]
            sm:w-[36rem]
            sm:rounded-full
            dark:bg-gray-950
            dark:border-black/40
            dark:bg-opacity-75
          
          "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="
            flex
            fixed
            top-[0.15rem]
            left-1/2
            h-12
            -translate-x-1/2
            py-2
            sm:top-[1.7rem]
            sm:h-[initial]
            sm:py-0
        "
      >
        <ul
          className="
            flex
            items-center
            justify-center
          "
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="
                h-3/4 flex items-center justify-center relative
              "
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastScroll(Date.now());
                }}
                className={clsx(
                  "flex w-full text-gray-600 items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-100",
                  {
                    "text-gray-950 dark:!text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-200 borderBlack drop-shadow-lg rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
