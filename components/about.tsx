"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my third year of pursuing a degree in{" "}
        <span className="font-medium">Marketing and Market Research</span>, I
        decided to pursue my passion for programming. I embarked on an
        additional academic endeavor and started a Bachelor&apos;s program on{" "}
        <span className="font-medium">Computer Engineering</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem.
        <br /> After completing my Marketing degree, I started my master&apos;s
        degree in <span className="font-medium">Data Science & Big Data</span>,
        which is something I am also passionate about.
      </p>

      <p>
        Combining my background in{" "}
        <span className="font-medium">
          Marketing, Web Development, and Data Science,
        </span>{" "}
        I&apos;m eager to contribute my unique blend of skills to engaging and
        challenging projects.
      </p>
      <p className="mt-5">
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js and MongoDB.
        </span>
      </p>
    </motion.section>
  );
}
