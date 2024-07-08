"use client";

import React, { ReactNode, useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  hiddenUp: { opacity: 0, scale: 0.8, y: 50 },
  hiddenDown: { opacity: 0, scale: 0.8, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrollDirection(scrollY > lastScrollY ? "down" : "up");
          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={scrollDirection === "up" ? "hiddenUp" : "hiddenDown"}
      animate={isInView ? "visible" : scrollDirection === "up" ? "hiddenUp" : "hiddenDown"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
