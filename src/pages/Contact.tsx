import { motion } from 'motion/react';
import { Facebook, Mail, MessageSquare, Phone, MapPin, Send, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import React from 'react';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our garage experts will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-brand-black pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs italic mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">VISIT THE <span className="text-brand-red">GARAGE</span></h1>
              <p className="text-slate-400 max-w-2xl mx-auto italic">
                Looking for a custom build quote or have questions about our premium parts? Our team of collectors and customizers is here to help.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="flex flex-col gap-12">
               <div className="space-y-8">
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter border-l-4 border-brand-red pl-6">CONTACT INFORMATION</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { icon: Phone, title: "Phone Support", detail: "+84 123 456 789", sub: "Mon-Sat, 9AM-6PM" },
                      { icon: Mail, title: "Email Us", detail: "contact@tungtuned.com", sub: "24/7 Support Response" },
                      { icon: MapPin, title: "Workshop Location", detail: "Ho Chi Minh City", sub: "Vietnam - Global Shipping" },
                      { icon: MessageSquare, title: "Live Chat", detail: "Zalo / Messenger", sub: "Instant Response" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-brand-gray/20 border border-white/5 hover:border-brand-red/30 transition-colors">
                        <div className="w-12 h-12 bg-brand-red/10 rounded flex items-center justify-center shrink-0">
                          <item.icon className="text-brand-red" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</h4>
                          <p className="text-white font-bold italic text-sm">{item.detail}</p>
                          <p className="text-slate-500 text-[10px] uppercase font-bold">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter">SOCIAL SHOWROOM</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
                      { icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
                      { icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
                      { icon: Send, label: "TikTok", color: "hover:bg-slate-100 hover:text-black" },
                    ].map((social, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className={cn(
                          "flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-slate-400 transition-all font-bold uppercase italic text-xs",
                          social.color, "hover:text-white hover:border-transparent hover:-translate-y-1"
                        )}
                      >
                        <social.icon size={16} />
                        {social.label}
                      </a>
                    ))}
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="bg-brand-gray/30 p-8 md:p-12 rounded-3xl metallic-border glass-panel">
               <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8">SEND A DIRECT <span className="text-brand-red font-display">MESSAGE</span></h3>
               <form className="space-y-6" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Name</label>
                       <input 
                         required
                         type="text" 
                         className="w-full bg-brand-black/50 border border-white/5 rounded px-4 py-3 text-sm focus:border-brand-red outline-none"
                         placeholder="John Doe"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</label>
                       <input 
                         required
                         type="email" 
                         className="w-full bg-brand-black/50 border border-white/5 rounded px-4 py-3 text-sm focus:border-brand-red outline-none"
                         placeholder="john@example.com"
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Subject</label>
                    <select className="w-full bg-brand-black/50 border border-white/5 rounded px-4 py-3 text-sm focus:border-brand-red outline-none text-slate-400">
                       <option>Custom Build Inquiry</option>
                       <option>Product Question</option>
                       <option>Order Support</option>
                       <option>Workshop Experience</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Your Passionate Message</label>
                    <textarea 
                       required
                       rows={5}
                       className="w-full bg-brand-black/50 border border-white/5 rounded px-4 py-3 text-sm focus:border-brand-red outline-none resize-none"
                       placeholder="Tell us about your dream build..."
                    />
                 </div>
                 <button className="w-full py-4 bg-brand-red text-white font-black italic uppercase skew-x-[-12deg] flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-95">
                    <span className="skew-x-[12deg] flex items-center gap-2">SEND MESSAGE <Send size={18} /></span>
                 </button>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
