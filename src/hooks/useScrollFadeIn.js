import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Returns ref + Chakra style props for a one-time scroll-triggered fade-up.
 */
const useScrollFadeIn = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
    },
  };
};

export default useScrollFadeIn;
