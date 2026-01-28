import React from 'react';
import { Filter } from 'lucide-react';

interface BlogControlsProps {
  activeTab: 'NEWS' | 'FORUM';
  setActiveTab: (tab: 'NEWS' | 'FORUM') => void;
  filter: string;
  setFilter: (filter: string) => void;
  resetSelection: () => void;
}

const BlogControls: React.FC<BlogControlsProps> = ({ activeTab, setActiveTab, filter, setFilter, resetSelection }) => {
  return (
    <div className=" bg-white/90 backdrop-blur-md border-b border-black/5 w-full shadow-sm">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-3 overflow-x-auto no-scrollbar flex items-center justify-between gap-8">

        {/* 1. Toggles (News / Forum) */}
        <div className="flex bg-black/5 p-1 rounded-sm shrink-0">
          <button
            onClick={() => { setActiveTab('NEWS'); resetSelection(); }}
            className={`px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all rounded-sm ${activeTab === 'NEWS' ? 'bg-ink text-white shadow-md' : 'text-ink/40 hover:text-ink hover:bg-white/50'}`}
          >
            LATEST NEWS
          </button>
          <button
            onClick={() => { setActiveTab('FORUM'); resetSelection(); }}
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
  );
};

export default BlogControls;
