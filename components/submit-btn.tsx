import { FaPaperPlane } from "react-icons/fa";
import React from "react";
import { experimental_useFormStatus } from "react-dom";

type SubmitBtnProps = {
  children: React.ReactNode;
};

export default function SubmitBtn({ children }: SubmitBtnProps) {
  const { pending } = experimental_useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
          group flex items-center justify-center gap-2 
          h-[3rem] w-[8rem] bg-gray-900 text-white 
          rounded-full outline-none transition-all
          focus:scale-110 hover:scale-110 active:scale-105
          hover:bg-gray-950
          disabled:opacity-80 disabled:cursor-not-allowed
          disabled:scale-100 disabled:hover:scale-100
          dark:bg-white dark:bg-opacity-10
          dark:hover:bg-opacity-20
          "
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          <span>{children}</span>
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
