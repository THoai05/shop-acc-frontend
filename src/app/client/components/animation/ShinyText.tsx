"use client";

const ShinyText = ({
  text,
  disabled = false,
  speed = 3,
  className = "",
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`${disabled ? "" : "shiny-text"} ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: disabled ? undefined : `shine ${animationDuration} linear infinite`,
      }}
    >
      {text}

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;
