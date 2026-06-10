import { useEffect, useState } from "react";

type Props = {
  items: string[];
  intervalMs?: number;
  className?: string;
};

export function RotatingText({ items, intervalMs = 2200, className = "" }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  const current = items[index];

  return (
    <span
      className={`relative inline-block align-baseline overflow-hidden ${className}`}
      style={{ minHeight: "1.1em" }}
    >
      <span key={index} className="inline-block" aria-live="polite">
        {current.split("").map((ch, i) => (
          <span
            key={`${index}-${i}`}
            className="inline-block animate-fade-up opacity-0"
            style={{
              animationDelay: `${i * 35}ms`,
              animationFillMode: "forwards",
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}
