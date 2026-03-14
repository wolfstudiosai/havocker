"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BLOG_POSTS, FORUM_THREADS } from "@/lib/constants";
import BlogHero from "@/app/blog/components/BlogHero";
import BlogControls from "@/app/blog/components/BlogControls";
import BlogGrid from "@/app/blog/components/BlogGrid";
import ForumList from "@/app/blog/components/ForumList";
import ThreadView from "@/app/blog/components/ThreadView";

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState<"NEWS" | "FORUM">("NEWS");
  const [activeSlide, setActiveSlide] = useState(0);
  const [filter, setFilter] = useState("ALL");
  const [selectedThread, setSelectedThread] = useState<any>(null);

  const featuredPosts = BLOG_POSTS.filter((p) => p.featured);
  const filteredPosts =
    filter === "ALL"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === filter);

  return (
    <div className="w-full bg-surface relative">
      <AnimatePresence>
        {activeTab === "NEWS" && !selectedThread && (
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
        {activeTab === "NEWS" ? (
          <BlogGrid posts={filteredPosts} />
        ) : (
          <ForumList
            threads={FORUM_THREADS}
            onSelectThread={setSelectedThread}
          />
        )}
      </div>

      <ThreadView
        thread={selectedThread}
        onClose={() => setSelectedThread(null)}
      />
    </div>
  );
};

export default BlogSection;
