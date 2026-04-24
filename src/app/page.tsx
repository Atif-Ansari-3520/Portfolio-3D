import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ExperienceServices from "@/components/sections/ExperienceServices";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceServices />
      <ContactFooter />
    </>
  );
}
