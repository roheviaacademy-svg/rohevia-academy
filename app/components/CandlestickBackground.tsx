"use client";

import { motion } from "framer-motion";

const candles = Array.from({ length: 40 });

export default function CandlestickBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {candles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            width: "3px",
            height: `${40 + Math.random() * 80}px`,
            background:
              Math.random() > 0.5 ? "#22c55e" : "#ef4444",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}