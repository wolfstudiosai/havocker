"use client";

import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, FORUM_THREADS } from '@/lib/constants';
import { ArrowRight, ArrowLeft, Plus, Pin, User, Activity, X, Share2, ThumbsUp, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MOCK CONTENT COMPONENT ---
const MockArticleContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12"
  >
    <div className="lg:col-span-8 space-y-6 text-ink/80 leading-relaxed text-lg">
      <p className="font-bold text-xl text-ink leading-relaxed">
        <span className="text-acid text-5xl float-left mr-4 mt-[-6px] font-sans font-black">T</span>
        he initial telemetry data from our Mojave test runs has exceeded all projected parameters.
        The new 21KW brushless motor maintained a thermal efficiency of 94% even when ambient
        temperatures surpassed 45°C (113°F).
      </p>
      <p>
        Our engineering team focused heavily on the airflow dynamics around the battery casing.
        By redesigning the intake vents using generative design algorithms, we achieved a
        30% increase in passive cooling. This allows the HAVØK X1 to sustain peak power output
        for extended durations without hitting thermal throttling limits.
      </p>

      <div className="w-full h-px bg-black/10 my-8" />

      <h3 className="text-2xl font-bold text-ink uppercase tracking-tight mb-4">The Carbon Advantage</h3>
      <p>
        Switching to the custom carbon-alloy weave for the subframe has shaved off 4.2kg
        while increasing torsional rigidity by 18%. This isn't just about weight; it's about
        ride feel. The feedback through the chassis is now instantaneous, giving the rider
        complete confidence in technical terrain.
      </p>
      <div className="bg-black/5 p-8 border-l-2 border-acid my-8">
        <p className="font-mono text-sm text-ink/60 uppercase tracking-widest italic">
          "The bike feels less like a machine and more like an extension of the body.
          The response time is practically zero."
        </p>
        <p className="mt-2 text-xs font-bold uppercase text-ink">— CMDR. Anderson, Lead Test Rider</p>
      </div>
      <p>
        We are currently finalizing the firmware map for the 'Sport Mode' update, which will
        unlock the final 5% of torque availability at low RPMs. Expect this OTA update to
        hit your dashboard by mid-November.
      </p>
    </div>
    <div className="lg:col-span-4 space-y-8">
      <div className="bg-black text-white p-8 sticky top-32">
        <h4 className="text-acid text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
          <Activity size={12} /> Technical Data
        </h4>
        <ul className="space-y-4 font-mono text-xs tracking-widest">
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-white/40">AMBIENT TEMP</span>
            <span>45°C</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-white/40">MOTOR PEAK</span>
            <span>82°C</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-white/40">BATTERY DELTA</span>
            <span>+12°C</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-white/40">DISTANCE</span>
            <span>142 KM</span>
          </li>
          <li className="flex justify-between border-b border-white/20 pb-2">
            <span className="text-white/40">ELEVATION</span>
            <span>+2400 M</span>
          </li>
        </ul>
        <button className="w-full mt-8 border border-white/20 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors">
          DOWNLOAD LOGS
        </button>
      </div>
    </div>
  </motion.div>
);

