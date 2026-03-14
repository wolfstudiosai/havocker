"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

interface BlogGridProps {
  posts: any[];
  onSelectPost?: (post: any) => void;
  gridVariants?: any;
}

const PAGE_SIZE = 8;

const BlogGrid: React.FC<BlogGridProps> = ({ posts, onSelectPost, gridVariants }) => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-b border-ink/5 bg-surface">
        {shown.map((post, idx) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className={`group relative aspect-square overflow-hidden bg-ink/5 border-r border-ink/5 block ${idx % 4 === 3 ? "border-r-0" : ""}`}
          >
            {/* Default image */}
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
            />

            {/* Hover image */}
            {post.hoverImage && (
              <img
                src={post.hoverImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out scale-105"
              />
            )}

            {/* Text overlay — visible by default */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
              <span className="text-[9px] font-bold tracking-[0.3em] text-acid mb-2 uppercase">
                {post.category} /// {post.date}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-3 uppercase">
                {post.title}
              </h3>
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white/50 group-hover:text-acid transition-colors uppercase">
                READ ENTRY <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full py-3 px-6 md:px-12 flex items-center justify-between border-t border-ink/5">
        <span className="text-[8px] font-bold tracking-[0.2em] text-ink/15 uppercase">
          {shown.length} OF {posts.length} ENTRIES
        </span>
        {hasMore ? (
          <button
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, posts.length))}
            className="text-[9px] font-bold tracking-[0.2em] text-ink/25 hover:text-acid transition-colors uppercase flex items-center gap-2"
          >
            LOAD MORE <ChevronDown size={10} />
          </button>
        ) : (
          <span className="text-[8px] font-bold tracking-[0.2em] text-ink/10 uppercase">
            ALL LOADED
          </span>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
