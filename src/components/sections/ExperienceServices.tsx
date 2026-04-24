"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    role: "PHP Developer Intern",
    company: "Mozzine Technologies, Narowal",
    date: "March 2026 - Present",
    desc: "Contributing to web application development, debugging, and backend functionality while gaining practical industry experience."
  },
  {
    role: "Full Stack App Developer",
    company: "Innovation Center, Al-Shifa Institute of Health Sciences, Narowal",
    date: "Oct 2025 – Feb 2026",
    desc: "Worked on full-stack mobile application development using modern technologies, collaborating on both frontend and backend components to build responsive and user-friendly apps."
  },
  {
    role: "Full Stack Website Developer",
    company: "Ehsaas Lab, Narowal",
    date: "Nov 2024 – Apr 2025",
    desc: "Developed and maintained full-stack websites, focusing on responsive design, backend integration, and improving overall user experience."
  }
];

export default function ExperienceServices() {
  return (
    <section id="experience" className="py-24 relative px-4 md:px-12 max-w-5xl mx-auto min-h-screen">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.6 }}
         className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full" />
      </motion.div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[var(--primary)] before:via-[var(--secondary)] before:to-transparent">
        {experienceData.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className={`relative flex items-center justify-between md:justify-normal group ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline node */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0B0F19] bg-[var(--primary)] shadow-[0_0_20px_rgba(108,99,255,0.8)] md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shrink-0 z-10 transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(108,99,255,1)]" />
            
            {/* Content Box */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] glass p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/40 hover:shadow-[0_0_40px_rgba(108,99,255,0.1)] transition-all duration-500 group-hover:-translate-y-2`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-[var(--secondary)] uppercase tracking-[0.2em] px-4 py-1.5 bg-white/5 rounded-full border border-white/5">
                  {exp.date}
                </span>
              </div>
              
              <h3 className="font-space font-bold text-2xl text-white group-hover:text-[var(--primary)] transition-colors duration-300">
                {exp.role}
              </h3>
              
              <h4 className="text-md font-medium text-gray-400 mt-1 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] opacity-50 transition-colors group-hover:opacity-100" />
                {exp.company}
              </h4>
              
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent mb-6 rounded-full group-hover:w-24 transition-all duration-500" />
              
              <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
