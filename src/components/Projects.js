import React from 'react';
import { motion } from 'framer-motion';
import {  Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FreePhotoBox",
      description: "Cloud-native photo management platform with automated analytics and observability across Azure and AWS. Features serverless architecture with real-time monitoring.",
      stack: ["React", "Node.js", "Azure", "AWS Lambda", "DynamoDB"],
      impact: "Delivered always-on media workflow with serverless analytics and proactive monitoring for photo ingestion events.",
      links: {
        live: "https://www.freephotobox.me",
        article: "https://medium.com/@ademejimichael34/freephotobox-full-architecture-deep-dive-6e878aeb4d22"
      },
      featured: true
    },
    {
      title: "Banking Dashboard",
      description: "Modern banking interface allowing users to view accounts, transactions, and manage their finances with a clean, intuitive design.",
      stack: ["React", "JavaScript", "Tailwind CSS"],
      impact: "Built responsive dashboard with smooth interactions and optimized performance.",
      links: {
        live: "https://bank-web-app.netlify.app/",
        code: "https://github.com/mich-sys/bank-web-app"
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-stone-100/50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <span className="text-sm font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wider">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white">
            Projects I've built
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
            A selection of projects that showcase my experience in full-stack development and cloud architecture.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`p-8 md:p-10 rounded-2xl border transition-all duration-300 ${
                project.featured 
                  ? 'bg-white dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600' 
                  : 'bg-white dark:bg-stone-800/30 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
              }`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-stone-900 dark:text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Links */}
                    <div className="flex items-center gap-3 shrink-0">
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-white transition-colors"
                          aria-label="View source code"
                        >
                          <Github size={20} strokeWidth={1.5} />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-700/50 hover:bg-stone-200 dark:hover:bg-stone-700 rounded-lg transition-colors"
                        >
                          Visit
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Impact */}
                  <p className="text-sm text-stone-500 dark:text-stone-500 border-l-2 border-stone-200 dark:border-stone-700 pl-4">
                    {project.impact}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/mich-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            View more on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
