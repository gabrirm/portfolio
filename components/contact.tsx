"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a href="mailto:gabrirm00@gmail.com" className="underline">
          gabrirm00@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
        }}
        className="mt-6 flex flex-col"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack outline-none focus:outline-gray-300"
          type="email"
          placeholder="Your email"
          required
          name="senderEmail"
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4 outline-none focus:outline-gray-300"
          name="message"
          id=""
          required
        ></textarea>
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </motion.section>
  );
}
