import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogHeroProps {
  featuredPosts: any[];
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

const BlogHero: React.FC<BlogHeroProps> = ({ featuredPosts, activeSlide, setActiveSlide }) => {
  if (featuredPosts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '60vh' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-slate overflow-hidden group"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={featuredPosts[activeSlide].image}
            alt={featuredPosts[activeSlide].title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10 flex flex-col md:flex-row justify-between items-end">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-acid text-black text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
            FEATURED STORY /// {featuredPosts[activeSlide].category}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-3">
            {featuredPosts[activeSlide].title}
          </h1>
          {featuredPosts[activeSlide].subtitle && (
            <p className="text-sm md:text-base text-white/40 font-bold tracking-wide leading-relaxed max-w-xl mb-2">
              {featuredPosts[activeSlide].subtitle}
            </p>
          )}
          <span className="text-[9px] text-white/25 font-bold tracking-[0.2em] uppercase block mb-4">
            {featuredPosts[activeSlide].date}
          </span>
          <Link
            href={`/blog/${featuredPosts[activeSlide].id}`}
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-acid hover:text-white transition-colors"
          >
            READ ENTRY <ArrowRight size={12} />
          </Link>
        </div>

        <div className="flex items-center gap-4 mt-8 md:mt-0">
          <button
            onClick={() => setActiveSlide(prev => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
            className="w-12 h-12 rounded-lg border border-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="flex gap-2">
            {featuredPosts.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 transition-all duration-300 ${idx === activeSlide ? 'w-8 bg-acid' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveSlide(prev => (prev + 1) % featuredPosts.length)}
            className="w-12 h-12 rounded-lg border border-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHero;
