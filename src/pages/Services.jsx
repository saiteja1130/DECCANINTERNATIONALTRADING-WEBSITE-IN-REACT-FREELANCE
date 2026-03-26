import { motion } from 'motion/react';

const processSteps = [
  { num: '01', title: 'Sourcing', desc: 'Direct procurement from trusted farmers ensuring highest quality raw materials.' },
  { num: '02', title: 'Inspection', desc: 'Rigorous quality checks in certified labs to meet international food safety standards.' },
  { num: '03', title: 'Processing', desc: 'Hygienic, state-of-the-art facilities using export-grade packaging materials.' },
  { num: '04', title: 'Customs', desc: 'Efficient handling of export documentation and phytosanitary certificates.' },
  { num: '05', title: 'Logistics', desc: 'Partnered with top shipping lines for safe, timely, and cost-effective delivery.' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Services() {
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
            <div className="w-12 h-[1px] bg-forest-dark/20"></div>
            <span className="text-ink/40 text-[10px] font-semibold tracking-[0.2em] uppercase">Services</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-light tracking-tightest text-ink mb-12"
          >
            End-to-End <br />
            <span className="text-forest italic font-serif pr-4">Export</span> Solutions.
          </motion.h1>
        </div>

        {/* Process - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-5xl font-light text-ink mb-6 tracking-tight">The Process</h2>
              <p className="text-ink/60 font-light text-lg leading-relaxed mb-12 max-w-md">
                We don't just sell products; we deliver peace of mind. Our comprehensive export services are designed to make international trade seamless and secure.
              </p>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-200 relative group">
                <div className="absolute inset-0 bg-forest-dark/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" 
                  alt="Logistics" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 pt-12 lg:pt-0">
            <div className="space-y-0">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease }}
                  className="py-12 border-b border-ink/10 group relative"
                >
                  <div className="absolute left-0 top-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
                  <div className="flex items-start gap-8">
                    <span className="text-xs font-semibold tracking-widest text-gold mt-2 w-8">{step.num}</span>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light text-ink mb-4 group-hover:text-forest transition-colors duration-500 tracking-tight">{step.title}</h3>
                      <p className="text-ink/60 font-light text-lg leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="bg-forest-dark rounded-[2rem] p-12 md:p-24 text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
              alt="Global Map" 
              className="w-full h-full object-cover mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tightest">Global Reach</h2>
            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-16 max-w-2xl">
              Exporting premium agricultural products across the globe. Our understanding of diverse market requirements ensures smooth customs clearance and delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Middle East', 'Southeast Asia', 'Europe', 'Africa', 'North America'].map((region, i) => (
                <div 
                  key={i} 
                  className="px-8 py-4 rounded-full border border-white/20 text-sm font-light tracking-wide hover:bg-white hover:text-ink transition-colors duration-300 cursor-default"
                >
                  {region}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
