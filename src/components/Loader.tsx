"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress counter logic simulating asset load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; 
      });
    }, 150);

    // Fade out exactly after 2.5 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const nameLetters = "M.ATIF".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          // The container fades out entirely at the *end* of the children animations
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
          exit={{ opacity: 0, transition: { delay: 1, duration: 0.1 } }}
        >
          {/* Top Curtain */}
          <motion.div 
             className="absolute top-0 left-0 w-full h-1/2 bg-[#0B0F19] z-10 blur-[1px]"
             exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          />

          {/* Bottom Curtain */}
          <motion.div 
             className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0B0F19] z-10 blur-[1px]"
             exit={{ y: "100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          />

          {/* Inner Loader & Progress Container */}
          <motion.div 
            className="relative z-20 flex flex-col items-center"
            // Explosive cinematic scaleout & blur when loader finishes!
            exit={{ 
              scale: 2.5, 
              opacity: 0, 
              filter: "blur(20px)", 
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
          >
            {/* Modern Premium Orbiting Loader Graphic */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
               {/* Pulsing Core */}
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_5px_var(--primary)]"
               />
               
               {/* Outer Fast Ring */}
               <motion.div 
                 className="absolute inset-0 rounded-full border-t-2 border-b-2 border-r-transparent border-l-transparent border-[var(--primary)] opacity-80"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               />

               {/* Middle Offset Ring */}
               <motion.div 
                 className="absolute inset-3 rounded-full border-l-2 border-r-2 border-t-transparent border-b-transparent border-[var(--secondary)]"
                 animate={{ rotate: -360 }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
               />

               {/* Inner Dotted Sci-Fi Ring */}
               <motion.div 
                 className="absolute inset-6 rounded-full border border-dashed border-white/50"
                 animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center w-full"
            >
               {/* Progress Hologram Text */}
               <h2 className="text-[var(--primary)] font-mono text-xl tracking-[0.2em] mb-4 font-bold drop-shadow-[0_0_10px_var(--primary)]">
                 {Math.min(progress, 100)}%
               </h2>
               
               {/* Clean, Modern Line Bar */}
               <div className="w-56 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                  <motion.div 
                     className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-[0_0_15px_var(--accent)]"
                     animate={{ width: `${Math.min(progress, 100)}%` }}
                     transition={{ ease: "linear" }}
                  />
               </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
