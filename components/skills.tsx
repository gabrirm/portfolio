"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeIAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-60 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className=" flex flex-wrap gap-3 justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeIAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="
                flex flex-col items-center
                bg-white rounded-xl shadow-md
                border border-black/[0.1] px-2 py-1.5
          "
          >
            <div className="flex flex-col items-center">
              <Image
                src={skill.image}
                alt={skill.name}
                height={16}
                width={16}
              />
              <span className="text-sm">{skill.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
