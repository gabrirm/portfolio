"use server";

import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_APY_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const from = formData.get("senderEmail");

  if (
    !message ||
    !from ||
    typeof message !== "string" ||
    typeof from !== "string"
  ) {
    return {
      error: "Invalid form data",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "aseohd1@gmail.com",
      subject: "Message from portfolio",
      reply_to: from,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail: from,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