const MockThreadContent = ({ thread }: { thread: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="max-w-4xl mx-auto py-8 px-6 pb-32"
  >
    {/* Original Post */}
    <div className="bg-[#F8F9FA] border border-black/5 p-8 mb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-acid" />
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
            {thread.author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold text-ink uppercase tracking-wider">{thread.author}</div>
            <div className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">OWNER /// LEVEL 3</div>
          </div>
        </div>
        <div className="text-[10px] font-mono font-bold text-ink/30">{thread.time}</div>
      </div>
      <p className="text-ink text-lg leading-relaxed font-medium">
        I've been running the stock tires for about 300km now, mostly on hard pack. Planning a trip to the dunes next month.
        Has anyone dialed in the optimal PSI for deep sand with the X1's weight distribution?
        I'm thinking of dropping to 12 PSI but worried about the rim lock situation on the rear with the torque this thing puts out.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="text-xs font-bold text-ink/50 hover:text-acid flex items-center gap-2 uppercase tracking-wider">
          <ThumbsUp size={14} /> Helpful (24)
        </button>
        <button className="text-xs font-bold text-ink/50 hover:text-acid flex items-center gap-2 uppercase tracking-wider">
          <Share2 size={14} /> Share
        </button>
      </div>
    </div>

    {/* Replies */}
    <h4 className="text-[10px] font-bold tracking-[0.2em] text-ink/30 uppercase mb-8 border-b border-black/5 pb-2">
      {thread.replies} RESPONSES
    </h4>

    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4">
          <div className="w-8 h-8 bg-gray-200 flex items-center justify-center font-bold text-xs text-ink/40 shrink-0">
            R{i}
          </div>
          <div className="grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-ink uppercase">DesertRat_99</span>
              <span className="text-[9px] font-bold text-ink/30 uppercase tracking-widest">2H AGO</span>
            </div>
            <p className="text-sm text-ink/70 leading-relaxed">
              {i === 1 ? "Don't go below 15 PSI without heavy duty tubes. The torque will spin the rim inside the tire instantly." :
                i === 2 ? "I ran 14 PSI at Glamis last weekend. It was perfect. Just make sure you stiffen the rear compression damping by 2 clicks." :
                  "Agreed with above. Also, check your chain tension before hitting the sand. Sand creates massive drag."}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Reply Box */}
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-black/10 p-6 z-20">
      <div className="max-w-4xl mx-auto flex gap-4">
        <input
          type="text"
          placeholder="ENTER YOUR REPLY..."
          className="grow bg-[#F0F2F5] border border-black/5 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-acid transition-colors"
        />
        <button className="bg-black text-white px-8 font-bold text-xs tracking-[0.2em] uppercase hover:bg-acid hover:text-black transition-colors">
          POST
        </button>
      </div>
    </div>
  </motion.div>
);


const BlogPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'NEWS' | 'FORUM'>('NEWS');
  const [filter, setFilter] = useState('ALL');
  const [activeSlide, setActiveSlide] = useState(0);

  // Selection State for Shared Layout Animations
  const [selectedPost, setSelectedPost] = useState<any | null>(null);
  const [selectedThread, setSelectedThread] = useState<any | null>(null);

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const filteredPosts = filter === 'ALL'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === filter);

  // Auto-advance featured slide
  useEffect(() => {
    if (!selectedPost && !selectedThread) {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % featuredPosts.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [featuredPosts.length, selectedPost, selectedThread]);

  // Receding animation for grid when an item is expanded
  const gridVariants = {
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.4 } }
  };

  return (
    <div className="w-full min-h-screen bg-white pt-[80px] relative">

      {/* Top Level Navigation */}
      <div className="w-full bg-white border-b border-black/5 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-end relative z-10">
        <div>
          <span className="text-[10px] font-bold tracking-[0.4em] text-acid uppercase block mb-3">COMMUNITY HUB</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-ink uppercase leading-none">
            HAVØK FEED
          </h1>
        </div>
        {/* Note: Tabs moved to filter bar below */}
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative">
        {/* HERO SLIDER (Only visible for NEWS and when nothing is selected) */}
        <AnimatePresence>
          {activeTab === 'NEWS' && !selectedPost && !selectedThread && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '60vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full bg-black overflow-hidden group"
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
                    FEATURED STORY
                  </span>
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
                    {featuredPosts[activeSlide].title}
                  </h1>
                </div>

                <div className="flex items-center gap-4 mt-8 md:mt-0">
                  <button
                    onClick={() => setActiveSlide(prev => (prev - 1 + featuredPosts.length) % featuredPosts.length)}
                    className="w-12 h-12 border border-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
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
                    className="w-12 h-12 border border-white/20 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STICKY CONTROL BAR (Unified Tabs + Filters) */}
        <div className="sticky top-[80px] z-30 bg-white/90 backdrop-blur-md border-b border-black/5 w-full shadow-sm">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-3 overflow-x-auto no-scrollbar flex items-center justify-between gap-8">

            {/* 1. Toggles (News / Forum) */}
            <div className="flex bg-black/5 p-1 rounded-sm shrink-0">
              <button
                onClick={() => { setActiveTab('NEWS'); setSelectedPost(null); setSelectedThread(null); }}
                className={`px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all rounded-sm ${activeTab === 'NEWS' ? 'bg-ink text-white shadow-md' : 'text-ink/40 hover:text-ink hover:bg-white/50'}`}
              >
                LATEST NEWS
              </button>
              <button
                onClick={() => { setActiveTab('FORUM'); setSelectedPost(null); setSelectedThread(null); }}
                className={`px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all rounded-sm ${activeTab === 'FORUM' ? 'bg-ink text-white shadow-md' : 'text-ink/40 hover:text-ink hover:bg-white/50'}`}
              >
                FORUM DISC.
              </button>
            </div>

            {/* 2. Filters */}
            <div className="flex items-center gap-6 min-w-max border-l border-black/10 pl-8">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-ink/40 uppercase mr-2">
                <Filter size={12} /> FILTER
              </div>
              {['ALL', 'ENGINEERING', 'LIFESTYLE', 'EVENTS', 'TECH'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[10px] font-bold tracking-[0.2em] transition-colors relative py-2 uppercase
                          ${filter === cat ? 'text-acid' : 'text-ink/60 hover:text-ink'}
                        `}
                >
                  {cat}
                  {filter === cat && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-acid" />}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="relative min-h-[50vh] bg-dark">
          {activeTab === 'NEWS' ? (
            <motion.div
              className="w-full"
              variants={gridVariants}
              animate={selectedPost ? "hidden" : "visible"}
            >
              {/* BLOG GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-b border-black/5 bg-white">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    layoutId={`post-${post.id}`}
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
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

              {/* Footer of Grid */}
              <div className="w-full py-16 flex flex-col items-center justify-center">
                <p className="text-[10px] font-bold tracking-[0.3em] text-ink/40 uppercase mb-6">END OF STREAM</p>
                <button className="px-8 py-3 border border-ink/10 bg-white hover:bg-ink hover:text-white transition-all text-[10px] font-bold tracking-[0.3em] uppercase shadow-sm">
                  LOAD ARCHIVES
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={gridVariants}
              animate={selectedThread ? "hidden" : "visible"}
              className="w-full bg-white min-h-[80vh]"
            >
              {/* Forum Stats Strip */}
              <div className="w-full border-b border-black/5 bg-dark px-6 md:px-12 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex gap-8 divide-x divide-black/10">
                    <div className="flex items-center gap-4 pl-4 first:pl-0">
                      <Activity size={20} className="text-acid" />
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold leading-none text-ink tracking-tight">4,281</span>
                        <span className="text-[9px] font-bold tracking-[0.2em] text-ink/40 uppercase">ACTIVE THREADS</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pl-8">
                      <User size={20} className="text-ink" />
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold leading-none text-ink tracking-tight">345</span>
                        <span className="text-[9px] font-bold tracking-[0.2em] text-ink/40 uppercase">USERS ONLINE</span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-ink text-white px-8 py-4 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-acid hover:text-black transition-all shadow-xl group">
                    <Plus size={16} /> INITIALIZE THREAD
                  </button>
                </div>
              </div>

              {/* FORUM GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/5">
                {FORUM_THREADS.map((thread, idx) => (
                  <motion.div
                    layoutId={`thread-${thread.id}`}
                    key={thread.id}
                    onClick={() => setSelectedThread(thread)}
                    className={`group bg-white border-r border-b border-black/5 relative flex flex-col justify-between p-8 hover:bg-[#F8F9FA] transition-colors cursor-pointer min-h-[300px] ${idx % 4 === 3 ? 'border-r-0' : ''}`}
                  >
                    <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-ink/10 font-mono group-hover:text-acid transition-colors">
                      ID:00{thread.id}
                    </div>

                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-[9px] font-bold tracking-[0.2em] uppercase border ${thread.pinned ? 'bg-acid text-black border-acid' : 'bg-transparent text-ink/40 border-black/10'}`}>
                          {thread.category}
                        </span>
                        {thread.pinned && <Pin size={12} className="text-black fill-black rotate-45" />}
                      </div>

                      <motion.h3 layoutId={`thread-title-${thread.id}`} className="text-xl font-bold text-ink uppercase leading-tight tracking-tight mb-2 group-hover:text-acid transition-colors line-clamp-3">
                        {thread.title}
                      </motion.h3>
                    </div>

                    <div className="mt-auto pt-6 border-t border-dashed border-black/5">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-4 h-4 bg-ink rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                              {thread.author.charAt(0)}
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-ink uppercase">{thread.author}</span>
                          </div>
                          <span className="text-[9px] font-bold tracking-widest text-ink/30 uppercase pl-6">{thread.time}</span>
                        </div>

                        <div className="text-right">
                          <span className="block text-xl font-bold font-mono text-ink leading-none">{thread.replies}</span>
                          <span className="text-[8px] font-bold tracking-[0.2em] text-ink/30 uppercase">REPLIES</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-acid group-hover:w-full transition-all duration-300" />
                  </motion.div>
                ))}

                <div className="bg-dark border-b border-black/5 flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-black hover:text-white transition-colors group">
                  <Plus size={32} className="mb-4 text-ink/20 group-hover:text-acid" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink/40 group-hover:text-white">LOAD OLDER THREADS</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>

      {/* --- EXPANDED BLOG POST VIEW (IN-SCREEN) --- */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            layoutId={`post-${selectedPost.id}`}
            className="fixed inset-0 z-100 bg-white overflow-y-auto w-full h-full flex flex-col"
          >
            {/* Close Button & Navigation */}
            <div className="fixed top-0 w-full z-110 flex justify-between items-center px-8 py-6 pointer-events-none">
              <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full pointer-events-auto">
                <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">READING MODE</span>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-acid hover:text-black transition-colors rounded-full shadow-2xl pointer-events-auto"
              >
                <X size={24} />
              </button>
            </div>

            {/* Hero Image Expansion */}
            <div className="relative w-full h-[60vh] md:h-[70vh] shrink-0">
              <motion.img
                layoutId={`post-image-${selectedPost.id}`}
                src={selectedPost.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-black/40" />

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl mx-auto">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 bg-acid text-black text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
                >
                  {selectedPost.category} /// {selectedPost.date}
                </motion.span>
                <motion.h1
                  layoutId={`post-title-${selectedPost.id}`}
                  className="text-5xl md:text-8xl font-bold text-ink tracking-tighter leading-[0.9] uppercase"
                >
                  {selectedPost.title}
                </motion.h1>
              </div>
            </div>

            {/* Content */}
            <div className="grow bg-white relative z-10">
              <MockArticleContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- EXPANDED FORUM THREAD VIEW (IN-SCREEN) --- */}
      <AnimatePresence>
        {selectedThread && (
          <motion.div
            layoutId={`thread-${selectedThread.id}`}
            className="fixed inset-0 z-100 bg-white overflow-hidden w-full h-full flex flex-col"
          >
            {/* Header */}
            <div className="bg-black text-white p-8 md:p-12 relative shrink-0">
              <button
                onClick={() => setSelectedThread(null)}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-acid hover:bg-white/10 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="max-w-4xl mx-auto w-full">
                <div className="flex gap-4 mb-6">
                  <span className="px-2 py-1 bg-acid text-black text-[9px] font-bold tracking-[0.2em] uppercase">
                    {selectedThread.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 font-bold tracking-widest">
                    ID: {selectedThread.id}
                  </span>
                </div>

                <motion.h1
                  layoutId={`thread-title-${selectedThread.id}`}
                  className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none"
                >
                  {selectedThread.title}
                </motion.h1>
              </div>
            </div>

            {/* Content Scroll Area */}
            <div className="grow overflow-y-auto bg-white relative">
              <MockThreadContent thread={selectedThread} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BlogPage;
