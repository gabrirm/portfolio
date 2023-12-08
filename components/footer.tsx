import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2023 by Gabriel Rodríguez. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with{" "}
        <a
          className="hover:text-gray-950 transition-all"
          href="https://reactjs.org/"
          target="_blank"
        >
          React,
        </a>{" "}
        <a
          className="hover:text-gray-950 transitiona-all"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js,
        </a>{" "}
        <a
          className="hover:text-gray-950 transition-all"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          TypeScript
        </a>{" "}
        and{" "}
        <a
          className="hover:text-gray-950 transition-all"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
