"use client";

import { Home, User, Code2, Briefcase, Mail, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 glass px-8 py-4 items-center justify-between transition-all duration-300 border-b border-white/5 shadow-2xl">
        <div className="flex items-center gap-3">
          <div 
            onClick={() => setIsPreviewOpen(true)}
            className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer hover:border-[var(--primary)]/50 hover:scale-105 transition-all"
          >
            <Image 
              src="/images/profile-current.jpg" 
              alt="M. ATIF ANSARI" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="font-space font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
            M. ATIF ANSARI.
          </div>
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Link
             href="#contact"
             className="px-6 py-2.5 rounded-full glass-dark text-white text-sm font-medium hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/50 transition-all shadow-[0_0_15px_rgba(108,99,255,0.1)]"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50 glass rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl border border-white/10">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href; // Note: Simple anchor detection might require intersection observer for true active state, using basic matching here
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-[var(--primary)]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px]">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Full Screen Image Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setIsPreviewOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[101]"
              onClick={() => setIsPreviewOpen(false)}
            >
              <X size={24} />
            </motion.button>

            {/* Image Preview */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[90vw] md:w-[50vw] max-w-2xl aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image
            >
              <Image 
                src="/images/profile-current.jpg" 
                alt="M. ATIF ANSARI Preview" 
                fill 
                className="object-cover" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
