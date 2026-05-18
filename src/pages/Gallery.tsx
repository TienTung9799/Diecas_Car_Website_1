import { motion } from 'motion/react';
import { Instagram, Maximize2, Share2, Heart } from 'lucide-react';

const galleryImages = [
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800',
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-brand-black pb-24">
       <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
             <div className="max-w-2xl">
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs italic mb-4 block">Visual Experience</span>
                <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">LUXURY <span className="text-brand-red text-display">GALLERY</span></h1>
                <p className="text-slate-400 italic">Cinematic captures of our finest bespoke builds and rare collection pieces.</p>
             </div>
             <a href="#" className="flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full font-bold uppercase italic text-xs hover:bg-white hover:text-brand-black transition-all group">
                <Instagram size={20} className="group-hover:rotate-12 transition-transform" /> FOLLOW OUR FEED
             </a>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
             {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden metallic-border cursor-pointer break-inside-avoid"
                >
                   <img 
                    src={src} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Maximize2 size={20} />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform delay-75 border border-white/20">
                        <Heart size={20} />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform delay-150 border border-white/20">
                        <Share2 size={20} />
                      </div>
                   </div>
                   
                   <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="text-[9px] font-black tracking-widest text-white/40 uppercase group-hover:text-brand-red transition-colors">Tùng Tuned Original #{(420 + i).toString(16).toUpperCase()}</span>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Load More */}
          <div className="mt-24 text-center">
             <button className="px-12 py-5 border border-white/5 rounded-lg text-slate-500 font-black italic uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-all">
                LOAD MORE ARCHIVES
             </button>
          </div>
       </div>
    </div>
  );
}
