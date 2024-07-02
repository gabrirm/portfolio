"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import profile from "@/public/profile.png";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSection } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.25);
  const { setActiveSection, setTimeOfLastScroll } = useActiveSection();
  return (
    <section
      id="home"
      ref={ref}
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-10 md:mt-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profile}
              alt="Gabriel's profile picture"
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full
            object-cover border-[0.35rem] border-white
            shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute -bottom-0.5 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Gabriel.</span> <br />{" "}
        I&apos;m a <span className="font-bold">DevOps Engineer with a strong interest in</span> and a{" "}
        <span className="font-bold">Data Science and Software Development</span>. <br />
        Firmly grounded in these fields, I bring a unique blend of{" "}
        <span className="font-bold italic">
          analytical and technical skills
        </span>{" "}
        to tackle <span className="font-bold">complex problems</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 
          flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110
          hover:bg-gray-950 active:scale-105 transition group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastScroll(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV-ENG.pdf"
          download
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition group cursor-pointer borderBlack
          dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabrirm"
          target="_blank"
          className="bg-white p-4 text-[1.15rem] text-gray-700 flex items-center 
          gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
          active:scale-105 transition group cursor-pointer borderBlack
          hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/gabrirm"
          target="_blank"
          className="bg-white p-4 text-[1.35rem] text-gray-700 flex items-center 
          gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
          active:scale-105 transition group cursor-pointer hover:text-gray-950
          borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
