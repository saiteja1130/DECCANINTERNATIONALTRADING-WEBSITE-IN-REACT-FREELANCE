import { motion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <div className="bg-paper min-h-screen pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Hero */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-[1px] bg-forest-dark/20"></div>
            <span className="text-ink/40 text-[10px] font-bold tracking-[0.2em] uppercase">About Us</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-light tracking-tighter text-ink mb-12"
          >
            Bridging local <br className="hidden md:block" />
            <span className="text-gold italic font-serif">farms</span> to global <br className="hidden md:block" />
            <span className="text-forest italic font-serif">markets.</span>
          </motion.h1>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" alt="Global Trade" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="text-4xl md:text-5xl font-light text-ink mb-10 leading-[1.1] tracking-tighter"
            >
              DECCAN INTERNATIONAL TRADING & CO is a premier export house specializing in high-quality agricultural commodities.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-ink/50 text-xl font-light leading-relaxed mb-12"
            >
              Based in India, we have established ourselves as a trusted partner for buyers worldwide. Our deep understanding of international trade standards, stringent quality control, and robust logistics network ensures that the finest produce reaches your doorstep seamlessly.
            </motion.p>

            <div className="grid grid-cols-2 gap-12 mt-8 pt-12 border-t border-ink/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease }}
              >
                <div className="text-6xl font-light text-ink mb-4 tracking-tighter">10+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-ink/40 font-bold">Years Exp.</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease }}
              >
                <div className="text-6xl font-light text-ink mb-4 tracking-tighter">25+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-ink/40 font-bold">Countries</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease }}
            className="bg-forest-dark text-white p-12 md:p-20 rounded-3xl"
          >
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-12">Mission</h3>
            <p className="text-3xl md:text-4xl font-light leading-snug text-white/90 tracking-tighter">
              To consistently deliver superior quality agricultural products to global markets while fostering sustainable farming practices and building long-term relationships.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="bg-white border border-black/5 p-12 md:p-20 rounded-3xl"
          >
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-forest mb-12">Vision</h3>
            <p className="text-3xl md:text-4xl font-light leading-snug text-ink tracking-tighter">
              To be recognized globally as the most trusted exporter of Indian commodities, known for our unwavering commitment to quality and integrity.
            </p>
          </motion.div>
        </div>

        {/* Imports & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[1px] bg-forest-dark/20"></div>
              <span className="text-ink/40 text-[10px] font-bold tracking-[0.2em] uppercase">Global Sourcing</span>
            </div>
            <h3 className="text-5xl font-light text-ink mb-12 tracking-tightest">Our <span className="text-gold italic font-serif">Imports.</span></h3>
            <div className="space-y-8">
              {[
                { title: 'Teak Wood', origin: 'Burma, Africa', desc: 'Premium grade timber sourced from sustainable forests across Burma and the African continent.', image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop' },
                { title: 'Cashew', origin: 'Africa', desc: 'High-yield raw cashew nuts imported directly from the finest growing regions in Africa.', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000&auto=format&fit=crop' }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-ink/5 hover:border-gold/20 hover:bg-gold/[0.02] transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-light text-ink">{item.title}</h4>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gold">{item.origin}</span>
                    </div>
                    <p className="text-ink/50 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[1px] bg-ink/20"></div>
              <span className="text-ink/40 text-[10px] font-bold tracking-[0.2em] uppercase">Trust & Compliance</span>
            </div>
            <h3 className="text-5xl font-light text-ink mb-12 tracking-tightest">Our <span className="text-forest italic font-serif">Certifications.</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'IEC', name: 'Import Export Code', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/International_Electrotechnical_Commission_logo.svg/1024px-International_Electrotechnical_Commission_logo.svg.png' },
                { id: 'FSSAI', name: 'Central License', logo: 'https://www.fssai.gov.in/upload/uploadfiles/files/fssai_logo.png' },
                { id: 'APEDA', name: 'RCMC Membership', logo: 'https://uxdt.nic.in/wp-content/uploads/2020/06/APEDA.png' },
                { id: 'GST', name: 'Tax Registration', logo: 'https://icon-library.com/images/gst-icon/gst-icon-5.jpg' }
              ].map((cert, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-black/5 flex flex-col justify-between aspect-square group hover:bg-forest-dark transition-all duration-700 hover:shadow-2xl hover:shadow-forest-dark/20 relative overflow-hidden">
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-2xl font-bold text-ink/10 group-hover:text-white/10 transition-colors uppercase">{cert.id}</span>
                    <div className="w-12 h-12 rounded-xl bg-paper-dark p-2 overflow-hidden flex items-center justify-center group-hover:bg-white/10">
                      <img src={cert.logo} alt={cert.id} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs font-bold tracking-widest text-gold mb-1 uppercase">{cert.id}</div>
                    <div className="text-sm font-light text-ink/60 group-hover:text-white/80 transition-colors leading-snug">{cert.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
