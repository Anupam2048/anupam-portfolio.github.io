import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { CurrentWork } from "./components/CurrentWork";
import { ProjectModal } from "./components/ProjectModal";
import { AnalyticsDemo } from "./components/AnalyticsDemo";
import { FeaturedProject } from "./components/FeaturedProject";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { ResumeModal } from "./components/ResumeModal";
import { ProjectItem } from "./types/portfolio";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "experience", "work", "calculator", "projects", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-lime-400 selection:text-black">
      {/* Fixed Header with Brand & Scroll Spy */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <AboutSection />
        <Skills />
        <Experience />
        <CurrentWork onSelectProject={(p) => setSelectedProject(p)} />
        <AnalyticsDemo />
        <FeaturedProject />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive In-Browser Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Scroll to Top Button */}
      <BackToTop />
    </div>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
