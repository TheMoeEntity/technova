"use client";
import { useIsHome } from "./useIsHome";

export const useNavigateTo = () => {
  const { isHome, push } = useIsHome();

  const createHandler = (eventName: string, callback?: () => void) => {
    return () => {
      if (!isHome) {
        push("/");
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent(eventName));
        }, 750);
      } else {
        window.dispatchEvent(new CustomEvent(eventName));
      }
      if (callback) callback();
    };
  };

  return { createHandler };
};
