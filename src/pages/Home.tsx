import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Play, Wrench, Shield, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    title: 'Custom Builds', 
    count: '42 Project', 
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800',
    icon: Wrench
  },
  { 
    title: 'Diecast Collection', 
    count: '120+ Models', 
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
    icon: Sparkles
  },
  { 
    title: 'Performance Parts', 
    count: '850+ Items', 
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    icon: Zap
  },
];

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-brand-red"></span>
              <span className="text-brand-red font-display font-bold uppercase tracking-[0.4em] text-sm italic">Premium Customization</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
              THE ART OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-silver to-white/50">TUNING MINIATURE</span>
            </h1>

            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
              Experience the pinnacle of 1/24 scale automotive craftsmanship. From wide-body kits to bespoke engine details, we redefine model car collection for the true enthusiast.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-brand-red text-white font-bold skew-x-[-12deg] flex items-center gap-3 transition-all hover:translate-y-[-4px] hover:shadow-[0_10px_20px_rgba(224,49,49,0.4)]">
                <span className="skew-x-[12deg] flex items-center gap-2">
                  EXPLORE CUSTOMS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold skew-x-[-12deg] flex items-center gap-3 transition-colors hover:bg-white/5">
                <span className="skew-x-[12deg] flex items-center gap-2">
                  <Play size={20} className="fill-white" /> WATCH SHOWCASE
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
        </div>
      </section>

      {/* Featured Categories (Bento Grid Style) */}
      <section className="py-24 bg-brand-black relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">WORKSHOP <span className="text-brand-red">SERVICES</span></h2>
              <p className="text-slate-400 max-w-md">Precision parts and professional custom builds for serious collectors.</p>
            </div>
            <Link to="/inventory" className="text-brand-red font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:opacity-80">
              View All Collection <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] overflow-hidden metallic-border rounded-lg"
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-colors">
                    <cat.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tight group-hover:text-brand-red transition-colors">{cat.title}</h3>
                  <div className="flex justify-between items-center overflow-hidden">
                    <span className="text-slate-400 text-sm font-medium tracking-wider">{cat.count}</span>
                    <ArrowRight className="text-brand-red transform translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts Marquee (Visual Element) */}
      <div className="py-10 border-y border-white/5 overflow-hidden bg-[#0a0a0a]">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity cursor-default grayscale">
               <span className="text-4xl font-black italic uppercase italic tracking-tighter text-outline-white">CUSTOM WHEELS</span>
               <div className="w-8 h-[1px] bg-white opacity-20"></div>
               <span className="text-4xl font-black italic uppercase italic tracking-tighter text-outline-white text-brand-red opacity-50">BODY KITS</span>
               <div className="w-8 h-[1px] bg-white opacity-20"></div>
               <span className="text-4xl font-black italic uppercase italic tracking-tighter text-outline-white">1/24 SCALE</span>
               <div className="w-8 h-[1px] bg-white opacity-20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/20 blur-3xl opacity-50 rounded-full" />
              <div className="relative metallic-border rounded-xl aspect-[4/5] overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute bottom-8 left-8 right-8 glass-panel p-8 rounded-lg translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center gap-4 mb-2">
                       <Shield className="text-brand-red" size={32} />
                       <span className="text-xl font-bold uppercase italic font-display">Craftsmanship Guarantee</span>
                    </div>
                    <p className="text-slate-300 text-sm italic">Each model is hand-assembled with precision by Tùng tuned experts.</p>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-brand-red font-bold uppercase tracking-widest text-sm italic">Garage Excellence</span>
                <h2 className="text-5xl font-black uppercase italic leading-[0.9]">PRECISION IS <br /> NOT OPTIONAL.</h2>
                <p className="text-slate-400">At Tùng Tuned, we don't just sell model cars. We build automotive dreams in miniature detail. Every wheel fitment, every paint job, and every interior modification is treated with the same respect as a full-scale supercar.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { icon: Wrench, title: "EXPERT TUNING", desc: "Professional installation of performance body kits and interior mods." },
                   { icon: Zap, title: "HIGH PERFORMANCE", desc: "We use only the highest quality resin and metallic parts." },
                   { icon: Shield, title: "COLLECTOR STATUS", desc: "Serialized custom builds that hold value over time." },
                   { icon: Sparkles, title: "AUTHENTICITY", desc: "True-to-life details from world famous tuning brands." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-3">
                      <div className="w-10 h-10 border border-brand-red/30 rounded flex items-center justify-center bg-brand-red/10">
                        <item.icon className="text-brand-red" size={20} />
                      </div>
                      <h4 className="font-bold uppercase tracking-wide text-white italic">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl bg-gradient-to-br from-brand-gray to-brand-black p-12 md:p-20 rounded-3xl metallic-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-10 blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8">START YOUR <br /> <span className="text-brand-red">CUSTOM JOURNEY</span></h2>
             <p className="text-slate-400 text-lg mb-10 italic">Ready to commission a unique masterpiece for your collection? Our experts are standing by at the workshop.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-white text-brand-black font-black italic skew-x-[-12deg] transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                   <span className="skew-x-[12deg] block">CONSULT OUR EXPERTS</span>
                </button>
             </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-outline-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
          color: transparent;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
