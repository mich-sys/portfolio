import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../data/posts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
      <article className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            All articles
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-500 mb-4">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-2.5 py-1 text-xs font-medium text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-blog"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
            
            <Link 
              to="/#contact"
              className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Have thoughts? Let's discuss →
            </Link>
          </div>
        </motion.footer>
      </article>
    </div>
  );
};

export default BlogPost;
