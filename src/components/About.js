import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/mich-sys',
      icon: Github,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ademeji-michael-571227184/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Resume',
      url: 'Resume.pdf',
      icon: FileText,
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hey there!</span> 👋
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white dark:bg-dark-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-dark-700 p-8 md:p-12 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent dark:from-primary-900/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-100/30 to-transparent dark:from-primary-900/15 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="text-center space-y-8 relative z-10">
              {/* Avatar Placeholder */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="relative w-36 h-36 mx-auto"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl relative overflow-hidden">
                  <span className="relative z-10">OA</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 opacity-30 blur-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Bio Text */}
              <div className="space-y-6 max-w-3xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I'm a software engineer who is excited about solving real-world problems with clean, efficient code. When I'm not coding, you'll probably find me exploring new technologies, contributing to open source, or just enjoying a good cup of coffee.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I believe in writing code that not only works but also makes other developers smile when they read it. Let's build something awesome together!
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center space-x-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 ${link.color} hover:shadow-xl border border-gray-200 dark:border-dark-600 overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <link.icon size={20} className="relative z-10" />
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="relative z-10"
                      initial={{ x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
