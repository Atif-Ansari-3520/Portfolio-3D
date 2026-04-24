"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: { name: string; icon?: React.ReactNode; image?: string; color?: string }[];
  direction?: "left" | "right";
  speed?: number;
}

export default function InfiniteMarquee({ items, direction = "left", speed = 20 }: MarqueeProps) {
  return (
    <div className="flex overflow-hidden py-10 select-none group">
      <motion.div
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap shrink-0 gap-8"
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/5 hover:border-white/20 transition-all duration-300"
          >
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-12 h-12 object-contain rounded-md" 
              />
            ) : (
              <div className="text-white" style={{ color: item.color }}>
                {item.icon}
              </div>
            )}
            <span className="text-white font-space font-medium tracking-wide whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
