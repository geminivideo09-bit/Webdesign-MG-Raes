import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const FILTERS = ['All', 'Restaurant', 'Gym', 'Real Estate', 'Local'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(activeFilter) || p.tags?.includes(activeFilter));

  return (
    <section id="portfolio" className="py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col lg:flex-row justify-between items-end border-b border-white/10 pb-8 gap-8">
          <div>
            <span className="text-brand-accent font-mono text-sm mb-3 block">02 / WORK</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Selected Works</h2>
            <p className="text-gray-400 max-w-md text-lg">
              Tailored digital experiences for ambitious local businesses.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {FILTERS.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                        activeFilter === filter 
                        ? 'bg-white text-brand-dark border-white font-bold' 
                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                    }`}
                >
                    {filter}
                </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
                <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col"
                >
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 w-full shadow-2xl bg-brand-surface cursor-pointer">
                    {/* Hover Mask Overlay */}
                    <div className="absolute inset-0 bg-brand-accent/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 flex flex-col items-center justify-center text-center p-6">
                         <span className="text-white font-serif text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                             {project.title}
                         </span>
                         <span className="text-white/80 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                             View Case Study
                         </span>
                    </div>
                    
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{project.description}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:text-white transition-all">
                        <ArrowUpRight size={18} />
                    </div>
                </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-24 text-center">
            <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors text-lg font-medium border-b border-brand-accent hover:border-white pb-1">
                Start Your Own Project <ArrowUpRight size={20} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;