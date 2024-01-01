"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { PiArrowSquareUpRightFill } from "react-icons/pi";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { ref: refSection } = useSectionInView("Projects");
  return (
    <motion.div
      className="mb-3 sm:mb-8 last:mb-0 group"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <section
        ref={refSection}
        className="
        bg-gray-100
        max-w-[42rem]
        border border-black/5
        overflow-hidden
        sm:pr-8
        relative
        sm:h-[20rem]
        hover:bg-gray-200
        transition
        rounded-lg
        sm:group-even:pl-8
        dark:bg-white/10
        dark:hover:bg-white/20
        dark:text-white
    "
      >
        <div
          className="
        pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 
        sm:max-w-[50%] flex flex-col h-full
        sm:group-even:ml-[18rem]
      "
        >
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <Link
            className="
            text-xs mt-3 flex items-center gap-1 rounded-full mb-3 w-[max-content]
            font-semibold underline hover:no-underline transition ease-in-out
            "
            href={url}
            target="_blank"
          >
            Check it out{" "}
            <span>
              <PiArrowSquareUpRightFill className="text-md" />
            </span>
          </Link>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="
            bg-black/[0.7] px-3 py-1 text-[0.7rem]
            uppercase tracking-wider text-white
            rounded-full dark:text-white/70
            "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="
        hidden sm:block
        absolute top-8 -right-40 w-[28.25rem]
        h-[20rem] object-cover 
        rounded-t-lg shadow-2xl
        group-even:right-[initial] group-even:-left-40
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-hover:scale-[1.04]
        transition
        "
        />
      </section>
    </motion.div>
  );
}
