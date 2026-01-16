import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-tighter z-50 relative group">
            MG<span className="text-brand-accent group-hover:text-white transition-colors">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-brand-accent text-white font-medium rounded-full text-xs uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              Get Quote <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 relative p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            className="fixed inset-0 bg-brand-dark flex flex-col justify-center items-center z-40 md:hidden overflow-hidden"
          >
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

            <ul className="space-y-8 text-center relative z-10">
              {NAV_ITEMS.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif font-bold text-white hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 relative z-10"
            >
                <a 
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest shadow-lg"
                >
                    Start Project
                </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;