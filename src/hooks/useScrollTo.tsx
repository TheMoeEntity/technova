"use client";

import { useEffect } from "react";

export const useScrollTo = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  eventName: string
) => {
  useEffect(() => {
    const handleScrollToElement = () => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    };

    window.addEventListener(eventName, handleScrollToElement);
    return () => window.removeEventListener(eventName, handleScrollToElement);
  }, [containerRef]);
};
