"use client";

import { motion } from "framer-motion";
import InfiniteMarquee from "../InfiniteMarquee";
import { 
  Code2, Layout, Wind, Binary, 
  Smartphone, AppWindow, Server, Cpu,
  Database, HardDrive, Flame, Zap,
  GitBranch, Monitor, Box, Send
} from "lucide-react";

const skillsData = [
  {
    category: "Front-End",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 50 },
      { name: "Jetpack Compose (Kotlin)", level: 75 },
      { name: "React Native", level: 70 },
    ]
  },
  {
    category: "Back-End",
    skills: [
      { name: "PHP (Laravel)", level: 85 },
      { name: "Python (FastAPI)", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "Supabase", level: 70 },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Android Studio", level: 80 },
    ]
  }
];

const marqueeStack = [
  { name: "JavaScript", image: "/images/tech-js.jpg" },
  { name: "React", image: "/images/tech-react.jpg" },
  { name: "Next.js", image: "/images/tech-nextjs.jpg" },
  { name: "Laravel", image: "/images/tech-php.jpg" },
  { name: "Tailwind", icon: <Wind size={32} />, color: "#06B6D4" },
  { name: "Python", icon: <Cpu size={32} />, color: "#3776AB" },
  { name: "Kotlin", icon: <Smartphone size={32} />, color: "#4285F4" },
  { name: "FastAPI", icon: <Server size={32} />, color: "#009688" },
];

const marqueeTools = [
  { name: "MySQL", image: "/images/tech-mysql.jpg" },
  { name: "MongoDB", icon: <HardDrive size={32} />, color: "#47A248" },
  { name: "Firebase", icon: <Flame size={32} />, color: "#FFCA28" },
  { name: "Supabase", icon: <Zap size={32} />, color: "#3ECF8E" },
  { name: "GitHub", image: "/images/tech-github.jpg" },
  { name: "Git", icon: <GitBranch size={32} />, color: "#F05032" },
  { name: "Postman", icon: <Send size={32} />, color: "#FF6C37" },
  { name: "Android Studio", icon: <Box size={32} />, color: "#3DDC84" },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-16 md:pt-24 pb-16 md:pb-12 relative px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-space font-bold mb-2"
          >
            My
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-space font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
          >
            Skills
          </motion.h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
          className="h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-3xl p-8 relative overflow-hidden group h-full"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--primary)]/10 blur-[50px] group-hover:bg-[var(--primary)]/20 transition-all duration-500 rounded-full" />
            
            <h3 className="text-xl font-space text-white mb-8 border-b border-white/10 pb-4 tracking-widest uppercase opacity-70">
              {category.category}
            </h3>

            <div className="space-y-6 relative z-10">
              {category.skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-sm font-mono text-[var(--secondary)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 border-t border-white/5 pt-10"
      >
        <div className="text-center mb-10">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-2xl font-space font-bold text-white mb-2"
            >
              Technical Mastery
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
              className="text-gray-500 text-sm font-mono uppercase tracking-[0.3em]"
            >
              Modern Stack & Infrastructure
            </motion.p>
          </div>
        </div>

        <div className="relative overflow-hidden">
           {/* Top Marquee (Languages & Frameworks) */}
           <InfiniteMarquee items={marqueeStack} direction="left" speed={30} />
           
           {/* Bottom Marquee (Tools & Databases) */}
           <InfiniteMarquee items={marqueeTools} direction="right" speed={35} />

           {/* Gradient Fades for edges */}
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
