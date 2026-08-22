import React from 'react';
import { Smartphone, ExternalLink, ChevronDown, Image as ImageIcon } from 'lucide-react';
import SwipeCarousel from './SwipeCarousel';

export default function SHSProjectsSection({ onSelectProject, onNavigateToSection }) {
  const shsProjects = [
    {
      id: "shs-flora-julen",
      title: "Client Base Website — Flora Julen",
      period: "STI College Santa Cruz (2020 – 2021)",
      category: "Web application",
      institution: "STI College Santa Cruz",
      description: "A custom web application built for a client's store called 'Flora Julen'. Showcases botanical products, fresh plants, flower arrangements, orientation services, and shopping cart functionality.",
      fullDescription: "Developed as a client-commissioned Web Application project during Senior High School at STI College. Built using HTML5, CSS, and JavaScript, the platform serves as an interactive digital storefront for 'Flora Julen' — a store specializing in botanical plants, custom flower arrangements, plant care orientation, and specialized gardening services. It features a responsive navigation bar, a product catalog grid (Paytus Nana, San Francisco, Maki, Gumamela), item search filters, and an 'add to cart' order inquiry interface.",
      tags: ["HTML5", "CSS", "JS"],
      images: ["/flora_julen_1.png", "/flora_julen_2.png", "/flora_julen_3.png"]
    },
    {
      id: "shs-brick-game",
      title: "Simple Brick Game",
      period: "STI College Santa Cruz (2020 – 2021)",
      category: "Java Game",
      institution: "STI College Santa Cruz",
      description: "A fun and engaging 2D brick breaker game built using Java. Developed to showcase Object-Oriented Programming (OOP) principles, 2D graphics rendering, and collision mechanics to fellow students.",
      fullDescription: "A classic 2D Brick Breaker desktop game application developed in Java during Senior High School at STI College. Designed as a fun interactive project to demonstrate Object-Oriented Programming (OOP) principles, 2D Graphics rendering, real-time keyboard paddle movement, ball-and-brick collision detection algorithm, dynamic brick destruction grid, and live score counter.",
      tags: ["Java", "OOP", "2D Game Dev"],
      images: ["/simple_brick_game.png"]
    },
    {
      id: "shs-hotel-app",
      title: "Hotel App Reservation — M Suites",
      period: "STI College Santa Cruz (2020 – 2021)",
      category: "Android Application",
      institution: "STI College Santa Cruz",
      description: "An Android mobile application designed to showcase a hotel and its amenities. Focused on delivering a polished UI experience with basic database integration for guest reservations and room management.",
      fullDescription: "Developed during Senior High School at STI College as an Android mobile application for a hotel called 'M Suites'. The primary goal of the project was to showcase the hotel's facilities and services through an attractive and user-friendly interface. Built using Android Studio, Java, and MySQL, the app features a login and registration system with a hotel-themed background, a management dashboard with key modules (Activity, Ratings, Crews, and Guest Rooms), and detailed activity pages such as pool information with star ratings and a submit feedback form. The project focused heavily on UI design and simple database connectivity to demonstrate mobile development fundamentals.",
      tags: ["Android Studio", "Java", "MySQL", "Mobile App"],
      images: ["/hotel_app_3.png", "/hotel_app_1.png", "/hotel_app_2.png"]
    }
  ];

  /* ── Card renderer: compact on mobile, full on desktop ── */
  const renderCard = (project) => (
    <div className="bg-white border-3 border-[#111844] rounded-2xl p-3 sm:p-6 shadow-[4px_4px_0px_#111844] sm:shadow-[6px_6px_0px_#111844] flex flex-col justify-between h-full transition-all relative group">
      <div>
        {/* Image — shorter on mobile to save vertical space */}
        {project.images && project.images.length > 0 && (
          <div className="mb-2 sm:mb-4 rounded-xl border-2 border-[#111844] overflow-hidden bg-slate-900 h-28 sm:h-48 relative">
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
    <section id="section-2" className="snap-section bg-[#FFF2F2] text-[#111844] flex flex-col justify-between px-3 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-8 overflow-y-auto no-scrollbar relative">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">

        {/* Section Header */}
        <div className="text-center space-y-1 sm:space-y-3 mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#111844] text-xs font-black text-[#111844] shadow-[2px_2px_0px_#111844]">
            <Smartphone className="h-3.5 w-3.5" />
            <span>STI College Santa Cruz (2020 – 2021)</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-black text-[#111844] tracking-tight">
            Senior High School Projects
          </h2>

          <p className="hidden sm:block text-sm font-semibold text-[#111844]/80 max-w-xl mx-auto">
            Client projects, games, & web applications built during the IT in Mobile App and Web Development TVL track at STI College.
          </p>
        </div>

        {/* ── Mobile: Horizontal Swipe Carousel ── */}
        <SwipeCarousel items={shsProjects} renderCard={renderCard} />

        {/* ── Desktop: Grid Layout ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto w-full">
          {shsProjects.map((project) => (
            <div key={project.id} className="w-full">
              {renderCard(project)}
            </div>
          ))}
        </div>
      </div>

      {/* Next Section Button */}
      <div className="text-center pt-2 pb-0">
        <button
          onClick={() => onNavigateToSection(3)}
          className="inline-flex items-center gap-2 text-xs font-black text-[#111844] bg-white border-2 border-[#111844] px-4 py-2 rounded-full shadow-[2px_2px_0px_#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-all cursor-pointer animate-bounce"
        >
          <span>College Projects</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
