"use client";
import React, { ReactNode, useEffect, useRef } from "react";

interface GradientTextProps {
  children: ReactNode;
  colors?: string[];        // Mảng màu gradient
  animationSpeed?: number;  // Thời gian chạy animation (giây)
  className?: string;
}

export default function GradientText({
  children,
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  className = "",
}: GradientTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    let pos = 0;
    const step = 1; // tốc độ thay đổi % mỗi frame
    const interval = setInterval(() => {
      pos += step;
      if (pos > 100) pos = 0;
      textRef.current!.style.backgroundPosition = `${pos}% 50%`;
    }, (animationSpeed * 10)); // điều chỉnh tốc độ
    return () => clearInterval(interval);
  }, [animationSpeed]);

  return (
    <div
      ref={textRef}
      className={`bg-clip-text text-transparent inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </div>
  );
}
