import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-100/50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wider">
            Contact
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white mt-4 mb-6">
            Let's work together
          </h2>
          
          <p className="text-lg text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to connect, feel free to reach out.
          </p>

          <div className="space-y-6">
            <motion.a
              href="mailto:ademejimichael34@gmail.com"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 text-stone-900 dark:text-white group"
            >
              <Mail size={20} className="text-stone-500 dark:text-stone-500" />
              <span className="text-lg font-medium">ademejimichael34@gmail.com</span>
              <ArrowUpRight size={18} className="text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors" />
            </motion.a>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/ademeji-michael-571227184/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <a
                href="https://github.com/mich-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-stone-300 dark:text-stone-700">|</span>
              <a
                href="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
