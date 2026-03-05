import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { label: 'Focus', value: 'Full-Stack & Cloud' },
    { label: 'Location', value: 'Open to Remote' },
    { label: 'Experience', value: 'Building Scalable Systems' },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Label */}
          <div>
            <span className="text-sm font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wider">
              About
            </span>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed">
                I'm a software engineer passionate about building robust, scalable applications. 
                I specialize in cloud architecture and full-stack development, with experience 
                across AWS, Azure, and modern JavaScript ecosystems.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                My approach combines technical depth with pragmatic problem-solving. I enjoy 
                architecting systems that are not only functional but maintainable and 
                performant at scale. Currently focused on cloud-native applications and 
                serverless architectures.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                When I'm not coding, I'm usually exploring new technologies, contributing 
                to technical discussions, or refining my understanding of distributed systems.
              </p>
            </div>

            {/* Quick Info */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-l-2 border-stone-200 dark:border-stone-800 pl-4"
                >
                  <p className="text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-stone-900 dark:text-white font-medium mt-1">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
