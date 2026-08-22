import React, { useState } from 'react';
import { X, ExternalLink, Code, Layers, CheckCircle2, Terminal, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111844]/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border-3 border-[#111844] rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#111844] max-h-[90vh] overflow-y-auto no-scrollbar text-[#111844]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] text-[#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase px-2.5 py-1 rounded-md bg-[#FFF2F2] text-[#111844] border-1.5 border-[#111844]">
            {project.category}
          </span>
          <span className="text-xs font-bold text-[#111844]/70">{project.period}</span>
        </div>

        <h3 className="text-2xl font-black text-[#111844] mb-3">
          {project.title}
        </h3>

        {/* Image Showcase Gallery (if available) */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6 space-y-3">
            <div className="rounded-xl border-2 border-[#111844] overflow-hidden bg-slate-900 shadow-[4px_4px_0px_#111844] h-[260px] sm:h-[340px] flex items-center justify-center">
              <img 
                src={project.images[activeImageIndex]} 
                alt={`${project.title} Screenshot`}
                className="w-full h-full object-contain"
              />
            </div>
            {project.images.length > 1 && (
              <div className="flex items-center justify-center gap-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-12 w-20 rounded-lg border-1.5 overflow-hidden transition-all cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-[#111844] ring-2 ring-[#111844] scale-105' 
                        : 'border-[#111844]/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-sm font-semibold text-[#111844]/90 leading-relaxed mb-6">
          {project.fullDescription || project.description}
        </p>

        {/* Key Features (renders only if features array exists and is non-empty) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#111844] mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Key Features
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#FFF2F2] p-2.5 rounded-lg border border-[#111844]">
                  <span className="text-[#111844] font-black">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Code Snippet / Technical Highlights */}
        {project.codeSnippet && (
          <div className="mb-6">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#111844] mb-2 flex items-center gap-2">
              <Terminal className="h-4 w-4" /> Technical Highlight
            </h4>
            <div className="bg-[#111844] text-[#FFF2F2] p-4 rounded-xl font-mono text-xs overflow-x-auto border-2 border-[#111844]">
              <pre>{project.codeSnippet}</pre>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#111844] mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-bold px-3 py-1 bg-[#FFF2F2] text-[#111844] border-1.5 border-[#111844] rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t-2 border-[#111844] flex items-center justify-between">
          <div className="text-xs font-bold text-[#111844]">
            {project.institution}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#111844] text-[#FFF2F2] font-bold border-2 border-[#111844] hover:bg-[#FFF2F2] hover:text-[#111844] transition-all cursor-pointer"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
}
