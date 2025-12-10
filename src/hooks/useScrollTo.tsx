"use client";

import { useEffect } from "react";

export const useScrollTo = (
  containerRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    const handleScrollToElement = () => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    window.addEventListener("scrollToElement", handleScrollToElement);
    return () =>
      window.removeEventListener("scrollToElement", handleScrollToElement);
  }, [containerRef]);
};
