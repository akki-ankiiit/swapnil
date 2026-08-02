import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const outerSpringConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const outerCursorXSpring = useSpring(cursorX, outerSpringConfig);
  const outerCursorYSpring = useSpring(cursorY, outerSpringConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
      }
    };
    checkMobile();

    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ink/40 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: outerCursorXSpring,
          y: outerCursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(243, 240, 235, 0.8)" : "rgba(243, 240, 235, 0.4)",
        }}
        transition={{
          duration: 0.15,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-porcelain pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.15,
        }}
      />
    </>
  );
}
