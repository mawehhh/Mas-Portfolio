import React from 'react';
import { Cpu, ExternalLink, ChevronDown, Image as ImageIcon } from 'lucide-react';
import SwipeCarousel from './SwipeCarousel';

export default function CollegeProjectsSection({ onSelectProject, onNavigateToSection }) {
  /* ========================================================================
     COLLEGE PROJECTS DATA LIST
     To add a new project in code, add another object to this array:
     {
       id: "col-2",
       title: "Your Project Title",
       period: "LSPU BS Computer Science (YEAR)",
       category: "Mobile Application",
       institution: "Laguna State Polytechnic University",
       description: "Short description...",
       fullDescription: "Full detailed description...",
       tags: ["Java", "SQLite"],
       images: ["/your_screenshot.png"]
     }
     ======================================================================== */
  const collegeProjects = [
    {
      id: "col-digital-record",
      title: "Digital Record Book",
      period: "LSPU BS Computer Science (2021 – 2025)",
      category: "Mobile Application",
      institution: "Laguna State Polytechnic University",
      description: "A client-commissioned Android mobile application that helps a business owner monitor daily sales, orders, total payments, and expenses through an intuitive digital record interface.",
      fullDescription: "Developed as a client-based mobile application project during College at Laguna State Polytechnic University. Built using Java and SQLite, the app serves as a 'Digital Record Book' for a client's water purification business ('Water Market'). It allows the client to log and monitor daily sales, track total orders, record expenses (bills & coins breakdown), and review past transaction history with date-stamped profit summaries. The app features a clean dashboard with Record Book and History navigation, an End Day summary module, and a full transaction log with delete management.",
      tags: ["Java", "SQLite", "Android", "Mobile App"],
      images: [
        "/digital_record_2.png",
        "/digital_record_1.png",
        "/digital_record_3.png"
      ]
    },
    {
      id: "col-scheduling-system",
      title: "Intelligent Scheduling System",
      period: "LSPU BS Computer Science — Thesis (2024 – 2025)",
      category: "Thesis — Web Application",
      institution: "Laguna State Polytechnic University",
      description: "A thesis web application for CCS at LSPU – Santa Cruz Campus that intelligently resolves scheduling conflicts, optimizes room allocation, and balances faculty workload distribution.",
      fullDescription: "This thesis presents an Intelligent Scheduling System developed for the College of Computer Studies (CCS) at Laguna State Polytechnic University (LSPU) – Santa Cruz Campus. The primary objective is to resolve scheduling conflicts (such as overlapping classes or double-booked rooms) and optimize resource utilization, room allocation, and faculty workload distribution. Built with Flask and Python as the backend, MySQL (via XAMPP) as the database, and a web-based frontend, the system allows administrators to upload Faculty Load Matrix PDFs, auto-generate conflict-free class schedules, manage room assignments, and review historical schedule versions through a date-stamped schedule log.",
      tags: ["Flask", "Python", "XAMPP", "MySQL", "Web Application", "Thesis"],
      images: [
        "/scheduling_5.png",
        "/scheduling_2.png",
        "/scheduling_3.png",
        "/scheduling_4.png",
        "/scheduling_1.png"
      ]
    },
    {
      id: "col-hadley-pos",
      title: "Hadley POS System",
      period: "LSPU BS Computer Science (2021 – 2025)",
      category: "POS System",
      institution: "Laguna State Polytechnic University",
      description: "A client-commissioned Point-of-Sale (POS) desktop application built for a restaurant called 'Hadley'. Allows the restaurant to manage their menu, process orders, track transactions, and generate sales reports.",
      fullDescription: "Developed as a client-based project during College at Laguna State Polytechnic University. The Hadley POS System is a desktop Point-of-Sale application built using C# and MySQL, designed specifically for a restaurant client that needed a reliable and easy-to-use system to manage their daily operations. The system features a product management panel where staff can add, edit, upload photos, and set availability for each menu item. It also includes an account management module, a transaction history log, an archives panel, and a sales report dashboard — giving the restaurant owner full visibility and control over their sales and inventory.",
      tags: ["C#", "MySQL", "Desktop App", "POS"],
      images: [
        "/hadley_pos_2.png",
        "/hadley_pos_3.png",
        "/hadley_pos_1.png",
        "/hadley_pos_4.png"
      ]
    }
  ];

  /* Shared card renderer: compact on mobile, full on desktop */
  const renderCard = (project) => (
    <div className="bg-white border-3 border-[#111844] rounded-2xl p-3 sm:p-6 shadow-[4px_4px_0px_#111844] sm:shadow-[6px_6px_0px_#111844] flex flex-col justify-between h-full transition-all relative group">
      <div>
        {/* Image — shorter on mobile */}
        {project.images && project.images.length > 0 && (
          <div className="mb-2 sm:mb-4 rounded-xl border-2 border-[#111844] overflow-hidden bg-slate-900 h-28 sm:h-52 relative">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-1.5 right-1.5 bg-[#111844] text-[#FFF2F2] text-[9px] font-black px-1.5 py-0.5 rounded-md flex items-center gap-1">
              <ImageIcon className="h-2.5 w-2.5" /> {project.images.length} Photo{project.images.length > 1 ? 's' : ''}
            </span>
          </div>
        )}

        <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 bg-[#FFF2F2] border border-[#111844] rounded text-[#111844] mb-1.5 sm:mb-3">
          {project.category}
        </span>

        <h3 className="text-sm sm:text-lg font-extrabold text-[#111844] mb-1 sm:mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-[11px] sm:text-xs font-medium text-[#111844]/80 leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-6">
          {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 bg-[#FFF2F2] border border-[#111844] rounded text-[#111844]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelectProject(project)}
        className="w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-[#111844] text-[#FFF2F2] text-[10px] sm:text-xs font-bold border-2 border-[#111844] flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#FFF2F2] hover:text-[#111844] transition-all cursor-pointer shadow-[2px_2px_0px_#111844]"
      >
        <span>View Screenshots & Details</span>
        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </button>
    </div>
  );

  return (
    <section id="section-3" className="snap-section bg-[#FFF2F2] text-[#111844] flex flex-col justify-between px-3 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-8 overflow-y-auto no-scrollbar relative">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">

        {/* Section Header */}
        <div className="text-center space-y-1 sm:space-y-3 mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#111844] text-xs font-black text-[#111844] shadow-[2px_2px_0px_#111844]">
            <Cpu className="h-3.5 w-3.5" />
            <span>Laguna State Polytechnic University (2021 – 2025)</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-black text-[#111844] tracking-tight">
            College Projects
          </h2>

          <p className="hidden sm:block text-sm font-semibold text-[#111844]/80 max-w-xl mx-auto">
            BS Computer Science client projects, mobile applications, and system tools developed at LSPU.
          </p>
        </div>

        {/* ── Mobile: Horizontal Swipe Carousel ── */}
        <SwipeCarousel items={collegeProjects} renderCard={renderCard} />

        {/* ── Desktop: Grid Layout ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto w-full">
          {collegeProjects.map((project) => (
            <div key={project.id} className="w-full">
              {renderCard(project)}
            </div>
          ))}
        </div>
      </div>

      {/* Next Section Button */}
      <div className="text-center pt-2 pb-0">
        <button
          onClick={() => onNavigateToSection(4)}
          className="inline-flex items-center gap-2 text-xs font-black text-[#111844] bg-white border-2 border-[#111844] px-4 py-2 rounded-full shadow-[2px_2px_0px_#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-all cursor-pointer animate-bounce"
        >
          <span>Contact Me</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
