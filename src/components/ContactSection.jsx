import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, ChevronUp, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';

export default function ContactSection({ onNavigateToSection }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Format email subject and body for maurice.santos78@gmail.com
    const emailSubject = formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Message] from ${formData.name}`;
    const emailBody = `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage Content:\n${formData.message}`;
    
    // Set UI confirmation state
    setSubmitted(true);

    // Automatically trigger email client to deliver message to maurice.santos78@gmail.com
    setTimeout(() => {
      window.location.href = `mailto:maurice.santos78@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }, 400);
  };

  return (
    <section id="section-4" className="snap-section bg-[#FFF2F2] text-[#111844] flex flex-col justify-between pl-3 pr-8 sm:px-8 pt-16 sm:pt-20 pb-20 sm:pb-8 overflow-y-auto no-scrollbar relative">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#111844] text-xs font-black text-[#111844] shadow-[2px_2px_0px_#111844]">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111844] tracking-tight">
            Contact Me
          </h2>

          <p className="text-sm font-semibold text-[#111844]/80 max-w-xl mx-auto">
            Available for software engineering roles, database management projects, or technical collaboration.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Direct Info Cards */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white border-3 border-[#111844] rounded-2xl p-6 shadow-[6px_6px_0px_#111844] space-y-4">
              <h3 className="text-xl font-extrabold text-[#111844]">Maurice A. Santos</h3>
              <p className="text-xs font-semibold text-[#111844]/80">
                BS Computer Science graduate based in Laguna, Philippines.
              </p>

              <div className="space-y-3 pt-2">
                <a 
                  href="mailto:maurice.santos78@gmail.com" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-colors group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-white border border-[#111844] group-hover:bg-[#FFF2F2] group-hover:text-[#111844]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black opacity-70">Email Maurice</div>
                    <div className="text-xs font-bold">maurice.santos78@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+639817245473" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-colors group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-white border border-[#111844] group-hover:bg-[#FFF2F2] group-hover:text-[#111844]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black opacity-70">Call / SMS</div>
                    <div className="text-xs font-bold">+639817245473</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF2F2] border-2 border-[#111844]">
                  <div className="p-2 rounded-lg bg-white border border-[#111844]">
                    <MapPin className="h-4 w-4 text-[#111844]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black opacity-70">Location</div>
                    <div className="text-xs font-bold">Bagumbayan Santa Cruz Laguna</div>
                  </div>
                </div>
              </div>

              {/* Download Actual PDF Resume Action */}
              <div className="space-y-2 pt-2">
                <a
                  href="/Maurice_A_Santos_Resume.pdf"
                  download="Maurice_A_Santos_Resume.pdf"
                  className="w-full py-3 px-4 rounded-xl bg-[#111844] text-[#FFF2F2] font-extrabold text-xs border-2 border-[#111844] flex items-center justify-center gap-2 hover:bg-[#FFF2F2] hover:text-[#111844] transition-all cursor-pointer shadow-[3px_3px_0px_#111844]"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/Maurice_A_Santos_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl bg-white text-[#111844] font-bold text-xs border-1.5 border-[#111844] flex items-center justify-center gap-2 hover:bg-[#FFF2F2] transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open PDF in New Tab</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="bg-white border-3 border-[#111844] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#111844]">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="h-16 w-16 bg-[#FFF2F2] border-3 border-[#111844] rounded-full flex items-center justify-center mx-auto shadow-[4px_4px_0px_#111844]">
                    <CheckCircle2 className="h-8 w-8 text-[#111844]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111844]">Message Formatted & Dispatched!</h3>
                  <p className="text-sm font-semibold text-[#111844]/80 max-w-sm mx-auto">
                    Thank you, {formData.name}! Your message has been prepared and your email app was opened to send directly to <code className="font-bold text-[#111844]">maurice.santos78@gmail.com</code>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="px-5 py-2.5 bg-[#111844] text-[#FFF2F2] text-xs font-bold rounded-xl border-2 border-[#111844] hover:bg-[#FFF2F2] hover:text-[#111844] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-extrabold text-[#111844] mb-2">Send a Direct Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase text-[#111844] mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] text-xs font-bold text-[#111844] focus:outline-none focus:ring-2 focus:ring-[#111844]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase text-[#111844] mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] text-xs font-bold text-[#111844] focus:outline-none focus:ring-2 focus:ring-[#111844]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#111844] mb-1">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] text-xs font-bold text-[#111844] focus:outline-none focus:ring-2 focus:ring-[#111844]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-[#111844] mb-1">Message</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFF2F2] border-2 border-[#111844] text-xs font-bold text-[#111844] focus:outline-none focus:ring-2 focus:ring-[#111844]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#111844] text-[#FFF2F2] font-black text-xs border-2 border-[#111844] flex items-center justify-center gap-2 hover:bg-[#FFF2F2] hover:text-[#111844] transition-all cursor-pointer shadow-[4px_4px_0px_#111844]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit & Email Maurice</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back To Top Button */}
      <div className="text-center py-2">
        <button 
          onClick={() => onNavigateToSection(1)}
          className="inline-flex items-center gap-2 text-xs font-black text-[#111844] bg-white border-2 border-[#111844] px-4 py-2 rounded-full shadow-[2px_2px_0px_#111844] hover:bg-[#111844] hover:text-[#FFF2F2] transition-all cursor-pointer"
        >
          <ChevronUp className="h-4 w-4" />
          <span>Back to Top</span>
        </button>
      </div>
    </section>
  );
}
