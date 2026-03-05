import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "SQL"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS (Lambda, S3, DynamoDB)", "Azure", "Docker", "CI/CD", "Serverless Architecture"]
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "REST APIs", "MongoDB", "PostgreSQL", "Agile/Scrum", "System Design"]
    }
  ];

  const currentlyLearning = ["Spring Boot", "Kubernetes", "Advanced System Design"];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <span className="text-sm font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white">
            Technical skills
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
            Technologies and tools I work with to build scalable, maintainable systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-stone-200 dark:border-stone-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm text-stone-500 dark:text-stone-500 shrink-0">
              Currently exploring:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
