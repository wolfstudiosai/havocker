"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BLOG_POSTS, FORUM_THREADS } from '@/lib/constants';

import BlogHero from './components/BlogHero';
import BlogControls from './components/BlogControls';
import BlogGrid from './components/BlogGrid';
import ForumList from './components/ForumList';
import ThreadView from './components/ThreadView';

const BlogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'NEWS' | 'FORUM'>('NEWS');
  const [activeSlide, setActiveSlide] = useState(0);
  const [filter, setFilter] = useState('ALL');
  const [selectedThread, setSelectedThread] = useState<any>(null);

  const featuredPosts = BLOG_POSTS.filter(p => p.featured);
  const filteredPosts = filter === 'ALL'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === filter);

  return (
    <div className="w-full min-h-screen bg-surface pt-[80px] relative">

      <div className="flex flex-col p-6 sm:p-8 lg:p-10">
        <span className="text-[10px] font-bold tracking-[0.4em] text-ink/40 uppercase mb-4">
          COMMUNITY HUB /// LATEST INTEL
        </span>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-none tracking-tighter text-ink">HAVØK FEED</h2>
      </div>

      <div className="relative">
        <AnimatePresence>
          {activeTab === 'NEWS' && !selectedThread && (
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
          resetSelection={() => setSelectedThread(null)}
        />

        <div className="relative min-h-[50vh] bg-dark">
          {activeTab === 'NEWS' ? (
            <BlogGrid posts={filteredPosts} />
          ) : (
            <ForumList
              threads={FORUM_THREADS}
              onSelectThread={setSelectedThread}
            />
          )}
        </div>
      </div>

      <ThreadView thread={selectedThread} onClose={() => setSelectedThread(null)} />

    </div>
  );
};

export default BlogPage;
