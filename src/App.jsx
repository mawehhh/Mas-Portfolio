import React, { useState, useEffect, useRef } from 'react';
import AboutSection from './components/AboutSection';
import SHSProjectsSection from './components/SHSProjectsSection';
import CollegeProjectsSection from './components/CollegeProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import { User, Smartphone, Cpu, Mail, Code2, FileText } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  // Programmatic smooth scroll helper for section jumping
  const scrollToSection = (sectionNum) => {
    if (!containerRef.current) return;
    const clamped = Math.max(1, Math.min(sectionNum, 4));
    const targetElement = document.getElementById(`section-${clamped}`);
    if (targetElement) {
      containerRef.current.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(clamped);
    }
  };

  // IntersectionObserver for dot/navbar active state tracking
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.55
    };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const num = parseInt(entry.target.id.replace('section-', ''), 10);
          if (!isNaN(num)) setActiveSection(num);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    [1, 2, 3, 4].forEach((n) => {
      const el = document.getElementById(`section-${n}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keyboard Up / Down Navigation Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) return; // Don't trigger if modal is open
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeSection < 4) {
          e.preventDefault();
          scrollToSection(activeSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSection > 1) {
          e.preventDefault();
          scrollToSection(activeSection - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, selectedProject]);

  const sectionsInfo = [
    { num: 1, label: 'About Me', shortLabel: 'About', icon: User },
    { num: 2, label: 'Senior High School', shortLabel: 'SHS', icon: Smartphone },
    { num: 3, label: 'College Projects', shortLabel: 'College', icon: Cpu },
    { num: 4, label: 'Contact Me', shortLabel: 'Contact', icon: Mail }
  ];

  return (
    <div className="relative h-screen h-[100dvh] w-screen overflow-hidden bg-[#FFF2F2] text-[#111844]">
      {/* Top Header Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFF2F2]/95 backdrop-blur-md border-b-2 border-[#111844]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          <div 
            onClick={() => scrollToSection(1)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-[#111844] flex items-center justify-center text-[#FFF2F2] shadow-[2px_2px_0px_#111844] group-hover:rotate-6 transition-transform">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <span className="font-black text-sm sm:text-lg text-[#111844] tracking-tight">
                Maurice A. Santos
              </span>
              <span className="hidden md:inline-block ml-2 text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-white border border-[#111844]">
                Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {sectionsInfo.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.num;
              return (
                <button
                  key={sec.num}
                  onClick={() => scrollToSection(sec.num)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#111844] text-[#FFF2F2] border-1.5 border-[#111844] shadow-[2px_2px_0px_#111844]' 
                      : 'bg-white text-[#111844] border-1.5 border-[#111844] hover:bg-[#111844]/10'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{sec.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Header Action: PDF Resume */}
          <div className="flex items-center gap-2">
            <a
              href="/Maurice_A_Santos_Resume.pdf"
              download="Maurice_A_Santos_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black bg-[#111844] text-[#FFF2F2] border-1.5 border-[#111844] shadow-[2px_2px_0px_#111844] hover:bg-[#FFF2F2] hover:text-[#111844] transition-all cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Floating Side Dot Navigation */}
      <div className="fixed right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 sm:gap-3 items-center">
        {sectionsInfo.map((sec) => {
          const isActive = activeSection === sec.num;
          return (
            <button
              key={sec.num}
              onClick={() => scrollToSection(sec.num)}
              className="group relative flex items-center justify-center p-1 sm:p-1.5 cursor-pointer touch-manipulation"
              title={sec.label}
            >
              <span className={`block rounded-full transition-all duration-300 border-2 border-[#111844] ${
                isActive 
                  ? 'w-3 h-3 sm:w-4 sm:h-4 bg-[#111844] scale-110 shadow-[2px_2px_0px_#111844]' 
                  : 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white group-hover:bg-[#111844]/40'
              }`}></span>

              <span className="hidden sm:block absolute right-7 px-2.5 py-1 bg-[#111844] text-[#FFF2F2] text-[10px] font-black whitespace-nowrap rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[2px_2px_0px_#111844]">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Bottom Quick Navigation Dock */}
      <div className="sm:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md border-2 border-[#111844] px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-[3px_3px_0px_#111844]">
        {sectionsInfo.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.num;
          return (
            <button
              key={sec.num}
              onClick={() => scrollToSection(sec.num)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#111844] text-[#FFF2F2]'
                  : 'text-[#111844] hover:bg-[#FFF2F2]'
              }`}
            >
              <Icon className="h-3 w-3" />
              <span>{sec.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* TikTok Snap Scroll Container */}
      <div ref={containerRef} className="snap-container no-scrollbar">
        {/* About Me */}
        <AboutSection onNavigateToSection={scrollToSection} />

        {/* Senior Highschool Projects */}
        <SHSProjectsSection onSelectProject={setSelectedProject} onNavigateToSection={scrollToSection} />

        {/* College Projects */}
        <CollegeProjectsSection onSelectProject={setSelectedProject} onNavigateToSection={scrollToSection} />

        {/* Contact Me */}
        <ContactSection onNavigateToSection={scrollToSection} />
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
