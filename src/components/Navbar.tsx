import { motion } from 'motion/react';
import { Gauge, Wrench, Camera, Info, Phone, ShoppingBag, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Showcase', path: '/', icon: Gauge },
  { name: 'Inventory', path: '/inventory', icon: ShoppingBag },
  { name: 'Custom Parts', path: '/parts', icon: Wrench },
  { name: 'Builds', path: '/builds', icon: Camera },
  { name: 'Guides', path: '/guides', icon: Info },
  { name: 'Gallery', path: '/gallery', icon: Camera },
  { name: 'Contact', path: '/contact', icon: Phone },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-sm skew-x-[-12deg]"
            >
              <Wrench className="text-white w-6 h-6 rotate-[12deg]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-white tracking-tighter leading-none italic uppercase">Tùng Tuned</span>
              <span className="text-[10px] text-brand-red font-semibold uppercase tracking-[0.2em] leading-none">Car Passion</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-red flex items-center gap-1.5",
                  location.pathname === link.path ? "text-brand-red" : "text-slate-400"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
             <button className="px-6 py-2 bg-white text-brand-black font-semibold text-sm skew-x-[-12deg] transition-transform hover:scale-105 active:scale-95">
                <span className="skew-x-[12deg] inline-block">BOOK CUSTOM BUILD</span>
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/5 bg-brand-black/95 backdrop-blur-2xl px-4 py-8 flex flex-col gap-6 h-screen"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-display font-bold uppercase italic skew-x-[-12deg] p-4 flex items-center gap-4 border-b border-white/5",
                location.pathname === link.path ? "text-brand-red bg-white/5" : "text-white"
              )}
            >
              <link.icon className="w-8 h-8 skew-x-[12deg]" />
              <span className="skew-x-[12deg]">{link.name}</span>
            </Link>
          ))}
          <div className="flex justify-center gap-8 pt-8">
            <Instagram className="w-8 h-8 text-slate-400" />
            <Facebook className="w-8 h-8 text-slate-400" />
            <Youtube className="w-8 h-8 text-slate-400" />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
