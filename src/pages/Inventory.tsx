import { useState } from 'react';

import {
  Search,
  ArrowRight,
} from 'lucide-react';

import { motion } from 'motion/react';

import { Link } from 'react-router-dom';

import { cn } from '../lib/utils';

const products = [
  {
    id: '1',
    name: 'Nissan GT-R R35 Liberty Walk',
    category: 'JDM',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200',
    price: '1.850.000đ',
    colors: ['#2c2c2c', '#c0c0c0', '#e03131'],
    badge: 'LBWK',
  },

  {
    id: '2',
    name: 'Ferrari F40',
    category: 'Supercar',
    image:
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
    price: '1.450.000đ',
    colors: ['#e03131', '#ffffff'],
    badge: 'Ferrari',
  },

  {
    id: '3',
    name: 'Toyota Supra A80',
    category: 'JDM',
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200',
    price: '1.650.000đ',
    colors: ['#ffffff', '#000000', '#1971c2'],
    badge: 'BBS LM',
  },

  {
    id: '4',
    name: 'Porsche 911 RWB',
    category: 'European',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    price: '2.100.000đ',
    colors: ['#ffcc00', '#1971c2'],
    badge: 'RWB',
  },

  {
    id: '5',
    name: 'Lamborghini Aventador SVJ',
    category: 'Supercar',
    image:
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1200',
    price: '2.400.000đ',
    colors: ['#bcff00', '#2c2c2c'],
    badge: 'SVJ',
  },

  {
    id: '6',
    name: 'BMW M3 E30 DTM',
    category: 'European',
    image:
      'https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=1200',
    price: '1.350.000đ',
    colors: ['#ffffff'],
    badge: 'DTM',
  },
];

const categories = [
  'All',
  'JDM',
  'Supercar',
  'European',
];

export function Inventory() {

  const [activeCategory, setActiveCategory] =
    useState('All');

  const [searchQuery, setSearchQuery] =
    useState('');

  const filteredProducts = products.filter((p) =>
    (activeCategory === 'All' ||
      p.category === activeCategory) &&

    p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pb-24">

      {/* HEADER */}
      <section className="relative h-[45vh] overflow-hidden flex items-center border-b border-white/10">

        <img
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=2000"
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">

          <span className="text-brand-red uppercase tracking-[0.4em] text-sm font-bold italic">
            Model Car Collection
          </span>

          <h1 className="text-6xl md:text-7xl font-black uppercase italic mt-6 mb-6">
            XE MÔ <br />
            <span className="text-brand-red">
              HÌNH
            </span>
          </h1>

          <p className="text-slate-300 max-w-xl leading-relaxed">
            Bộ sưu tập xe mô hình tỉ lệ 1/24 dành cho collector và người đam mê automotive culture.
          </p>

        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* FILTER */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-16">

          {/* CATEGORY */}
          <div className="flex flex-wrap gap-3">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat)
                }
                className={cn(
                  'px-6 py-3 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wide',

                  activeCategory === cat
                    ? 'bg-brand-red border-brand-red text-white'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-brand-red'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-80">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Tìm kiếm xe mô hình..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm outline-none focus:border-brand-red transition"
            />
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.map((product, idx) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
            >

              <Link to={`/product/${product.id}`}>

                <div className="group bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover-lift">

                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                    {/* BADGE */}
                    <div className="absolute top-5 left-5">

                      <span className="px-4 py-2 rounded-full bg-brand-red text-white text-xs font-black uppercase tracking-wide">
                        {product.badge}
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-7">

                    <div className="flex items-start justify-between gap-4 mb-4">

                      <div>

                        <span className="text-brand-red text-xs uppercase tracking-[0.2em] font-bold">
                          {product.category}
                        </span>

                        <h3 className="text-2xl font-black uppercase italic mt-2 group-hover:text-brand-red transition">
                          {product.name}
                        </h3>

                      </div>

                      <span className="text-lg font-bold text-white whitespace-nowrap">
                        {product.price}
                      </span>

                    </div>

                    {/* COLORS */}
                    <div className="flex gap-3 mb-6">

                      {product.colors.map((color, i) => (

                        <div
                          key={i}
                          className="w-5 h-5 rounded-full border border-white/20"
                          style={{
                            backgroundColor: color,
                          }}
                        />

                      ))}

                    </div>

                    {/* BUTTON */}
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

              </Link>

            </motion.div>

          ))}
        </div>

        {/* EMPTY */}
        {filteredProducts.length === 0 && (

          <div className="py-40 text-center">

            <h3 className="text-4xl font-black uppercase italic mb-4">
              Không tìm thấy sản phẩm
            </h3>

            <p className="text-slate-500">
              Hãy thử từ khóa khác.
            </p>

          </div>

        )}

      </div>
    </div>
  );
}