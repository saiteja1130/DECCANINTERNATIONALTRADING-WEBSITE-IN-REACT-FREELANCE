import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import ir64Rice from '../assets/products/ir64_rice.png';
import freshPomegranate from '../assets/products/fresh_pomegranate.png';
import yellowMaize from '../assets/products/yellow_maize.png';
import freshOnions from '../assets/products/fresh_onions.png';
import sonaMasooriRice from '../assets/products/sona_masoori_rice.png';


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
      riceHighlight: "We can provide regular RICE shipments as we reside in a place where there are 100+ RICE MILLS within a span of only 10 kms",
      cta: "Inquire",
      gradient: "radial-gradient(at 0% 0%, rgba(0, 173, 239, 0.15) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 115, 187, 0.1) 0%, transparent 50%)",
      image: ir64Rice
    },
    {
      eyebrow: "Single-Origin Partners",
      title: "PURE",
      accent: "ORIGINS.",
      subtitle: "Direct-from-farm relationships built on traceability, trust, and long-term consistency.",
      riceHighlight: "We can provide regular RICE shipments as we reside in a place where there are 100+ RICE MILLS within a span of only 10 kms",
      cta: "Our Farms",
      gradient: "radial-gradient(at 0% 0%, rgba(92, 200, 242, 0.15) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 43, 73, 0.1) 0%, transparent 50%)",
      image: freshOnions
    },
    {
      eyebrow: "Logistics Mastery",
      title: "FREIGHT",
      accent: "READY.",
      subtitle: "Precision packaging and on-time shipping engineered for high-volume global demand.",
      riceHighlight: "We can provide regular RICE shipments as we reside in a place where there are 100+ RICE MILLS within a span of only 10 kms",
      cta: "Ship Now",
      gradient: "radial-gradient(at 0% 0%, rgba(0, 173, 239, 0.15) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 73, 155, 0.1) 0%, transparent 50%)",
      image: freshPomegranate
    },
    {
      eyebrow: "Staple Supply",
      title: "GRAIN",
      accent: "SECURE.",
      subtitle: "High-volume rice and maize exports with strict grading and consistent supply cycles.",
      riceHighlight: "We can provide regular RICE shipments as we reside in a place where there are 100+ RICE MILLS within a span of only 10 kms",
      cta: "Get Quote",
      gradient: "radial-gradient(at 0% 0%, rgba(0, 115, 187, 0.15) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 173, 239, 0.1) 0%, transparent 50%)",
      image: yellowMaize
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
    <div className="w-full bg-paper" ref={containerRef}>
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-forest/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="order-2 lg:order-1 relative">
              <div className="min-h-[500px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`hero-text-${active}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-[1px] bg-gold"></div>
                      <span className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">
                        {activeSlide.eyebrow}
                      </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-ink tracking-tightest leading-[0.85] mb-10">
                      {activeSlide.title}<br />
                      <span className="text-gold italic font-serif font-light">{activeSlide.accent}</span>
                    </h1>

                    <p className="text-ink/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
                      {activeSlide.subtitle}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/60 backdrop-blur-md border-l-4 border-gold p-8 rounded-r-2xl shadow-sm mb-16 max-w-lg"
                    >
                      <p className="text-ink/80 text-sm md:text-base font-medium leading-relaxed italic">
                        "{activeSlide.riceHighlight}"
                      </p>
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-8">
                      <Link
                        to="/contact"
                        className="group relative px-14 py-7 bg-gold text-white rounded-full overflow-hidden transition-all duration-500 hover:bg-forest shadow-2xl shadow-gold/20"
                      >
                        <span className="relative z-10 text-xs font-black tracking-[0.2em] uppercase">
                          {activeSlide.cta}
                        </span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                      </Link>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={handlePrev}
                          className="w-16 h-16 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:text-gold hover:border-gold transition-all duration-300"
                          aria-label="Previous slide"
                        >
                          <ArrowLeft size={24} />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-16 h-16 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:text-gold hover:border-gold transition-all duration-300"
                          aria-label="Next slide"
                        >
                          <ArrowRight size={24} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Step Indicators */}
              <div className="mt-20 flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 transition-all duration-700 rounded-full ${
                      i === active ? "w-24 bg-gold" : "w-6 bg-ink/10 hover:bg-ink/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Visual Content */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,173,239,0.15)] bg-paper-dark">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`hero-image-${active}`}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="absolute inset-8 border border-white/30 rounded-[3rem] pointer-events-none z-10"></div>
                
                {/* Float Badge */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-12 right-12 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl z-20 border border-white/50 hidden md:block"
                >
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gold mb-2">Quality Grade</p>
                  <p className="text-2xl font-light text-ink">Export Certified</p>
                </motion.div>
              </div>
              
              {/* Backglow for image */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/20 rounded-full blur-[60px] -z-10"></div>
            </div>
          </div>
        </div>

        {/* Floating Marquee Bridge */}
        <div className="absolute bottom-0 w-full bg-white/40 backdrop-blur-md border-y border-ink/5 py-8 z-20">
          <div className="flex animate-marquee whitespace-nowrap gap-20">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex gap-20 items-center">
                {["IR 64 Parboiled Rice", "Sona Masoori", "Yellow Maize", "Fresh Pomegranate", "Red Onions"].map((item, i) => (
                  <div key={i} className="flex items-center gap-20">
                    <span className="text-ink/30 text-[11px] font-black tracking-[0.4em] uppercase">{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
              transition={{ duration: 0.8 }}
              className="md:col-span-2 bg-paper-dark rounded-3xl p-12 relative overflow-hidden group border border-ink/5"
            >
              <img src={sonaMasooriRice} alt="Farming" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">01 / Sourcing</span>
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-ink mb-6">Direct from Farms</h3>
                  <p className="text-ink/60 font-light max-w-md text-lg leading-relaxed">We partner directly with certified growers to ensure traceability and premium quality from the root.</p>
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
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-12 flex flex-col justify-between group relative overflow-hidden border border-ink/5"
            >
              <div className="absolute inset-0  group-hover:scale-105 transition-all duration-1000 overflow-hidden">
                <img src={freshOnions} alt="Logistics" className="w-full h-full object-cover" />
              </div>
              <span className="relative z-10 text-ink/30 text-[10px] font-bold tracking-[0.2em] uppercase">03 / Logistics</span>
              <div className="relative z-10">
                <h3 className="text-3xl font-light text-ink mb-4">Global Delivery</h3>
                <p className="text-ink/50 font-light leading-relaxed">Seamless supply chain management ensuring timely arrival at any port worldwide.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {[
              { name: 'IR 64 Parboiled Rice', img: ir64Rice, desc: 'Premium long-grain non-basmati.' },
              { name: 'Sona Masoori Rice', img: sonaMasooriRice, desc: 'Lightweight and aromatic grain.' },
              { name: 'Fresh Pomegranate', img: freshPomegranate, desc: 'Export-grade Bhagwa variety.' },
              { name: 'Yellow Maize', img: yellowMaize, desc: 'Quality human & feed grade maize.' },
              { name: 'Fresh Onions', img: freshOnions, desc: 'Export-quality red & pink onions.' }
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
      
      {/* Certifications Section */}
      <section className="py-24 px-6 md:px-12 bg-paper-dark border-t border-ink/5">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Trust & Compliance</span>
            <h2 className="text-4xl md:text-5xl font-light text-ink tracking-tightest mb-6">Global Standards. <span className="text-forest italic font-serif">Certified Trust.</span></h2>
            <p className="text-ink/50 font-light max-w-2xl mx-auto">Our facilities and processes adhere to the highest international food safety and trade regulations, ensuring uncompromising quality for every shipment.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-700">
            {[
              { id: 'APEDA', name: 'APEDA', logo: 'https://uxdt.nic.in/wp-content/uploads/2020/06/APEDA.png' },
              { id: 'FSSAI', name: 'FSSAI', logo: 'https://www.fssai.gov.in/upload/uploadfiles/files/fssai_logo.png' },
              { id: 'IEC', name: 'Directorate General of Foreign Trade', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/International_Electrotechnical_Commission_logo.svg/1024px-International_Electrotechnical_Commission_logo.svg.png' },
              { id: 'GST', name: 'GST Council', logo: 'https://icon-library.com/images/gst-icon/gst-icon-5.jpg' }
              
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group grayscale hover:grayscale-0 transition-all duration-500 w-full max-w-[180px]"
              >
                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 aspect-video flex items-center justify-center border border-white/60 hover:border-gold/30 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
                  <img src={cert.logo} alt={cert.name} className="max-w-full max-h-full object-contain filter " />
                </div>
                <div className="mt-4 text-[9px] font-bold tracking-[0.2em] uppercase text-ink/30 group-hover:text-gold transition-colors">{cert.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
