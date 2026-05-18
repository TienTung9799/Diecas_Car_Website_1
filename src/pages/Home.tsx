import { motion } from 'motion/react';
import { ArrowRight, Wrench, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseItems = [
  {
    title: 'XE MÔ HÌNH',
    description: 'Các dòng xe mô hình tỉ lệ 1/24 từ JDM, Porsche, Ferrari đến Lamborghini.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    path: '/model-cars',
    icon: Car,
  },

  {
    title: 'LINH KIỆN CUSTOM',
    description:
      'Bodykit, wheels, suspension, decals và nhiều phụ kiện custom cao cấp.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200',
    path: '/custom-parts',
    icon: Wrench,
  },

  {
    title: 'XE CUSTOM',
    description:
      'Các bản build custom hoàn chỉnh theo phong cách Liberty Walk, Race Spec và Premium Garage.',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200',
    path: '/custom-cars',
    icon: Car,
  },
];

export function Home() {
  return (
    <div className="flex flex-col w-full bg-black text-white">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=2000"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-4 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <span className="text-brand-red uppercase tracking-[0.4em] text-sm font-bold italic">
              Premium Miniature Garage
            </span>

            <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] mt-6 mb-8">
              TÙNG <br />
              <span className="text-brand-red">TUNED</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-xl leading-relaxed mb-10">
              Chuyên xe mô hình tỉ lệ 1/24, custom build, bodykit, wheels và các phụ kiện dành cho collector đam mê automotive culture.
            </p>

            <Link
              to="/model-cars"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wide hover:scale-105 transition-all"
            >
              KHÁM PHÁ BỘ SƯU TẬP
              <ArrowRight size={20} />
            </Link>

          </motion.div>
        </div>
      </section>

      {/* 3 SHOWCASE */}
      <section className="py-24 bg-[#0b0b0b]">

        <div className="container mx-auto px-4">

          <div className="mb-16">
            <h2 className="text-5xl font-black uppercase italic mb-4">
              GARAGE <span className="text-brand-red">SHOWROOM</span>
            </h2>

            <p className="text-slate-400 max-w-xl">
              Không chỉ là xe mô hình. Đây là automotive passion thu nhỏ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {showcaseItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >

                <Link to={item.path}>

                  <div className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8">

                      <div className="w-14 h-14 rounded-full bg-brand-red/20 border border-brand-red/30 flex items-center justify-center mb-6">
                        <item.icon className="text-brand-red" size={28} />
                      </div>

                      <h3 className="text-3xl font-black uppercase italic mb-4 group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-sm">
                        XEM CHI TIẾT
                        <ArrowRight size={18} />
                      </div>

                    </div>
                  </div>

                </Link>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 border-t border-white/10">

        <div className="container mx-auto px-4 max-w-3xl text-center">

          <span className="text-brand-red uppercase tracking-[0.3em] text-sm font-bold italic">
            Contact
          </span>

          <h2 className="text-5xl font-black uppercase italic mt-6 mb-10">
            LIÊN HỆ
          </h2>

          <div className="space-y-4 text-slate-300 text-lg">

            <p>
              Zalo: 0329816113
            </p>

            <p>
              SĐT: 0329816113
            </p>

            <p>
              Địa chỉ: Quang Trung, Gò Vấp
            </p>

          </div>

        </div>
      </section>
    </div>
  );
}