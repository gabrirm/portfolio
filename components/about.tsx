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
        During my second year of pursuing a degree in{" "}
        <span className="font-medium">Marketing and Market Research</span>, I
        decided to pursue my passion for programming. I embarked on an
        additional academic endeavor and started a Bachelor&apos;s program on{" "}
        <span className="font-medium">Computer Engineering</span>.{" "}
        <br /> After completing my Marketing degree, I started my master&apos;s
        degree in <span className="font-medium">Data Science & Big Data</span>,
        which is something I am also passionate about.
      </p>
      

      <p>
      Currently, I am working as a DevOps Engineer at Deutsche Telekom.
      <br />
      I have gained experience with varios DevOps technologies such as <span className="font-medium">
          Docker, Kubernetes, Jenkins, Ansible, Terraform, Git, Azure, etc.
        </span>
      </p>
      
      <p className="mt-5">
        My core development stack is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js and MongoDB.
        </span>
      </p>
    
    </motion.section>
  );
}
