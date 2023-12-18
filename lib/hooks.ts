import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { create } from "zustand";

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { inView, ref } = useInView({ threshold });
  const { setActiveSection, timeOfLastScroll } = useActiveSection();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastScroll > 750)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastScroll, sectionName]);
  return { ref };
}
