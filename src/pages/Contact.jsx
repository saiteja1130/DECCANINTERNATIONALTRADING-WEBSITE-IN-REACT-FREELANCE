import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    if (productParam) {
      setFormData(prev => ({ ...prev, product: productParam }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will get back to you soon!');
    setFormData({ name: '', email: '', product: '', message: '' });
  };

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
            <span className="text-ink/40 text-[10px] font-semibold tracking-[0.2em] uppercase">Contact</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-light tracking-tightest text-ink"
          >
            Let's <span className="text-gold italic font-serif pr-4">Talk.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
              className="sticky top-32 space-y-16"
            >
              <div>
                <h3 className="text-sm font-semibold tracking-widest text-ink/40 uppercase mb-6">Reach Us</h3>
                <div className="space-y-6">
                  <a href="tel:+917671996989" className="group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xl font-light text-ink group-hover:text-gold transition-colors duration-500">+91 7671996989</span>
                  </a>
                  <a href="https://wa.me/917702461962" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
                      <MessageCircle size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xl font-light text-ink group-hover:text-[#25D366] transition-colors duration-500">+91 7702461962</span>
                  </a>
                  <a href="mailto:info@deccaninternational.com" className="group flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-ink group-hover:bg-ink group-hover:text-white transition-all duration-500">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xl font-light text-ink group-hover:text-ink/60 transition-colors duration-500">info@deccaninternational.com</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest text-ink/40 uppercase mb-6">Headquarters</h3>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} strokeWidth={1.5} className="text-ink/60" />
                  </div>
                  <p className="text-xl font-light text-ink leading-relaxed">
                    Hyderabad, Telangana<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease, delay: 0.2 }}
              className="bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl shadow-ink/5"
            >
              <h3 className="text-3xl font-light text-ink mb-12 tracking-tight">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-ink/20 py-4 text-lg font-light text-ink focus:outline-none focus:border-gold transition-colors peer"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="absolute left-0 top-4 text-lg font-light text-ink/40 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold peer-valid:-top-6 peer-valid:text-sm">Full Name / Company</label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-ink/20 py-4 text-lg font-light text-ink focus:outline-none focus:border-gold transition-colors peer"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="absolute left-0 top-4 text-lg font-light text-ink/40 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold peer-valid:-top-6 peer-valid:text-sm">Email Address</label>
                  </div>
                </div>

                <div className="relative group">
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-4 text-lg font-light text-ink focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-ink/40">Select a product...</option>
                    <option value="IR 64 Parboiled Rice">IR 64 Parboiled Rice</option>
                    <option value="Sona Masoori Rice">Sona Masoori Rice</option>
                    <option value="Maize">Maize</option>
                    <option value="Onions">Onions</option>
                    <option value="Turmeric">Turmeric</option>
                    <option value="Pomegranate">Pomegranate</option>
                    <option value="Rice Bran">Rice Bran</option>
                    <option value="Other">Other</option>
                  </select>
                  <label htmlFor="product" className="absolute left-0 -top-6 text-sm font-light text-ink/40">Product of Interest</label>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-4 text-lg font-light text-ink focus:outline-none focus:border-gold transition-colors resize-none peer"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-lg font-light text-ink/40 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gold peer-valid:-top-6 peer-valid:text-sm">Message / Requirements</label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-6 bg-ink text-white rounded-full font-light tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-500 flex items-center justify-center gap-4"
                >
                  Send Message <Send size={16} />
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mt-32 bg-stone-200 rounded-[2rem] h-[600px] flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1920&auto=format&fit=crop" 
            alt="Map"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="relative z-20 bg-white/90 backdrop-blur-xl p-12 rounded-[2rem] shadow-2xl text-center max-w-sm"
          >
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-light text-ink text-2xl mb-2">Deccan International</h3>
            <p className="text-ink/60 text-lg font-light">Hyderabad, Telangana<br/>India</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
