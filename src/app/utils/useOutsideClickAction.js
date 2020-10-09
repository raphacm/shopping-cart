import { useEffect } from "react";

export function useOutsideClickAction(ref, action) {
  useEffect(() => {

      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            action()
          }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}