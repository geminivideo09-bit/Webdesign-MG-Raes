import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-gray relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
           <span className="text-brand-accent font-mono text-sm mb-4 block">01 / SERVICES</span>
           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expert Solutions for Local Growth</h2>
           <p className="text-gray-400 text-lg leading-relaxed">
              We don't just design websites; we create digital engines that drive customers to your door. 
              Specializing in Restaurants, Fitness Centers, and Service-Based Businesses.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-[2rem] bg-brand-surface/50 border border-white/5 hover:border-brand-accent/40 hover:bg-brand-surface transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center mb-8 text-white group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:border-brand-accent/20">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                
                <div className="mt-6 w-8 h-[1px] bg-brand-accent/30 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;