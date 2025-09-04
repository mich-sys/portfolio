import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  GitBranch, 
  Globe, 
  Shield, 
  Zap,
  TrendingUp,
  Rocket,
  Star
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Rock Solid 💪",
      subtitle: "Technologies I'm confident with",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      skills: [
        { name: "React/Redux & Javascript", level: 94, icon: Code2 },
        { name: "Nodejs & MongoDB", level: 90, icon: Database },
        { name: "Git & Github", level: 88, icon: GitBranch }
      ]
    },
    {
      title: "Getting Better 📈",
      subtitle: "Skills I'm actively improving",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      skills: [
        { name: "Java Spring Boot", level: 25, icon: Globe },
        { name: "SQL & Database Design", level: 70, icon: Zap },
        { name: "ci/cd pipelines", level: 40, icon: Shield }
      ]
    },
    {
      title: "Learning Now 🚀",
      subtitle: "Technologies I'm exploring",
      icon: Rocket,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      skills: [
        { name: "java spring boot", level: 25, icon: Globe },
        { name: "docker & containerization", level: 10, icon: Zap },
        { name: "system design patterns", level: 30, icon: Code2 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I'm Good At <span className="gradient-text">💪</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A mix of technologies I've mastered, ones I'm improving, and exciting new areas I'm exploring
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`${category.bgColor} ${category.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group`}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                >
                  <category.icon size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-sm`}>
                          <skill.icon size={16} />
                        </div>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(skill.level / 20)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1.0 }}
                        className="absolute -top-8 right-0 px-2 py-1 bg-white dark:bg-dark-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-dark-600"
                      >
                        {skill.level}%
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="text-center mt-6"
              >
                <motion.div
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Keep learning!</span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Rocket size={16} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl p-8 border border-primary-200 dark:border-primary-800 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent dark:from-primary-700/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-200/20 to-transparent dark:from-primary-700/15 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-2xl font-bold mb-4 text-gray-800 dark:text-white"
              >
                Always Learning, Always Growing 🌱
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
              >
                Technology moves fast, and I'm committed to staying current with the latest tools and best practices. 
                Every project is an opportunity to learn something new!
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Let's Build Something Together</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
