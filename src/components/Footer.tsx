import { Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm skew-x-[-12deg]">
                <span className="text-white font-bold skew-x-[12deg]">T</span>
              </div>
              <span className="text-xl font-display font-bold text-white uppercase italic skew-x-[-12deg]">Tùng Tuned</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Vietnam's premier custom 1/24 scale model car workshop. We bring automotive passion into a miniature world with high-end craftsmanship and authentic details.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors hover:bg-white hover:text-brand-black">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Inventory', 'Custom Parts', 'Build Gallery', 'Workshop', 'Install Guides'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 text-sm hover:text-brand-red transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-brand-red shrink-0" size={18} />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-brand-red shrink-0" size={18} />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-brand-red shrink-0" size={18} />
                <span>contact@tungtuned.com</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-gray/30 p-6 rounded-lg metallic-border">
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-4">Join the Garage</h4>
            <p className="text-slate-400 text-xs mb-4">Get exclusive looks at our latest custom builds and new part releases.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-brand-black/50 border border-white/10 rounded px-3 py-2 text-sm w-full outline-none focus:border-brand-red"
              />
              <button className="bg-brand-red px-3 py-2 rounded text-white transition-opacity hover:opacity-90">
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2026 Tùng Tuned. All rights reserved.</p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
