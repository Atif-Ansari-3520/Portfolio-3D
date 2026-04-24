"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const socialLinks = [
  {
    title: "LinkedIn",
    handle: "M.ATIF_ANSARI",
    url: "https://www.linkedin.com/in/muhammad-atif-ansari-843396322",
  },
  {
    title: "GitHub",
    handle: "M.ATIF_ANSARI",
    url: "https://github.com/Atif-Ansari-3520",
  },
  {
    title: "Instagram",
    handle: "M.ATIF_ANSARI",
    url: "https://www.instagram.com/atif_ansari__7274",
  },
  {
    title: "WhatsApp",
    handle: "M.ATIF_ANSARI",
    url: "https://wa.me/923352062100",
  },
];

export default function ContactFooter() {
  return (
    <>
      <section id="contact" className="py-24 relative px-4 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* Left Column: Typography & Basic Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col"
          >
            <div className="space-y-0 mb-8 overflow-hidden">
               <motion.h2 
                 initial={{ y: 80 }}
                 whileInView={{ y: 0 }}
                 transition={{ duration: 0.8, ease: "circOut" }}
                 className="text-6xl md:text-8xl font-space font-light text-white tracking-tighter leading-none flex items-center"
               >
                 LE<span className="relative">T<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white rounded-full opacity-40"></span></span>'S
               </motion.h2>
               <motion.h2 
                 initial={{ y: 80 }}
                 whileInView={{ y: 0 }}
                 transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
                 className="text-6xl md:text-8xl font-space font-bold text-gray-500/30 tracking-tighter leading-none"
               >
                 CONNECT.
               </motion.h2>
            </div>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-12"
            >
              Always interested in new opportunities, collaborations, and conversations about technology and design.
            </motion.p>

            <motion.a 
               href="mailto:atifansari7274@gmail.com"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="group flex items-center gap-3 text-lg md:text-xl text-white font-medium hover:text-[var(--primary)] transition-colors w-fit"
            >
              atifansari7274@gmail.com 
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </motion.a>
          </motion.div>

          {/* Right Column: Grid of Links */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col"
          >
            <span className="text-xl font-space font-extrabold text-white uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-[var(--primary)] animate-pulse"></span>
              CLICK TO DIRECT MESSAGE
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-[#0E121C] border border-white/5 rounded-2xl flex flex-col gap-1 hover:bg-white/[0.03] hover:border-white/10 transition-all group"
                >
                  <span className="text-white text-lg font-space font-bold group-hover:text-[var(--primary)] transition-colors">
                    {link.title}
                  </span>
                  <span className="text-gray-600 text-xs font-mono tracking-wider">
                    {link.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-mono tracking-[0.4em] uppercase" suppressHydrationWarning>
            © {new Date().getFullYear()} M. ATIF ANSARI
          </p>
          <div className="text-gray-700 text-[9px] font-mono uppercase tracking-[0.5em]">
            Software Engineer / Full Stack Developer
          </div>
        </div>
      </footer>
    </>
  );
}
