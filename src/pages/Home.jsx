import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const slides = useMemo(() => ([
    {
      eyebrow: "Premium Agro Exports",
      title: "GLOBAL",
      accent: "SOURCING.",
      subtitle: "Delivering uncompromising quality from the heart of India to international markets.",
      cta: "Inquire",
      gradient: "linear-gradient(135deg, #000000 0%, #0b0b0b 30%, #151515 55%, #050505 100%)",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1600&auto=format&fit=crop"
    },
    {
      eyebrow: "Single-Origin Partners",
      title: "PURE",
      accent: "ORIGINS.",
      subtitle: "Direct-from-farm relationships built on traceability, trust, and long-term consistency.",
      cta: "Our Farms",
      gradient: "linear-gradient(135deg, #000000 0%, #080808 25%, #1a1a1a 55%, #070707 100%)",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1600&auto=format&fit=crop"
    },
    {
      eyebrow: "Logistics Mastery",
      title: "FREIGHT",
      accent: "READY.",
      subtitle: "Precision packaging and on-time shipping engineered for high-volume global demand.",
      cta: "Ship Now",
      gradient: "linear-gradient(135deg, #000000 0%, #0d0d0d 35%, #1f1f1f 60%, #090909 100%)",
      image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=1600&auto=format&fit=crop"
    },
    {
      eyebrow: "Staple Supply",
      title: "GRAIN",
      accent: "SECURE.",
      subtitle: "High-volume rice and maize exports with strict grading and consistent supply cycles.",
      cta: "Get Quote",
      gradient: "linear-gradient(135deg, #000000 0%, #0a0a0a 28%, #191919 58%, #060606 100%)",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=1600&auto=format&fit=crop"
    }
  ]), []);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[active];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full bg-ink" ref={containerRef}>
      {/* Hero Section - Ultra Premium */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-end pb-16 pt-40 md:pt-56 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <motion.img
            key={`image-${active}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={activeSlide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <motion.div
            key={active}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
            style={{ backgroundImage: activeSlide.gradient }}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 w-full">
          <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
            <motion.div 
              key={`eyebrow-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-gold"></div>
              <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">{activeSlide.eyebrow}</span>
            </motion.div>
            
            <motion.h1 
              key={`title-${active}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease }}
              className="text-[14vw] md:text-[11vw] leading-[0.8] font-light text-white tracking-tighter mb-0"
            >
              {activeSlide.title}<br />
              <span className="text-white/60 italic font-serif">{activeSlide.accent}</span>
            </motion.h1>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
              <motion.p 
                key={`subtitle-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease }}
                className="text-white/50 text-lg md:text-xl font-light max-w-md leading-relaxed"
              >
                {activeSlide.subtitle}
              </motion.p>
              
              <motion.div
                key={`cta-${active}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1, ease }}
              >
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 hover:border-gold hover:bg-gold transition-all duration-700 overflow-hidden"
                >
                  <span className="relative z-10 text-white text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-ink transition-colors duration-500">
                    {activeSlide.cta}
                  </span>
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft size={16} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Prev</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Next slide"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Next</span>
                <ArrowRight size={16} />
              </button>
              <div className="ml-2 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Marquee */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease }}
            className="mt-16 border-y border-white/10 py-4 overflow-hidden flex whitespace-nowrap bg-ink/50 backdrop-blur-sm"
          >
            <div className="animate-marquee flex gap-12 items-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-12 items-center">
                  <span className="text-white/30 text-xs tracking-[0.3em] uppercase">IR 64 Parboiled Rice</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Sona Masoori</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Yellow Maize</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Fresh Produce</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features - Ultra Premium */}
      <section className="py-32 px-6 md:px-12 bg-paper rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-20 mt-[-2rem]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-ink max-w-3xl leading-[1.1]">
              Excellence in every shipment.
            </h2>
            <p className="text-ink/50 font-light max-w-sm text-lg">
              We adhere to the highest international standards, ensuring your commodities arrive in pristine condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[450px]">
            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="md:col-span-2 bg-forest rounded-3xl p-12 relative overflow-hidden group"
            >
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop" alt="Farming" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">01 / Sourcing</span>
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-6">Direct from Farms</h3>
                  <p className="text-white/60 font-light max-w-md text-lg leading-relaxed">We partner directly with certified growers to ensure traceability and premium quality from the root.</p>
                </div>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="bg-white rounded-3xl p-12 flex flex-col justify-between group"
            >
              <span className="text-ink/30 text-[10px] font-bold tracking-[0.2em] uppercase">02 / Quality</span>
              <div>
                <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold group-hover:text-white transition-colors duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-3xl font-light text-ink mb-4">Certified Standards</h3>
                <p className="text-ink/50 font-light leading-relaxed">Rigorous lab testing and compliance with international food safety regulations.</p>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="bg-ink rounded-3xl p-12 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412519320-aa3da6e05a8d?q=80&w=800&auto=format&fit=crop')] bg-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer"></div>
              <span className="relative z-10 text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase">03 / Logistics</span>
              <div className="relative z-10">
                <h3 className="text-3xl font-light text-white mb-4">Global Delivery</h3>
                <p className="text-white/50 font-light leading-relaxed">Seamless supply chain management ensuring timely arrival at any port worldwide.</p>
              </div>
            </motion.div>

            {/* Wide Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="md:col-span-2 bg-paper-dark rounded-3xl p-12 flex flex-col justify-between"
            >
              <span className="text-ink/30 text-[10px] font-bold tracking-[0.2em] uppercase">04 / Network</span>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-ink mb-6">Expansive Reach</h3>
                  <p className="text-ink/50 font-light max-w-md text-lg leading-relaxed">Exporting to the Middle East, Europe, Southeast Asia, and beyond.</p>
                </div>
                <Link to="/about" className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-ink hover:text-gold transition-colors">
                  Our Story <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minimal Product Showcase */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-24">
            <div className="w-12 h-[1px] bg-ink/20"></div>
            <span className="text-ink/40 text-[10px] font-bold tracking-[0.2em] uppercase">Commodities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {[
              { name: 'IR 64 Parboiled Rice', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop', desc: 'Premium long-grain.' },
              { name: 'Turmeric Fingers', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop', desc: 'High curcumin content.' },
              { name: 'Fresh Pomegranate', img: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=800&auto=format&fit=crop', desc: 'Export-grade Bhagwa.' },
              { name: 'Yellow Maize', img: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800&auto=format&fit=crop', desc: 'Human & feed grade.' }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-8 bg-stone-100">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-light text-ink mb-3">{prod.name}</h3>
                    <p className="text-ink/40 font-light text-lg">{prod.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors duration-500">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link to="/products" className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-ink/10 text-[10px] font-bold tracking-[0.2em] uppercase text-ink hover:bg-ink hover:text-white transition-all duration-500">
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
