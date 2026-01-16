import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial critical asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-6 relative"
            >
               <div className="w-20 h-20 border-t-2 border-r-2 border-brand-accent rounded-full animate-spin"></div>
               <div className="absolute inset-0 w-12 h-12 m-auto border-b-2 border-l-2 border-white rounded-full animate-spin-slow"></div>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white font-serif text-3xl font-bold tracking-widest"
            >
                MG<span className="text-brand-accent">.</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-white ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
        <Navbar />
        <main className="relative z-0">
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;