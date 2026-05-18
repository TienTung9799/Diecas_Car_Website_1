import { useState } from 'react';
import { motion } from 'motion/react';
import { Build } from '../types';
import { Wrench, ChevronLeft, ChevronRight, Share2, Info } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';

const mockBuilds: Build[] = [
  {
    id: '1',
    title: 'GT-R R35 "CARBON HUNTER"',
    description: 'Full body wide conversion with bespoke interior detail, functional engine bay lighting, and custom wheels.',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'SUPRA A80 "MIDNIGHT JDM"',
    description: 'Authentic 90s tuning style with polished lip wheels, big wing, and custom decal package.',
    beforeImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800',
  },
];

export function Builds() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeBuildIdx, setActiveBuildIdx] = useState(0);
  
  const activeBuild = mockBuilds[activeBuildIdx];

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="min-h-screen bg-brand-black pb-24">
      {/* Header */}
      <div className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs italic mb-4 block">Transformation Showcase</span>
            <h1 className="text-64 md:text-7xl font-black uppercase italic tracking-tighter mb-6 underline decoration-brand-red decoration-4 transition-all hover:decoration-8">BEFORE & <span className="text-brand-red">AFTER</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto italic text-lg leading-relaxed">
              Every masterpiece starts as a standard factory model. Witness the painstaking evolution of our premium custom builds.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Comparison Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-8 group">
            <div 
              className="relative aspect-[16/9] rounded-2xl overflow-hidden metallic-border cursor-ew-resize select-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleMouseMove}
            >
              {/* After Image (Top) */}
              <div className="absolute inset-0 z-10 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                 <img 
                  src={activeBuild.afterImage} 
                  alt="After" 
                  className="absolute left-0 top-0 w-full h-full object-cover grayscale-[0.2]"
                  style={{ width: `calc(100vw / (100 / ${100/1}))` /* Hack for some scaling if needed but auto works better */ }}
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-8 left-8 bg-brand-red text-white text-xs font-black italic px-4 py-2 skew-x-[-12deg] shadow-2xl">
                    <span className="skew-x-[12deg] block">POST TUNED</span>
                 </div>
              </div>

              {/* Before Image (Bottom) */}
              <div className="absolute inset-0 z-0">
                 <img 
                  src={activeBuild.beforeImage} 
                  alt="Before" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-8 right-8 bg-white text-brand-black text-xs font-black italic px-4 py-2 skew-x-[-12deg] shadow-2xl">
                    <span className="skew-x-[12deg] block">STOCK MODEL</span>
                 </div>
              </div>

              {/* Slider Line */}
              <div 
                className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(255,255,255,0.5)]" 
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center p-2 shadow-2xl">
                   <ChevronLeft size={16} className="text-brand-black" />
                   <ChevronRight size={16} className="text-brand-black" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-black uppercase italic tracking-[0.3em] text-slate-500">
                <span>Move to compare transformation</span>
                <span>Crafted by Tùng Tuned</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
             <div className="space-y-4">
               <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-brand-red">{activeBuild.title}</h2>
               <p className="text-slate-400 italic text-sm leading-relaxed">{activeBuild.description}</p>
             </div>

             <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-gray/30 border border-white/5">
                   <Wrench size={32} className="text-brand-red" />
                   <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Build Time</h4>
                      <p className="text-white font-display font-medium uppercase italic">150+ Hours Part Work</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-gray/30 border border-white/5">
                   <Info size={32} className="text-brand-blue" />
                   <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Modification</h4>
                      <p className="text-white font-display font-medium uppercase italic">Custom Resin Kit + Decals</p>
                   </div>
                </div>
             </div>

             <div className="flex gap-4">
               <button className="flex-grow px-8 py-4 bg-brand-red text-white font-black italic skew-x-[-12deg] transition-all hover:translate-y-[-4px]">
                  <span className="skew-x-[12deg] block flex items-center justify-center gap-2 uppercase">REPLICATE BUILD <Wrench size={18} /></span>
               </button>
               <button className="p-4 bg-brand-gray rounded-lg border border-white/10 text-white transition-colors hover:bg-white/5">
                  <Share2 size={20} />
               </button>
             </div>
          </div>
        </div>

        {/* Build List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockBuilds.map((build, idx) => (
            <motion.div
              key={build.id}
              onClick={() => {
                setActiveBuildIdx(idx);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className={cn(
                "group relative aspect-video rounded-xl overflow-hidden metallic-border cursor-pointer transition-all",
                activeBuildIdx === idx ? "ring-2 ring-brand-red scale-105" : "opacity-60 hover:opacity-100"
              )}
            >
              <img src={build.afterImage} alt={build.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                 <h4 className="text-sm font-black uppercase italic text-white group-hover:text-brand-red transition-colors">{build.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
