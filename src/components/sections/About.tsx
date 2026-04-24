"use client";

import { motion } from "framer-motion";

const focusTags = [
  "Full-Stack Development",
  "Clean Code",
  "Real-World Projects",
  "Performance",
  "User Experience",
  "Best Practices",
  "Problem Solving",
  "Continuous Learning"
];

export default function About() {
  return (
    <section id="about" className="py-24 relative px-4 md:px-12 max-w-7xl mx-auto min-h-screen flex items-center">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">
        
        {/* LEFT COLUMN: Narrative */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-space font-bold mb-10 tracking-tighter text-white">
            ABOUT <span className="opacity-50">ME</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
             <p>
                I'm a <span className="text-white font-bold">Full Stack Developer</span> and a <span className="text-white font-bold">6th Semester Software Engineering</span> student based in <span className="text-white font-bold">Narowal,Punjab</span>, Pakistan. I'm still learning and improving my skills by building small projects and exploring modern web technologies.
             </p>
             <p>
                I enjoy turning ideas into <span className="text-white font-bold">real applications</span> and focus on writing <span className="text-white font-bold">clean code</span> while creating smooth and user-friendly experiences.
             </p>
          </div>

          <div className="mt-10 flex items-center gap-3">
             <div className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </div>
             <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">Available For Work</span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Details */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col gap-12"
        >
          {/* Currently Section */}
          <div>
            <h4 className="text-lg font-mono text-[var(--primary)] uppercase tracking-[0.3em] mb-6">Currently</h4>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-space font-bold text-white">
                Bachelor's in Software Engineering
              </h3>
              <p className="text-gray-400 text-lg">
                @ Alshifa Institute of health sciences , Narowal.
              </p>
              <p className="text-sm text-gray-500 font-mono mt-2">
                2023 — Present
              </p>
            </div>
          </div>

          {/* My Focus Section */}
          <div>
            <h4 className="text-lg font-mono text-[var(--secondary)] uppercase tracking-[0.3em] mb-6">My Focus</h4>
            <div className="flex flex-wrap gap-3">
              {focusTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.05) }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                  className="px-5 py-2.5 rounded-full glass text-sm font-medium transition-all cursor-default text-gray-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
