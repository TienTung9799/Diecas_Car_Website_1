import { ArrowRight } from 'lucide-react';

const parts = [
  {
    name: 'LBWK Widebody Kit',
    category: 'Body Kit',
    price: '450.000đ',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
  },

  {
    name: 'BBS LM Gold Wheels',
    category: 'Wheels',
    price: '180.000đ',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200',
  },

  {
    name: 'GT Wing Carbon',
    category: 'Spoiler',
    price: '150.000đ',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200',
  },

  {
    name: 'Bride Racing Seat',
    category: 'Interior',
    price: '120.000đ',
    image:
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=1200',
  },

  {
    name: 'Titanium Exhaust',
    category: 'Exhaust',
    price: '140.000đ',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&q=80&w=1200',
  },

  {
    name: 'Nardi Steering Wheel',
    category: 'Interior',
    price: '110.000đ',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1200',
  },
];

export function CustomParts() {

  return (
    <div className="min-h-screen bg-black pb-24">

      {/* HEADER */}
      <section className="relative h-[45vh] overflow-hidden flex items-center border-b border-white/10">

        <img
          src="https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=2000"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">

          <span className="text-brand-red uppercase tracking-[0.4em] text-sm font-bold italic">
            Premium Custom Garage
          </span>

          <h1 className="text-6xl md:text-7xl font-black uppercase italic mt-6 mb-6">
            LINH KIỆN <br />
            <span className="text-brand-red">
              CUSTOM
            </span>
          </h1>

          <p className="text-slate-300 max-w-xl leading-relaxed">
            Bộ sưu tập phụ kiện custom dành cho xe mô hình tỉ lệ 1/24.
          </p>

        </div>
      </section>

      {/* PART GRID */}
      <div className="container mx-auto px-4 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {parts.map((part, idx) => (

            <div
              key={idx}
              className="group bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover-lift"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute top-5 left-5">

                  <span className="px-4 py-2 rounded-full bg-brand-red text-white text-xs font-black uppercase tracking-wide">
                    {part.category}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <div className="flex items-start justify-between gap-4 mb-4">

                  <div>

                    <span className="text-brand-red text-xs uppercase tracking-[0.2em] font-bold">
                      Tùng Tuned
                    </span>

                    <h3 className="text-2xl font-black uppercase italic mt-2 group-hover:text-brand-red transition">
                      {part.name}
                    </h3>

                  </div>

                  <span className="text-lg font-bold text-white whitespace-nowrap">
                    {part.price}
                  </span>

                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">

                  <span className="text-slate-400 text-sm uppercase tracking-wide">
                    Xem chi tiết
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-brand-red group-hover:translate-x-1 transition-transform"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}