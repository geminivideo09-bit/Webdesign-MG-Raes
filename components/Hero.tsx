import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PROJECTS } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 50]);
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Smooth rotations
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -45]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-brand-dark perspective-1000">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] animate-float opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-float-delayed opacity-60" />
      </div>

      {/* Central 3D Abstract Geometric Model */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
           className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] preserve-3d opacity-20 md:opacity-40"
           animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            {/* Outer Cube Faces */}
            {[
                'translateZ(150px)',
                'rotateY(180deg) translateZ(150px)',
                'rotateY(90deg) translateZ(150px)',
                'rotateY(-90deg) translateZ(150px)',
                'rotateX(90deg) translateZ(150px)',
                'rotateX(-90deg) translateZ(150px)'
            ].map((transform, i) => (
                <div 
                    key={`outer-${i}`}
                    className="absolute inset-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] m-auto border border-white/20 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-[1px]"
                    style={{ transform }}
                />
            ))}
            
            {/* Inner Core Cube (Counter-Rotation) */}
             <motion.div 
                className="absolute inset-0 flex items-center justify-center preserve-3d"
                animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             >
                 {[
                'translateZ(60px)',
                'rotateY(180deg) translateZ(60px)',
                'rotateY(90deg) translateZ(60px)',
                'rotateY(-90deg) translateZ(60px)',
                'rotateX(90deg) translateZ(60px)',
                'rotateX(-90deg) translateZ(60px)'
                ].map((transform, i) => (
                    <div 
                        key={`inner-${i}`}
                        className="absolute inset-0 w-[100px] h-[100px] md:w-[120px] md:h-[120px] m-auto border border-brand-accent/40 bg-brand-accent/10 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                        style={{ transform }}
                    />
                ))}
                {/* Glowing Center Point */}
                <div className="absolute w-4 h-4 bg-brand-accent rounded-full blur-md shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
             </motion.div>
        </motion.div>
      </div>

      {/* Floating 3D Elements (Images) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        
        {/* Top Left Organic Shape */}
        <motion.div 
            style={{ y: y1, rotate: rotate1 }}
            className="absolute top-[15%] left-[5%] md:left-[10%] w-48 h-64 md:w-72 md:h-96"
        >
             <div className="w-full h-full rounded-organic-1 overflow-hidden shadow-2xl border border-white/5 bg-brand-surface/50 backdrop-blur-sm relative">
                <img 
                    src={PROJECTS[0].image} 
                    alt="Restaurant Design" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" />
             </div>
        </motion.div>

        {/* Bottom Right Organic Shape */}
        <motion.div 
            style={{ y: y2, rotate: rotate2 }}
            className="absolute bottom-[20%] right-[5%] md:right-[10%] w-56 h-56 md:w-80 md:h-80"
        >
             <div className="w-full h-full rounded-organic-2 overflow-hidden shadow-2xl border border-white/5 bg-brand-surface/50 backdrop-blur-sm relative">
                <img 
                    src={PROJECTS[1].image} 
                    alt="Gym Design" 
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                 <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-transparent opacity-80" />
             </div>
        </motion.div>

        {/* Small Floating Decor */}
        <motion.div 
            style={{ y: y3 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] right-[20%] w-24 h-24 border border-brand-accent/20 rounded-full opacity-50"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300">
                Elevating Local Businesses
            </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-sm relative z-20">
          Webdesign MG <br/>
          <span className="italic font-light text-brand-accent">by Raes</span>
        </h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10 relative z-20"
        >
            We transform local businesses into digital landmarks. 
            Stunning websites for <span className="text-white font-medium">restaurants</span>, 
            <span className="text-white font-medium"> gyms</span>, and 
            <span className="text-white font-medium"> ambitious brands</span>.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-20"
        >
            <a 
                href="#contact"
                className="group relative px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-sm tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
                <span className="relative z-10">START PROJECT</span>
                <div className="absolute inset-0 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">START PROJECT</span>
            </a>
            
            <a 
                href="#portfolio"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm tracking-widest hover:bg-white/5 transition-all"
            >
                VIEW PORTFOLIO
            </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;