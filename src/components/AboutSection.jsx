import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Database, 
  Terminal,
  ChevronDown,
  Sparkles,
  Layers,
  Calendar,
  FileText
} from 'lucide-react';

export default function AboutSection({ onNavigateToSection }) {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    languages: ["Java", "C#", "JavaScript", "Python", "PHP"],
    tools: ["Node.js", "MS Office (Excel, PPT, Word)", "Sony Vegas", "Git/CLI"],
    focus: ["Database", "Data Migration", "Data Manipulation", "Data Entry"]
  };

  const experience = [
    {
      role: "Customer Associate (Branch Operation)",
      company: "LBC EXPRESS INC.",
      period: "July 2025 – January 2026",
      points: [
        "Manage end-to-end shipping transactions and process daily sales deposits and financial records.",
        "Address customer queries and resolve complaints regarding shipments to maintain service quality."
      ]
    },
    {
      role: "Multimedia Assistant & Programmer (OJT)",
      company: "BFP STA. CRUZ FIRE STATION",
      period: "OJT Internship",
      points: [
        "Supported the FSEC Office with multimedia production and programming tasks.",
        "Collaborated on technical projects to enhance office documentation and digital workflows."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Laguna State Polytechnic University",
      period: "2021 – 2025",
      badge: "College Degree"
    },
    {
      degree: "IT in Mobile App and Web Development",
      school: "STI College Santa Cruz",
      period: "2020 – 2021",
      badge: "Senior High School"
    },
    {
      degree: "High School Diploma",
      school: "Pedro Guevara Memorial National High School",
      period: "2016 – 2020",
      badge: "High School"
    }
  ];

  const certifications = [
    "Google Developer Group: Gemini CLI Live Build and Mini Hackathon (with Dr. Dennis Wollersheim)",
    "Tech For All: Integrating Gender Perspective in Tech Education",
    "Junior System Analyst and Programmers Club: Member (2019 – 2021)",
    "Tagisan ng Talino Code Fest: Participant"
  ];

  return (
    <section id="section-1" className="snap-section bg-[#FFF2F2] text-[#111844] flex flex-col justify-between pl-3 pr-8 sm:px-8 pt-16 sm:pt-20 pb-20 sm:pb-8 overflow-y-auto no-scrollbar relative">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Profile Card Header */}
        <div className="bg-white border-3 border-[#111844] rounded-2xl p-5 sm:p-8 shadow-[6px_6px_0px_#111844] mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6">
            {/* Avatar Photo */}
            <div className="relative group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-3 border-[#111844] overflow-hidden bg-[#FFF2F2] shadow-[4px_4px_0px_#111844]">
                <img 
                  src="/maurice_avatar.jpg" 
                  alt="Maurice A. Santos"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-[#111844] text-[#FFF2F2] text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-[#111844]">
                BSCS
              </span>
            </div>

            {/* Main Info */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF2F2] border-1.5 border-[#111844] text-xs font-black text-[#111844]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Computer Science Graduate & Developer</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-black text-[#111844] tracking-tight">
                Maurice A. Santos
              </h1>
              
              <p className="text-xs sm:text-sm font-semibold text-[#111844]/80 max-w-xl">
                Computer Science graduate specializing in database management, data migration, web applications, and software development.
              </p>

              {/* Quick Info & Resume Download */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 text-xs font-bold">
                <span className="flex items-center gap-1.5 bg-[#FFF2F2] border border-[#111844] px-2.5 py-1 rounded-lg">
                  <MapPin className="h-3.5 w-3.5 text-[#111844]" />
                  Bagumbayan Santa Cruz, Laguna
                </span>
                <a href="mailto:maurice.santos78@gmail.com" className="flex items-center gap-1.5 bg-[#FFF2F2] border border-[#111844] px-2.5 py-1 rounded-lg hover:bg-[#111844] hover:text-[#FFF2F2] transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                  maurice.santos78@gmail.com
                </a>
                <a 
                  href="/Maurice_A_Santos_Resume.pdf" 
                  download="Maurice_A_Santos_Resume.pdf"
                  className="flex items-center gap-1.5 bg-[#111844] text-[#FFF2F2] border border-[#111844] px-3 py-1 rounded-lg font-black hover:bg-[#FFF2F2] hover:text-[#111844] transition-all shadow-[2px_2px_0px_#111844]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Download PDF Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Detail Tabs */}
        <div className="bg-white border-3 border-[#111844] rounded-2xl p-5 sm:p-6 shadow-[6px_6px_0px_#111844]">
          {/* Tab Navigation Controls */}
          <div className="flex flex-wrap gap-2 border-b-2 border-[#111844] pb-4 mb-4 sm:mb-6">
            {[
              { id: 'skills', label: 'Technical Skills', icon: Code2 },
              { id: 'experience', label: 'Work Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'certifications', label: 'Certifications & Activities', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#111844] text-[#FFF2F2] border-2 border-[#111844] shadow-[2px_2px_0px_#111844]' 
                      : 'bg-[#FFF2F2] text-[#111844] border-2 border-[#111844] hover:bg-[#111844]/10'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Technical Skills */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFF2F2] border-2 border-[#111844]">
                <h3 className="text-xs font-black uppercase text-[#111844] mb-2.5 flex items-center gap-2">
                  <Code2 className="h-4 w-4" /> Programming Languages
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.languages.map((lang, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border-1.5 border-[#111844] rounded-lg text-xs font-black shadow-[2px_2px_0px_#111844]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFF2F2] border-2 border-[#111844]">
                <h3 className="text-xs font-black uppercase text-[#111844] mb-2.5 flex items-center gap-2">
                  <Terminal className="h-4 w-4" /> Software & Tools
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.tools.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border-1.5 border-[#111844] rounded-lg text-xs font-black shadow-[2px_2px_0px_#111844]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FFF2F2] border-2 border-[#111844]">
                <h3 className="text-xs font-black uppercase text-[#111844] mb-2.5 flex items-center gap-2">
                  <Database className="h-4 w-4" /> Technical Focus
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.focus.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border-1.5 border-[#111844] rounded-lg text-xs font-black shadow-[2px_2px_0px_#111844]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Work Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-3.5">
              {experience.map((exp, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-[#FFF2F2] border-2 border-[#111844]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-extrabold text-sm sm:text-base text-[#111844]">{exp.role}</h3>
                    <span className="text-[11px] font-black px-2 py-0.5 bg-white border border-[#111844] rounded text-[#111844] w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#111844]/80 mb-2">{exp.company}</p>
                  <ul className="space-y-1 text-xs font-semibold text-[#111844]">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="font-black text-[#111844]">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Education */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-white border border-[#111844] rounded text-[#111844] mb-2 inline-block">
                      {edu.badge}
                    </span>
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#111844] mb-1">{edu.degree}</h3>
                    <p className="text-xs font-semibold text-[#111844]/80">{edu.school}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#111844]/20 flex items-center gap-1.5 text-xs font-black text-[#111844]">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Certifications & Activities */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] flex items-start gap-3">
                  <Award className="h-5 w-5 text-[#111844] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-[#111844] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Next Section Indicator */}
      <div className="text-center py-2">
        <button 
          onClick={() => onNavigateToSection(2)}
          className="inline-flex items-center gap-2 text-xs font-black text-[#111844] bg-white border-2 border-[#111844] px-4 py-2 rounded-full shadow-[2px_2px_0px_#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-all cursor-pointer animate-bounce"
        >
          <span>Senior Highschool Projects</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
