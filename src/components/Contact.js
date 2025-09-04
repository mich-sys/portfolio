import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Coffee, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
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
              Let's Connect! <span className="gradient-text">🤝</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, interesting projects, or just chatting about tech.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-white dark:bg-dark-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-dark-700 p-8 md:p-12 overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-100/40 to-transparent dark:from-primary-900/20 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-100/30 to-transparent dark:from-primary-900/15 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-primary-100/20 to-transparent dark:from-primary-900/10 rounded-full -translate-x-12 -translate-y-12"></div>
            <div className="text-center space-y-8 relative z-10">
              {/* Main Contact Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center justify-center space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30"
                  >
                    <Mail size={32} className="text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">Send A Message To Michael</span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                  Whether you have a project idea, want to discuss potential opportunities, or just want to chat about the latest in tech, I'd love to hear from you!
                </motion.p>
              </div>

              {/* Contact Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  { icon: Mail, title: "Email", description: "Perfect for detailed discussions and project proposals", color: "blue" },
                  { icon: MessageCircle, title: "Quick Chat", description: "Great for quick questions and initial conversations", color: "green" },
                  { icon: Coffee, title: "Coffee Chat", description: "Let's meet up and discuss over a cup of coffee", color: "orange" }
                ].map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group text-center p-6 rounded-2xl bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm border border-gray-200 dark:border-dark-600 hover:bg-white dark:hover:bg-dark-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-${option.color}-100 dark:bg-${option.color}-900/30 flex items-center justify-center text-${option.color}-600 dark:text-${option.color}-400 shadow-lg`}
                    >
                      <option.icon size={28} />
                    </motion.div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3 text-lg">{option.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {option.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="pt-6"
              >
                <motion.a
                  href="mailto:you@example.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Send me a message</span>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ x: 3, rotate: 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mt-12"
          >
            <div className="relative bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl p-8 border border-primary-200 dark:border-primary-800 overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-200/30 to-transparent dark:from-primary-700/20 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary-200/20 to-transparent dark:from-primary-700/15 rounded-full translate-y-10 -translate-x-10"></div>
              
              <div className="relative z-10">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-gray-700 dark:text-gray-300 font-medium text-lg"
                >
                  💡 <span className="gradient-text font-semibold">Pro tip:</span> Include details about your project or what you'd like to discuss - it helps me prepare and respond more effectively!
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
