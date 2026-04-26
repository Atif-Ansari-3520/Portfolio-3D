"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FloatingBackground from "./FloatingBackground";

const roles = ["APP DEVELOPER", "WEBSITE DEVELOPER", "PHP BACKEND DEVELOPER"];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, mounted]);

  // If not mounted, render a shell to match server-side HTML (avoids hydration mismatch)
  const content = (
    <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[var(--primary)] font-mono text-sm md:text-base tracking-widest uppercase mb-4"
      >
        Welcome to my portfolio..
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl sm:text-5xl lg:text-7xl font-space font-bold text-white mb-6 tracking-tight leading-tight"
      >
        Hi, I'm <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
          M.ATIF ANSARI
        </span>
      </motion.h1>

      <div className="h-14 md:h-16 mb-10 flex items-center justify-center">
        <span className="text-base sm:text-xl md:text-3xl text-gray-300 font-light mr-2 sm:mr-3 whitespace-nowrap">I AM</span>
        <span className="text-base sm:text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[var(--accent)] border-r-4 border-white pr-2 animate-pulse whitespace-nowrap min-w-[20px]">
          {mounted ? `"${text}"` : ""}
        </span>
      </div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.8 }}
         className="flex flex-wrap justify-center gap-4 mt-4"
      >
        <a href="#projects" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm sm:text-base font-medium backdrop-blur-md hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-300">
          View Projects
        </a>
        <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass text-white text-sm sm:text-base font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
          Contact Me
        </a>
      </motion.div>
    </div>
  );

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Layer: 3D Particles (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0 bg-[#0B0F19]">
        <FloatingBackground />
        {/* Soft blackout gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0B0F19]" />
      </div>

      {/* Video Layer: Fullscreen only on Mobile (Hidden on Desktop) */}
      <div className="absolute inset-0 z-[1] pointer-events-none lg:hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover opacity-60"
        >
          <source src="/images/hero-video-mobile.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay on mobile for text visibility */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Content Overlay */}
      {content}

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase text-shadow">Scroll</span>
        <ChevronDown className="text-gray-400 animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
