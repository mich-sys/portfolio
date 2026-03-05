import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[#faf9f7] dark:bg-stone-950" />
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        <div className="space-y-8">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 dark:text-white">
              Michael Ademeji
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-stone-500 dark:text-stone-400 font-light">
              Software Engineer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed"
          >
            I design and build scalable systems with modern technologies. 
            Focused on cloud architecture, full-stack development, and delivering 
            solutions that make an impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToWork}
              className="px-6 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-medium rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors"
            >
              View my work
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-medium rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              Get in touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-5 pt-4"
          >
            {[
              { icon: Github, href: 'https://github.com/mich-sys', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ademeji-michael-571227184/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ademejimichael34@gmail.com', label: 'Email' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon size={22} strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-stone-300 dark:text-stone-600"
          >
            <ArrowDown size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
