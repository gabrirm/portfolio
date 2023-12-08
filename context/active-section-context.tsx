"use client";
import React, { createContext, useState } from "react";
import type { links } from "@/lib/data";
import { SectionName } from "@/lib/types";

type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastScroll: number;
  setTimeOfLastScroll: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastScroll, setTimeOfLastScroll] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastScroll,
        setTimeOfLastScroll,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = React.useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
