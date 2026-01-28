import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogGridProps {
  posts: any[];
  onSelectPost: (post: any) => void;
  gridVariants: any;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onSelectPost, gridVariants }) => {
  return (
    <motion.div
      className="w-full"
      variants={gridVariants}
      initial="visible"
      animate="visible"
      exit="hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-b border-black/5 bg-white">
        {posts.map((post, idx) => (
          <motion.div
            layoutId={`post-${post.id}`}
            key={post.id}
            onClick={() => onSelectPost(post)}
            className={`group relative aspect-square overflow-hidden bg-black/5 border-r border-black/5 cursor-pointer ${idx % 4 === 3 ? 'border-r-0' : ''}`}
          >
            <motion.img
              layoutId={`post-image-${post.id}`}
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-[9px] font-bold tracking-[0.3em] text-acid mb-2 uppercase">
                  {post.category} /// {post.date}
                </span>
                <motion.h3 layoutId={`post-title-${post.id}`} className="text-2xl font-bold text-white tracking-tight leading-none mb-4 uppercase">
                  {post.title}
                </motion.h3>
                <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white hover:text-acid transition-colors uppercase">
                  READ ENTRY <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>

            <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <span className="px-2 py-1 bg-white/10 backdrop-blur-sm text-[9px] font-bold tracking-[0.2em] text-white uppercase border border-white/10">
                {post.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full py-16 flex flex-col items-center justify-center">
        <p className="text-[10px] font-bold tracking-[0.3em] text-ink/40 uppercase mb-6">END OF STREAM</p>
        <button className="px-8 py-3 border border-ink/10 bg-white hover:bg-ink hover:text-white transition-all text-[10px] font-bold tracking-[0.3em] uppercase shadow-sm">
          LOAD ARCHIVES
        </button>
      </div>
    </motion.div>
  );
};

export default BlogGrid;
