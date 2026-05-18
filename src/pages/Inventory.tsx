import { useState } from 'react';
import { Search, Filter, ShoppingBag, ArrowRight, Grid, List as ListIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { cn } from '../lib/utils';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Nissan GT-R R35 Liberty Walk',
    description: '1/24 scale premium diecast with custom LBWK body kit and metallic gunmetal finish.',
    price: 185,
    category: 'custom',
    subCategory: 'JDM',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=600',
    colors: ['#2c2c2c', '#c0c0c0', '#e03131'],
    features: ['Custom LBWK Kit', 'Forgiato Wheels', 'Roll Cage']
  },
  {
    id: '2',
    name: 'Ferrari F40 Red Passion',
    description: 'Legendary supercar in 1/24 scale featuring opening engine bay and authentic interior.',
    price: 145,
    category: 'diecast',
    subCategory: 'Supercar',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=600',
    colors: ['#e03131', '#ffcc00'],
  },
  {
    id: '3',
    name: 'Toyota Supra A80 BBS Gold',
    description: 'Classic JDM icon with 19" BBS LM style wheels and carbon fiber hood.',
    price: 165,
    category: 'custom',
    subCategory: 'JDM',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600',
    colors: ['#ffffff', '#000000', '#1971c2'],
  },
  {
    id: '4',
    name: 'Porsche 911 (993) RWB',
    description: 'Bespoke Akira Nakai style wide body conversion in signal yellow.',
    price: 210,
    category: 'custom',
    subCategory: 'European',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600',
    colors: ['#ffcc00', '#1971c2'],
  },
  {
    id: '5',
    name: 'Lamborghini Aventador SVJ',
    description: 'Highly detailed resin model with aerodynamic ALA active system details.',
    price: 240,
    category: 'custom',
    subCategory: 'Supercar',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=600',
    colors: ['#bcff00', '#2c2c2c', '#ffffff'],
  },
  {
    id: '6',
    name: 'BMW M3 E30 DTM Edition',
    description: 'Classic touring car racer with heritage racing livery and roll cage.',
    price: 135,
    category: 'diecast',
    subCategory: 'European',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=600',
    colors: ['#ffffff'],
  },
];

const categories = ['All', 'JDM', 'Supercar', 'European', 'Muscle'];

export function Inventory() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = mockProducts.filter(p => 
    (activeCategory === 'All' || p.subCategory === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-black pb-24">
      {/* Header */}
      <div className="relative h-64 flex items-center overflow-hidden border-b border-white/5">
         <img 
          src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover opacity-20"
          alt="Banner"
          referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-2">PRECISION <span className="text-brand-red">INVENTORY</span></h1>
            <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs">Curated collection for premium collectors</p>
         </div>
      </div>

      <div className="container mx-auto px-4 -translate-y-8 relative z-20">
         {/* Filters & Search */}
         <div className="bg-brand-gray/90 backdrop-blur-xl metallic-border rounded-lg p-4 mb-12 flex flex-col lg:flex-row gap-6 justify-between items-center shadow-2xl">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 text-xs font-bold uppercase italic skew-x-[-12deg] transition-all",
                    activeCategory === cat ? "bg-brand-red text-white" : "bg-white/5 text-slate-400 hover:bg-white/10"
                  )}
                >
                  <span className="skew-x-[12deg] block">{cat}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
               <div className="relative flex-grow lg:w-80">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Search model car..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-brand-black/50 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm focus:border-brand-red outline-none transition-all"
                  />
               </div>
               <div className="flex border border-white/10 rounded overflow-hidden">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={cn("p-2.5 transition-colors", viewMode === 'grid' ? "bg-brand-red text-white" : "bg-brand-black text-slate-500")}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={cn("p-2.5 transition-colors", viewMode === 'list' ? "bg-brand-red text-white" : "bg-brand-black text-slate-500")}
                  >
                    <ListIcon size={18} />
                  </button>
               </div>
            </div>
         </div>

         {/* Product Grid */}
         <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory + searchQuery + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "grid gap-8",
                viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}
            >
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={cn(
                    "group relative bg-brand-gray/30 rounded-xl overflow-hidden metallic-border transition-all hover:scale-[1.02]",
                    viewMode === 'list' && "flex flex-col md:flex-row h-auto md:h-72"
                  )}
                >
                  <div className={cn(
                    "relative overflow-hidden",
                    viewMode === 'grid' ? "aspect-[4/3]" : "md:w-96 flex-shrink-0"
                  )}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-brand-red text-white text-[10px] font-black italic px-3 py-1 skew-x-[-12deg] tracking-tighter uppercase">
                        <span className="skew-x-[12deg] block">{product.category}</span>
                      </span>
                      {product.price > 200 && (
                        <span className="bg-white/90 text-brand-black text-[10px] font-black italic px-3 py-1 skew-x-[-12deg] tracking-tighter uppercase">
                           <span className="skew-x-[12deg] block">RARE</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none group-hover:text-brand-red transition-colors">{product.name}</h3>
                        <span className="text-2xl font-display font-medium text-white">${product.price}</span>
                      </div>
                      <p className="text-slate-400 text-sm italic mb-6 line-clamp-2">{product.description}</p>
                      
                      {product.colors && (
                        <div className="flex gap-2 mb-6">
                           {product.colors.map((color, i) => (
                             <div key={i} className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: color }} />
                           ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {product.features?.map((f, i) => (
                          <span key={i} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{f}</span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-brand-red font-black italic uppercase text-xs group/btn">
                         DETAILS <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
         </AnimatePresence>

         {filteredProducts.length === 0 && (
           <div className="text-center py-40">
              <ShoppingBag size={64} className="mx-auto text-white/5 mb-6" />
              <h3 className="text-2xl font-black italic uppercase italic">NO MODELS FOUND</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
           </div>
         )}
      </div>
    </div>
  );
}
