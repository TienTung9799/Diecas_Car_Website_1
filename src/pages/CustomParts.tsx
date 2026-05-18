import { motion } from 'motion/react';
import { ShoppingCart, Heart, Search, Filter, Wrench, Settings, Sparkles, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const parts = [
  { name: '19" BBS LM Style Wheels', price: 15, category: 'wheels', icon: Settings },
  { name: 'Wide Body Kit v2 (R35)', price: 45, category: 'body', icon: Wrench },
  { name: 'Carbon Fiber Hood Wrap', price: 12, category: 'accessories', icon: Sparkles },
  { name: 'Performance Decal Set', price: 8, category: 'decals', icon: Zap },
  { name: 'Polished Ceramic Lips', price: 18, category: 'wheels', icon: Settings },
  { name: 'Recaro Racing Seats', price: 25, category: 'accessories', icon: Heart },
];

export function CustomParts() {
  return (
    <div className="min-h-screen bg-brand-black pb-24">
       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 carbon-pattern opacity-40 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 underline decoration-brand-red decoration-2">PERFORMANCE <span className="text-brand-red">PARTS</span></h1>
             <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Upgrade your miniature machine</p>
          </div>
       </div>

       <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
             {/* Sidebar Filters */}
             <div className="space-y-8">
                <div className="glass-panel p-6 rounded-xl metallic-border">
                   <h3 className="text-white font-black italic uppercase mb-6 flex items-center gap-2">
                     <Filter size={18} className="text-brand-red" /> FILTERS
                   </h3>
                   <div className="space-y-4">
                      {['Wheels', 'Body Kits', 'Interior', 'Accessories', 'Decals'].map((cat) => (
                        <div key={cat} className="flex items-center justify-between group cursor-pointer text-slate-400 hover:text-white transition-colors">
                           <span className="text-sm font-bold uppercase italic">{cat}</span>
                           <div className="w-4 h-4 border border-white/20 rounded-sm group-hover:border-brand-red group-hover:bg-brand-red transition-all" />
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-brand-red/10 p-6 rounded-xl border border-brand-red/20">
                   <h4 className="text-brand-red font-black italic uppercase mb-2">PRO TIP</h4>
                   <p className="text-slate-400 text-xs italic">For wheels larger than 19", some sanding of the wheel arches may be required for optimal fitment.</p>
                </div>
             </div>

             {/* Parts Grid */}
             <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {parts.map((part, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-brand-gray/20 rounded-xl p-6 border border-white/5 hover:border-brand-red/50 transition-all flex flex-col justify-between"
                  >
                     <div>
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-500">
                           <part.icon className="text-slate-400 group-hover:text-white transition-colors" size={24} />
                        </div>
                        <h3 className="text-lg font-black uppercase italic text-white mb-2 tracking-tight line-clamp-1">{part.name}</h3>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-4">{part.category}</span>
                     </div>
                     
                     <div className="flex items-center justify-between mt-6">
                        <span className="text-2xl font-display font-medium text-white">${part.price}</span>
                        <button className="flex items-center gap-2 p-2 px-4 rounded bg-white text-brand-black font-black italic uppercase text-xs transition-transform hover:translate-y-[-2px] active:scale-95">
                           ADD <ShoppingCart size={14} />
                        </button>
                     </div>
                  </motion.div>
                ))}
                
                {/* Custom Build Banner */}
                <div className="col-span-full mt-12 bg-gradient-to-r from-brand-gray to-brand-black p-10 rounded-2xl metallic-border flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="max-w-lg">
                      <h3 className="text-3xl font-black uppercase italic mb-4">CAN'T FIND WHAT <span className="text-brand-red">YOU NEED?</span></h3>
                      <p className="text-slate-400 text-sm italic">Our workshop can 3D print and custom CNC parts for your specific model car requirements.</p>
                   </div>
                   <button className="px-10 py-4 bg-brand-red text-white font-black italic uppercase skew-x-[-12deg] transition-all hover:scale-105">
                      <span className="skew-x-[12deg] block">REQUEST CUSTOM PART</span>
                   </button>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
