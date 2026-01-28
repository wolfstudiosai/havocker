import React from 'react';
import { motion } from 'framer-motion';
import { Activity, User, Plus, Pin } from 'lucide-react';

interface ForumListProps {
  threads: any[];
  onSelectThread: (thread: any) => void;
  gridVariants: any;
}

const ForumList: React.FC<ForumListProps> = ({ threads, onSelectThread, gridVariants }) => {
  return (
    <motion.div
      variants={gridVariants}
      initial="visible"
      animate="visible"
      exit="hidden"
      className="w-full bg-white min-h-[80vh]"
    >
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/5">
        {threads.map((thread, idx) => (
          <motion.div
            layoutId={`thread-${thread.id}`}
            key={thread.id}
            onClick={() => onSelectThread(thread)}
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
  );
};

export default ForumList;
