"use client";

import { motion } from "framer-motion";

export default function CandlestickBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        opacity: 0.35
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <motion.path
          d="M0 250 L100 220 L200 260 L300 180 L400 210 L500 150 L600 200 L700 140 L800 170 L900 120 L1000 160 L1100 110 L1200 130"
          fill="transparent"
          stroke="#22c55e"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.path
          d="M0 300 L100 310 L200 280 L300 320 L400 260 L500 290 L600 240 L700 270 L800 230 L900 260 L1000 220 L1100 250 L1200 210"
          fill="transparent"
          stroke="#ef4444"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
}