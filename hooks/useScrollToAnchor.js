"use client";
import { useEffect } from "react";

const useScrollToAnchor = (verticalSpace = 20) => {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const { target } = event;
      if (
        target.tagName === "A" &&
        target.getAttribute("href").startsWith("#")
      ) {
        const targetId = target.getAttribute("href").substring(1); // Remove '#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          event.preventDefault();

          const headerHeight = document.querySelector("header").offsetHeight;
          const targetOffset =
            targetElement.offsetTop - headerHeight - verticalSpace;

          // Smooth scroll to the target offset
          window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [verticalSpace]);
};

export default useScrollToAnchor;