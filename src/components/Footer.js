import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500 dark:text-stone-500">
            {new Date().getFullYear()} Michael Ademeji
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
