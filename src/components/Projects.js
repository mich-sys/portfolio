import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FreePhotoBox",
      description: "A cloud-native photo management platform combining a React experience with automated analytics and observability across Azure and AWS.",
      stack: ["React", "Node.js", "Azure", "AWS S3", "AWS Lambda", "DynamoDB", "CloudWatch"],
      role: "Architected the multi-cloud topology, implemented the Node.js services, and automated analytics pipelines and alerting.",
      outcome: "Delivered an always-on media workflow with serverless analytics and proactive monitoring for photo ingestion events.",
      links: {
        live: "https://www.freephotobox.me",
        code: "https://medium.com/@ademejimichael34/freephotobox-full-architecture-deep-dive-6e878aeb4d22",
        writeup: "https://medium.com/@ademejimichael34/freephotobox-full-architecture-deep-dive-6e878aeb4d22"
      },
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Banking Web Application",
      description: "A banking web design that allows users to view their accounts and transactions.",
      stack: ["Javascript", "React", "Tailwind CSS"],
      role: "Created a smooth user experience",
      outcome: "Understand the basics of React and how to use it to build a web application",
      links: {
        live: "https://bank-web-app.netlify.app/",
        code: "https://github.com/mich-sys/bank-web-app",
        writeup: "#"
      },
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Tic Tac Toe ",
      description: "This one was a fun challenge that pushed my skills and taught me the basics and concepts of React.",
      stack: ["React", "Tailwind CSS"],
      role: "Built the game from scratch and optimized the game logic",
      outcome: "The game is a fun and challenging way to test your React skills",
      links: {
        live: "https://ticky-tackies.netlify.app/",
        code: "https://github.com/mich-sys/tic-tac-toe",
        writeup: "#"
      },
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="section-padding">
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
            Stuff I've Built <span className="gradient-text">🚀</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some projects I'm proud of. Each one taught me something new and helped me grow as a developer.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-800 rounded-3xl shadow-xl border border-gray-100 dark:border-dark-700 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {/* Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>
                
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">What I Did</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {project.role}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2"> Result</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.links.writeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
                  >
                    <FileText size={16} />
                    <span>Blog Post</span>
                  </motion.a>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-6 right-6 text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              </div>
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
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Have a Project in Mind? 💡
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's discuss how we can work together to bring your ideas to life!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
