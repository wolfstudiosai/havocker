"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BLOG_POSTS, FORUM_THREADS } from '@/lib/constants';

// HELPER COMPONENTS
import BlogHero from './components/BlogHero';
import BlogControls from './components/BlogControls';
import BlogGrid from './components/BlogGrid';
import ForumList from './components/ForumList';
import ArticleView from './components/ArticleView';
import ThreadView from './components/ThreadView';

const BlogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'NEWS' | 'FORUM'>('NEWS');
  const [activeSlide, setActiveSlide] = useState(0);
  const [filter, setFilter] = useState('ALL');
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [selectedThread, setSelectedThread] = useState<any>(null);

  // DATA FILTERING
  const featuredPosts = BLOG_POSTS.filter(p => p.featured);
  const filteredPosts = filter === 'ALL'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === filter);

  // ANIMATION VARIANTS
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="w-full min-h-screen bg-white pt-[80px] relative">
      {/* --- HEADER --- */}
      <div className="w-full bg-white border-b border-black/5 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-end relative z-10">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-[0.4em] text-ink/40 uppercase mb-4">
            COMMUNITY HUB /// LATEST INTEL
          </span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-ink mb-[-10px]">
            HAVØK FEED
          </h1>
        </div>
      </div>

      <div className="relative">
        <AnimatePresence>
          {activeTab === 'NEWS' && !selectedPost && !selectedThread && (
            <BlogHero
              featuredPosts={featuredPosts}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          )}
        </AnimatePresence>

        <BlogControls
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          filter={filter}
          setFilter={setFilter}
          resetSelection={() => { setSelectedPost(null); setSelectedThread(null); }}
        />

        <div className="relative min-h-[50vh] bg-dark">
          {activeTab === 'NEWS' ? (
            <BlogGrid
              posts={filteredPosts}
              onSelectPost={setSelectedPost}
              gridVariants={gridVariants}
            />
          ) : (
            <ForumList
              threads={FORUM_THREADS}
              onSelectThread={setSelectedThread}
              gridVariants={gridVariants}
            />
          )}
        </div>
      </div>

      <ArticleView post={selectedPost} onClose={() => setSelectedPost(null)} />
      <ThreadView thread={selectedThread} onClose={() => setSelectedThread(null)} />

    </div>
  );
};

export default BlogPage;
