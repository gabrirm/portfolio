import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { inView, ref } = useInView({ threshold });
  const { setActiveSection, timeOfLastScroll } = useActiveSection();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastScroll > 750)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastScroll, sectionName]);
  return { ref };
}
