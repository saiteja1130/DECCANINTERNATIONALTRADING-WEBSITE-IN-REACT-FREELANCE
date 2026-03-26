import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import logoImg from "../assets/image.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-forest-dark to-forest text-white pt-32 pb-8 px-6 md:px-12 rounded-t-[2.5rem] md:rounded-t-[4rem] mt-[-2rem] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 overflow-hidden rounded-full bg-white p-1.5 shadow-xl">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tightest leading-none">
                DECCAN INTERNATIONAL<br />
                <span className="text-gold-light text-xl uppercase font-medium tracking-widest">Trading & Co</span>
              </h2>
            </div>
            <p className="text-white/50 font-light text-lg max-w-md leading-relaxed">
              Premium agricultural exports. Delivering uncompromising quality from India to the world.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-lg font-light text-white/80 hover:text-gold transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-8">Connect</h3>
            <ul className="space-y-6">
              <li>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Email</span>
                <a href="mailto:Deccaninternationaltrading@gmail.com" className="text-lg font-light text-white/80 hover:text-gold transition-colors">
                  Deccaninternationaltrading@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Phone</span>
                <a href="tel:+917671996989" className="block text-lg font-light text-white/80 hover:text-gold transition-colors">
                  +91 7671996989
                </a>
                <a href="tel:+917702461962" className="block text-lg font-light text-white/80 hover:text-gold transition-colors">
                  +91 7702461962
                </a>
              </li>
              <li>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Location</span>
                <span className="text-lg font-light text-white/80">
                  Hyderabad, Telangana<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <p className="text-xs font-light text-white/40 tracking-wider">
            &copy; {new Date().getFullYear()} DECCAN INTERNATIONAL TRADING & CO
          </p>
          <div className="flex gap-8 text-xs font-light text-white/40 tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none flex justify-center translate-y-1/4 opacity-5">
        <span className="text-[25vw] font-bold tracking-tighter text-white whitespace-nowrap">
          DECCAN
        </span>
      </div>
    </footer>
  );
}
