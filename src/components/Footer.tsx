import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
} from 'lucide-react';

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 bg-brand-red rounded-md flex items-center justify-center">
                <span className="text-white font-black text-lg">
                  T
                </span>
              </div>

              <div className="flex flex-col">

                <span className="text-2xl font-black uppercase italic text-white">
                  Tùng Tuned
                </span>

                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red">
                  Car Passion
                </span>

              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Chuyên xe mô hình tỉ lệ 1/24, custom build, bodykit, wheels và các sản phẩm dành cho collector đam mê automotive culture.
            </p>

          </div>

          {/* MENU */}
          <div>

            <h3 className="text-white font-bold uppercase tracking-[0.2em] mb-6">
              MENU
            </h3>

            <div className="flex flex-col gap-4 text-slate-400">

              <Link
                to="/"
                className="hover:text-brand-red transition"
              >
                GIỚI THIỆU
              </Link>

              <Link
                to="/model-cars"
                className="hover:text-brand-red transition"
              >
                XE MÔ HÌNH
              </Link>

              <Link
                to="/custom-parts"
                className="hover:text-brand-red transition"
              >
                LINH KIỆN CUSTOM
              </Link>

              <Link
                to="/custom-cars"
                className="hover:text-brand-red transition"
              >
                XE CUSTOM
              </Link>

              <Link
                to="/contact"
                className="hover:text-brand-red transition"
              >
                LIÊN HỆ
              </Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white font-bold uppercase tracking-[0.2em] mb-6">
              CONTACT
            </h3>

            <div className="flex flex-col gap-5 text-slate-400">

              <div className="flex items-start gap-3">
                <Phone className="text-brand-red shrink-0 mt-1" size={18} />
                <div>
                  <p>0329816113</p>
                  <p className="text-sm text-slate-500">
                    Zalo / Phone
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-1" size={18} />
                <div>
                  <p>Quang Trung, Gò Vấp</p>
                  <p className="text-sm text-slate-500">
                    Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition"
              >
                <Facebook size={18} />
              </a>

            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 Tùng Tuned — Premium Miniature Garage
          </p>

          <p className="text-slate-600 text-xs uppercase tracking-[0.2em]">
            1/24 Scale • Custom Garage • Collector Passion
          </p>

        </div>

      </div>
    </footer>
  );
}