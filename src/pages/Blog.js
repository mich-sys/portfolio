import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getAllPosts } from '../data/posts';

const Blog = () => {
  const posts = getAllPosts();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-stone-900 dark:text-white mb-4">
            Writing
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Thoughts on software engineering, architecture decisions, and lessons learned from building things.
          </p>
        </motion.div>

        {/* Posts List */}
        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link 
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-500">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-semibold text-stone-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
