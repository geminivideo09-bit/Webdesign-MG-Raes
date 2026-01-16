import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Award, Users, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          
          {/* Image Section */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             {/* Decorative Organic Blobs */}
             <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-accent/20 rounded-organic-3 blur-2xl animate-float" />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed" />
             
             <div className="relative z-10 rounded-organic-1 overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] md:aspect-square group">
                <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none"></div>
                <img 
                    src={TEAM[0].image} 
                    alt={TEAM[0].name} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-30 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                    <h4 className="font-bold text-white">{TEAM[0].name}</h4>
                    <p className="text-xs text-brand-accent uppercase tracking-widest">{TEAM[0].role}</p>
                </div>
             </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent font-mono text-sm mb-4 block">03 / ABOUT</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Designed to make a <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">lasting impression.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-10 font-light">
                <p>
                    <strong className="text-white font-medium">Webdesign MG by Raes</strong> bridges the gap between functional technology and emotive design. We understand that for a local business, a website isn't just a digital brochure—it's your most powerful sales tool.
                </p>
                <p>
                    Whether you run a bustling restaurant, a boutique gym, or a consultancy, our approach combines rigorous local SEO strategy with pure artistic freedom to create digital products that convert visitors into loyal customers.
                </p>
            </div>

            {/* Stats / Features */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                    <Award className="text-brand-accent mb-3" size={28} />
                    <h4 className="text-2xl font-bold text-white mb-1">10+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                    <Users className="text-brand-accent mb-3" size={28} />
                    <h4 className="text-2xl font-bold text-white mb-1">50+</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Happy Clients</p>
                </div>
                <div>
                    <Coffee className="text-brand-accent mb-3" size={28} />
                    <h4 className="text-2xl font-bold text-white mb-1">∞</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Coffees Drunk</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;