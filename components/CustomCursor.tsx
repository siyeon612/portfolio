"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let circleX = 0;
    let circleY = 0;

    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(
          ${mouseX - 4}px,
          ${mouseY - 4}px,
          0
        )`;
      }
    };

    const animateCircle = () => {
      circleX += (mouseX - circleX) * 0.12;
      circleY += (mouseY - circleY) * 0.12;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(
          ${circleX - 12}px,
          ${circleY - 12}px,
          0
        )`;
      }

      animationFrameId = requestAnimationFrame(animateCircle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animateCircle);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm md:block"
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-2 w-2 rounded-full bg-white md:block"
      />
    </>
  );
}