"use client";

import { usePathname, useRouter } from "next/navigation";

export const useIsHome = () => {
  const currPath = usePathname();
  const isHome = currPath === "/";
  const { push } = useRouter();
  return { isHome, push };
};
