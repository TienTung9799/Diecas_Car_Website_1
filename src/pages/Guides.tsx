import { motion } from 'motion/react';
import { Play, Book, CheckCircle, Info, ChevronRight, Wrench, Settings, Brush } from 'lucide-react';
import { cn } from '../lib/utils';

const guides = [
  {
    title: 'Wheel Fitment Guide',
    duration: '15 mins',
    difficulty: 'Beginner',
    icon: Settings,
    desc: 'Learn how to perfectly align and glue custom wheels for the aesthetic stance.'
  },
  {
    title: 'Body Kit Installation',
    duration: '45 mins',
    difficulty: 'Expert',
    icon: Wrench,
    desc: 'Advanced resin kit preparation, sanding, and professional bonding techniques.'
  },
  {
    title: 'Airbrush Painting 101',
    duration: '60 mins',
    difficulty: 'Advanced',
    icon: Brush,
    desc: 'Achieve automotive-grade metallic finishes using a miniature airbrush system.'
  },
  {
    title: 'Interior Detail Hacks',
    duration: '30 mins',
    difficulty: 'Intermediate',
    icon: Info,
    desc: 'Bespoke fabric seats, roll cages, and hyper-realistic dashboard dials.'
  },
];

export function Guides() {
  return (
    <div className="min-h-screen bg-brand-black pb-24">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
           <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs italic mb-4 block">Master the craft</span>
           <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">LEARN THE <span className="text-brand-red">SKILLS</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto italic">
             Our step-by-step guides walk you through the world of custom model building with professional techniques.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Featured Video Guide */}
           <div className="group relative rounded-3xl overflow-hidden metallic-border aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="Video Thumbnail"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110 active:scale-95">
                    <Play fill="white" size={32} />
                 </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-brand-black to-transparent">
                 <span className="px-3 py-1 bg-white text-brand-black text-[10px] font-black italic uppercase mb-2 inline-block">MOST POPULAR</span>
                 <h2 className="text-3xl font-black uppercase italic text-white tracking-tighter">ULTIMATE WIDEBODY GUIDE</h2>
                 <p className="text-slate-300 text-sm italic max-w-md mt-2">Everything you need to know about preparing and fitting a Liberty Walk style resin kit.</p>
              </div>
           </div>

           <div className="space-y-6">
              {guides.map((guide, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-6 p-6 bg-brand-gray/20 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all cursor-pointer"
                >
                   <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <guide.icon className="text-slate-400 group-hover:text-white" size={32} />
                   </div>
                   <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white group-hover:text-brand-red transition-colors">{guide.title}</h3>
                        <span className={cn(
                          "text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider",
                          guide.difficulty === 'Expert' ? "text-brand-red border-brand-red" : "text-brand-blue border-brand-blue"
                        )}>{guide.difficulty}</span>
                      </div>
                      <p className="text-slate-500 text-xs italic mb-2">{guide.desc}</p>
                      <div className="flex gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                         <span className="flex items-center gap-1"><Book size={12} /> {guide.duration}</span>
                         <span className="flex items-center gap-1 text-brand-red opacity-80"><CheckCircle size={12} /> Included with parts</span>
                      </div>
                   </div>
                   <ChevronRight className="text-slate-700 group-hover:text-brand-red group-hover:translate-x-1 transition-all" size={24} />
                </motion.div>
              ))}
           </div>
        </div>

        {/* Requirements Section */}
        <div className="mt-32">
           <h3 className="text-2xl font-black uppercase italic text-center mb-12 flex items-center justify-center gap-4">
              <Settings className="text-brand-red" size={32} /> ESSENTIAL WORKSHOP TOOLS
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: 'Precision Sanding', icon: 'S' },
                { name: 'Resin Bonding', icon: 'B' },
                { name: 'Scale Airbrush', icon: 'A' },
                { name: 'Detail Tweezers', icon: 'T' },
                { name: 'Decal Setting', icon: 'D' },
                { name: 'Finishing Clear', icon: 'C' },
              ].map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
                   <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center text-3xl font-display font-black group hover:border-brand-red transition-colors">
                      <span className="group-hover:text-brand-red">{tool.icon}</span>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-center">{tool.name}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
