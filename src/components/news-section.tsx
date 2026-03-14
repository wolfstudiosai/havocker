"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

const NewsSection = () => {
  const featured = BLOG_POSTS[0];
  const rows = BLOG_POSTS.slice(1);

  return (
    <div className="w-full bg-white">
      {/* Video Banner */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          poster={featured.image}
        >
          <source src="/videos/news-banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
          <div className="text-[9px] tracking-[0.3em] text-white/40 font-bold uppercase mb-3">
            {featured.category} /// {featured.date}
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.9] mb-5 max-w-3xl uppercase">
            {featured.title}
          </h2>
          <Link
            href="/blog"
            className="text-[10px] font-bold tracking-[0.25em] text-white/70 hover:text-acid transition-colors uppercase flex items-center gap-2 group"
          >
            READ ARTICLE{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* Blog Rows */}
      {rows.map((post) => (
        <Link
          key={post.id}
          href="/blog"
          className="border-t border-ink/[0.06] px-6 md:px-12 lg:px-16 py-5 md:py-6 flex items-center justify-between group hover:bg-ink/[0.015] transition-colors cursor-pointer"
        >
          <div className="flex items-baseline gap-5 md:gap-10 min-w-0">
            <span className="text-[9px] text-ink/15 font-bold tracking-[0.1em] shrink-0 w-20 hidden md:block">
              {post.date}
            </span>
            <h3 className="text-xs md:text-sm font-bold text-ink tracking-tight group-hover:text-acid transition-colors uppercase truncate">
              {post.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 md:gap-8 shrink-0 ml-4">
            <span className="text-[8px] text-ink/15 font-bold tracking-[0.15em] hidden md:block">
              {post.category}
            </span>
            <ArrowRight
              size={14}
              className="text-ink/15 group-hover:text-acid group-hover:translate-x-1 transition-all"
            />
          </div>
        </Link>
      ))}

      {/* View All */}
      <div className="border-t border-ink/[0.06] px-6 md:px-12 lg:px-16 py-4">
        <Link
          href="/blog"
          className="text-[9px] font-bold tracking-[0.25em] text-ink/25 hover:text-acid transition-colors uppercase flex items-center gap-2 group"
        >
          VIEW ALL ARTICLES{" "}
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
