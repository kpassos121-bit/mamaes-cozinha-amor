import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const [items] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -20,
    })),
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[var(--gold)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.6,
            boxShadow: "0 0 8px var(--gold)",
          }}
          animate={{ y: [0, -60, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
