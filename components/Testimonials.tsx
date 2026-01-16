import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-brand-accent font-mono text-sm mb-4 block">03 / REVIEWS</span>
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Trusted by Local Leaders</h2>
           <p className="text-gray-400">Join dozens of satisfied business owners who have transformed their digital presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-brand-dark p-8 rounded-3xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300"
                >
                    <Quote className="absolute top-8 right-8 text-brand-surface fill-brand-surface w-12 h-12 opacity-50" />
                    
                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed relative z-10">"{testimonial.content}"</p>

                    <div className="flex items-center gap-4">
                        <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-brand-accent/20"
                        />
                        <div>
                            <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Client Logos Marquee Placeholder */}
        <div className="mt-20 pt-10 border-t border-white/5 overflow-hidden">
            <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-8">Powering businesses across the city</p>
            <div className="flex space-x-12 animate-scroll w-max opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Logo Placeholders */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="text-xl font-bold font-serif text-white whitespace-nowrap">
                        CLIENT LOGO {i + 1}
                    </div>
                ))}
                {/* Duplicate for infinite loop */}
                {[...Array(10)].map((_, i) => (
                    <div key={`dup-${i}`} className="text-xl font-bold font-serif text-white whitespace-nowrap">
                        CLIENT LOGO {i + 1}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;