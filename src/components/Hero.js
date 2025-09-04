import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Coffee, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-primary-100/20 dark:from-primary-900/20 dark:via-transparent dark:to-primary-800/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(237,122,26,0.1),transparent_50%)]"></div>
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(237,122,26,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(237,122,26,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(237,122,26,0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container-width px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              <motion.span 
                className="gradient-text block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hey there!
              </motion.span>
              <motion.span 
                className="text-4xl md:text-6xl text-gray-800 dark:text-white block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm Michael
              </motion.span>
            </motion.h1>
            
            {/* Professional Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block"
            >
              <span className="px-6 py-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full text-lg font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-700 shadow-lg">
                Software Engineer & Problem Solver
              </span>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A software engineer who gets excited about solving real-world problems with clean, efficient code
          </motion.p>

          {/* Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center items-center space-x-12"
          >
            {[
              { icon: Code, label: "Code", color: "text-blue-500" },
              { icon: Coffee, label: "Coffee", color: "text-amber-500" },
              { icon: Heart, label: "Passion", color: "text-red-500" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm border border-gray-200 dark:border-dark-700 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className={item.color}
                >
                  <item.icon size={28} />
                </motion.div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Building Something Awesome</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
