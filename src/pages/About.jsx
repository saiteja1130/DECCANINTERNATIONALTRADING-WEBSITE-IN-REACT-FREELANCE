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
            <div className="w-12 h-[1px] bg-ink/20"></div>
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
              Deccan International Trading Company is a premier export house specializing in high-quality agricultural commodities.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease }}
            className="bg-ink text-white p-12 md:p-20 rounded-3xl"
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

      </div>
    </div>
  );
}
