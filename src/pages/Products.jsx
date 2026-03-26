import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

import ir64Rice from '../assets/products/ir64_rice.png';
import sonaMasooriRice from '../assets/products/sona_masoori_rice.png';
import yellowMaize from '../assets/products/yellow_maize.png';
import freshOnions from '../assets/products/fresh_onions.png';
import freshPomegranate from '../assets/products/fresh_pomegranate.png';

const products = [
  {
    id: 1,
    name: 'IR 64 Parboiled Rice',
    category: 'Rice',
    image: ir64Rice,
    description: 'Long-grain non-basmati rice, known for excellent cooking qualities.'
  },
  {
    id: 2,
    name: 'Sona Masoori Rice',
    category: 'Rice',
    image: sonaMasooriRice,
    description: 'Lightweight and aromatic medium-grain rice. Highly popular globally.'
  },
  {
    id: 3,
    name: 'Maize (Corn)',
    category: 'Grains',
    image: yellowMaize,
    description: 'High-quality yellow maize suitable for human consumption and animal feed.'
  },
  {
    id: 4,
    name: 'Fresh Onions',
    category: 'Vegetables',
    image: freshOnions,
    description: 'Export-grade red and pink onions with pungent flavor and long shelf life.'
  },
  {
    id: 6,
    name: 'Fresh Pomegranate',
    category: 'Fruits',
    image: freshPomegranate,
    description: 'Bhagwa variety pomegranates known for thick red skin and sweet arils.'
  },
  {
    id: 7,
    name: 'Rice Bran',
    category: 'By-products',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop',
    description: 'Nutrient-rich rice bran for animal feed and oil extraction.'
  }
];

const categories = ['All', 'Rice', 'Fruits', 'Grains', 'Vegetables', 'By-products'];
const ease = [0.22, 1, 0.36, 1];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-paper min-h-screen pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-light tracking-tighter text-ink mb-12 leading-none"
          >
            Commodities.
          </motion.h1>
          
          {/* Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex flex-wrap gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border ${
                  activeCategory === cat 
                    ? 'bg-forest-dark text-white border-ink' 
                    : 'bg-transparent text-ink/50 border-ink/10 hover:border-ink/30 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 mb-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-ink text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em]">
                    {product.category}
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <h3 className="text-3xl font-light text-ink mb-4">{product.name}</h3>
                  <p className="text-ink/50 font-light text-lg leading-relaxed mb-8 flex-grow">{product.description}</p>
                  <Link 
                    to={`/contact?product=${encodeURIComponent(product.name)}`} 
                    className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-ink hover:text-gold transition-colors"
                  >
                    Request Quote
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
