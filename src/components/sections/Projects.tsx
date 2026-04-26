"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/Icons";

const projectsData = [
  {
    title: "Kids Quiz App — Client Project",
    description: "An educational platform designed for children, featuring interactive UI and progress tracking.",
    image: "/images/kids_quiz_app_mockup_1776513333304.png",
    tags: ["React Native", "Firebase", "Mobile"],
    github: "#",
    demo: "#",
  },
  {
    title: "Veeno VPN — Client Project",
    description: "High-performance VPN client with secure tunneling and server management.",
    image: "/images/veeno_vpn_mockup_1776513353653.png",
    tags: ["Kotlin", "Supabase", "Networking"],
    github: "#",
    demo: "#",
  },
  {
    title: "Alshifa Rideshare Backend",
    description: "Backend architecture for regional ridesharing service, handling real-time coordination.",
    image: "/images/rideshare_backend_visualization_1776513368482.png",
    tags: ["FastAPI", "MongoDB", "Backend"],
    github: "#",
    demo: "#",
  },
  {
    title: "Alshifa Web Panel",
    description: "Multi-user administrative portal for managing rideshare operations and passenger data.",
    image: "/images/rideshare_web_panel_mockup_1776513386434.png",
    tags: ["React", "FastAPI", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Shoe Website",
    description: "Modern sneaker e-commerce storefront with product filtering and responsive design.",
    image: "/images/shoe_ecommerce_mockup_1776513403973.png",
    tags: ["React", "Tailwind CSS", "Frontend"],
    github: "#",
    demo: "#",
  },
  {
    title: "Login App",
    description: "Secure login and signup module with biometric integration and Firestore backend.",
    image: "/images/login_auth_app_mockup_1776513420722.png",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Todo Task App",
    description: "Productivity application with persistent storage and intuitive task management.",
    image: "/images/todo_app_mockup_1776513436135.png",
    tags: ["Kotlin", "Jetpack Compose", "Mobile"],
    github: "#",
    demo: "#",
  },
  {
    title: "Calculator App",
    description: "Clean, gesture-based calculator featuring advanced functions and minimalist UI.",
    image: "/images/calculator_app_mockup_1776513450855.png",
    tags: ["Kotlin", "Jetpack Compose", "Utilities"],
    github: "#",
    demo: "#",
  }
];

function InteractiveCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        perspective: 1000,
      }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300 ease-linear border border-white/5"
      >
        <div 
          className="relative h-48 w-full overflow-hidden bg-gray-800"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>

        <div className="p-6 flex-grow flex flex-col" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-space font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-[var(--secondary)] border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-auto" style={{ transform: "translateZ(50px)" }}>
            <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <Github size={18} /> Code
            </a>
            <a href={project.demo} className="text-white hover:text-[var(--primary)] transition-colors flex items-center gap-2 text-sm font-medium">
              Live Demo <ExternalLink size={18} />
            </a>
          </div>
        </div>
        
        {/* Glow Overlay */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none box-shadow-[0_0_40px_rgba(108,99,255,0.2)] mix-blend-overlay border border-[var(--primary)]/30" />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="pt-12 pb-28 md:pb-24 relative px-4 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16 text-center">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-space font-bold mb-2"
          >
            Featured
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
            Projects
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <InteractiveCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
