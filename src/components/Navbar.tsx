"use client";

import { Home, User, Code2, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
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
    </>
  );
}
