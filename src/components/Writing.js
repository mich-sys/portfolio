import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '../data/posts';

const Writing = () => {
  const recentPosts = getAllPosts().slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="writing" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <span className="text-sm font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wider">
            Writing
          </span>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 dark:text-white">
              Recent articles
            </h2>
            <Link 
              to="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Posts List */}
        <div className="space-y-1">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/blog/${post.slug}`}
                className="group block py-6 border-b border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-stone-500 dark:text-stone-500 shrink-0">
                    <span>{formatDate(post.date)}</span>
                    <span className="hidden sm:inline">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="sm:hidden mt-8"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            View all articles
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;
