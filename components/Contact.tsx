import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, ShieldCheck, Clock, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!formState.name.trim()) return "Name is required";
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email)) return "Valid email is required";
    if (!formState.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
        setError(validationError);
        return;
    }
    setError('');
    setIsSubmitting(true);

    try {
        const response = await fetch("https://formsubmit.co/ajax/abdel.webdesign.mg@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formState.name,
                email: formState.email,
                message: formState.message,
                _subject: `New Lead from Portfolio: ${formState.name}`
            })
        });

        if (response.ok) {
            setIsSuccess(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 8000);
        } else {
            setError("Something went wrong. Please try again later.");
        }
    } catch (err) {
        setError("Network error. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center border-b border-white/10 pb-12">
             <span className="text-brand-accent font-mono text-sm mb-3 block">04 / CONTACT</span>
             <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4">Let's build something <br/>extraordinary.</h2>
             <p className="text-gray-400 text-lg">Send us a message and get a free, no-obligation quote within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Trust Column */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
             <div className="bg-brand-surface p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-bold mb-6">Why work with MG?</h3>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">100% Satisfaction Guarantee</h4>
                            <p className="text-xs text-gray-400 mt-1">We don't stop until you love your design.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <Clock size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">Fast Turnaround</h4>
                            <p className="text-xs text-gray-400 mt-1">Launch your site in weeks, not months.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <Zap size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">SEO Optimized</h4>
                            <p className="text-xs text-gray-400 mt-1">Built to rank high on Google from day one.</p>
                        </div>
                    </li>
                </ul>
             </div>

             <div className="p-8 rounded-3xl border border-white/10 text-center">
                 <p className="text-gray-400 text-sm mb-4">Prefer to email directly?</p>
                 <a href="mailto:abdel.webdesign.mg@gmail.com" className="text-lg font-bold hover:text-brand-accent transition-colors block break-all">
                     abdel.webdesign.mg@gmail.com
                 </a>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-surface/30 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl"
            >
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center text-center h-[400px]">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/20">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-gray-400 max-w-xs mx-auto">Thank you for contacting Webdesign MG. We'll get back to you within 24 hours.</p>
                        <button 
                            onClick={() => setIsSuccess(false)}
                            className="mt-8 text-sm text-green-500 hover:text-green-400 font-bold uppercase tracking-widest"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-brand-accent transition-colors">Name</label>
                            <input
                            type="text"
                            id="name"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                            placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2 group">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-brand-accent transition-colors">Email</label>
                            <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                            placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-brand-accent transition-colors">Project Details</label>
                        <textarea
                        id="message"
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"
                        placeholder="Tell us about your business goals and what you need..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-brand-accent hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-brand-accent/25"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                    </form>
                )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;