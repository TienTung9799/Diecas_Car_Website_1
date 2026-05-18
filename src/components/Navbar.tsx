import { motion } from 'motion/react';
import {
  Car,
  Wrench,
  Phone,
  Menu,
  X,
  Instagram,
  Facebook,
} from 'lucide-react';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  {
    name: 'GIỚI THIỆU',
    path: '/',
    icon: Car,
  },
  {
    name: 'XE MÔ HÌNH',
    path: '/model-cars',
    icon: Car,
  },
  {
    name: 'LINH KIỆN CUSTOM',
    path: '/custom-parts',
    icon: Wrench,
  },
  {
    name: 'XE CUSTOM',
    path: '/custom-cars',
    icon: Car,
  },
  {
    name: 'LIÊN HỆ',
    path: '/contact',
    icon: Phone,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              className="w-10 h-10 bg-brand-red flex items-center justify-center rounded-md"
            >
              <Wrench className="text-white w-5 h-5" />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-white tracking-tight uppercase italic">
                Tùng Tuned
              </span>

              <span className="text-[10px] text-brand-red uppercase tracking-[0.3em]">
                Car Passion
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 hover:text-brand-red',
                  location.pathname === link.path
                    ? 'text-brand-red'
                    : 'text-slate-300'
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-6 h-screen"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-2xl font-bold uppercase italic border-b border-white/10 pb-4 flex items-center gap-4',
                location.pathname === link.path
                  ? 'text-brand-red'
                  : 'text-white'
              )}
            >
              <link.icon className="w-6 h-6" />
              {link.name}
            </Link>
          ))}

          {/* SOCIAL */}
          <div className="flex justify-center gap-8 pt-8">
            <Instagram className="w-6 h-6 text-slate-400 hover:text-white transition" />
            <Facebook className="w-6 h-6 text-slate-400 hover:text-white transition" />
          </div>
        </motion.div>
      )}
    </nav>
  );
}