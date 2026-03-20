import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";
  const useLightText = !isScrolled && isHomePage;

  const textColor = useLightText ? "text-white" : "text-ink";
  const textMuted = useLightText
    ? "text-white/60 hover:text-white"
    : "text-ink/50 hover:text-ink";
  const borderColor = useLightText ? "border-white/20" : "border-ink/20";
  const logoBorder = useLightText ? "border-white" : "border-ink";
  const btnHover = useLightText
    ? "hover:bg-white hover:text-ink"
    : "hover:bg-ink hover:text-white";

  return (
    <>
      {/* Desktop & Mobile Navbar - Full Width Edge-to-Edge */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-paper/90 backdrop-blur-xl border-ink/10 py-4 shadow-sm"
            : "bg-transparent border-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div
              className={`w-10 h-10 flex items-center justify-center text-[13px] font-bold tracking-[0.2em] transition-colors duration-500 border ${logoBorder} ${textColor}`}
            >
              DT
            </div>
            <span
              className={`font-medium tracking-[0.2em] text-[13px] uppercase transition-colors duration-500 ${textColor}`}
            >
              Deccan
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  location.pathname === link.path ? "text-gold" : textMuted
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex text-[13px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-500 border ${borderColor} ${textColor} ${btnHover}`}
          >
            Get Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-500 relative z-50 ${isMobileMenuOpen ? "text-ink" : textColor}`}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-paper pt-28 px-6 pb-8 flex flex-col"
          >
            <div className="flex flex-col gap-8 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.05 + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl font-light tracking-tighter ${
                      location.pathname === link.path ? "text-gold" : "text-ink"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-8 border-t border-ink/10"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] text-ink/40 uppercase mb-4">
                Contact
              </p>
              <a
                href="tel:+917671996989"
                className="block text-xl font-light text-ink mb-2 hover:text-gold transition-colors"
              >
                +91 7671996989
              </a>
              <a
                href="mailto:info@deccaninternational.com"
                className="block text-xl font-light text-ink hover:text-gold transition-colors"
              >
                info@deccaninternational.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
