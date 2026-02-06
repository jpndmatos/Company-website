import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0.16,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const screenThresholds = {
      large: 0.36,
      medium: 0.26,
      small: 0.16,
    };
    
    const screenSize = getScreenSize();
    const screenThreshold = screenThresholds[screenSize];

    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

function getScreenSize() {
  return getScreenSizeFromMediaQueries();
}

function getScreenSizeFromMediaQueries() {
  if (window.matchMedia("(min-width: 1025px)").matches) {
    return "large";
  } else if (window.matchMedia("(min-width: 769px)").matches) {
    return "medium";
  } else {
    return "small";
  }
}
