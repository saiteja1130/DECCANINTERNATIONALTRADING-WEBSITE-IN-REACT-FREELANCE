import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop', alt: 'Warehouse Storage', aspect: 'aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop', alt: 'Premium Rice', aspect: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1494412519320-aa3da6e05a8d?q=80&w=800&auto=format&fit=crop', alt: 'Shipping Containers', aspect: 'aspect-[4/3]' },
  { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop', alt: 'Cargo Ship', aspect: 'aspect-square' },
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop', alt: 'Farming', aspect: 'aspect-[3/4]' },
  { src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop', alt: 'Spices Sorting', aspect: 'aspect-square' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Gallery() {
  return (
    <div className="bg-paper min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-ink/20"></div>
            <span className="text-ink/40 text-[10px] font-semibold tracking-[0.2em] uppercase">Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-light tracking-tightest text-ink"
          >
            Visual <span className="text-gold italic font-serif pr-4">Journey.</span>
          </motion.h1>
        </div>

        {/* Masonry-ish Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease }}
              className={`group relative overflow-hidden rounded-[2rem] bg-stone-200 break-inside-avoid ${img.aspect}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                <span className="text-white font-light tracking-wide text-xl px-6 text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
