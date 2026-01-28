import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ThumbsUp, Share2 } from 'lucide-react';

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
          className="grow bg-dark border border-black/5 px-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-acid transition-colors"
        />
        <button className="bg-black text-white px-8 font-bold text-xs tracking-[0.2em] uppercase hover:bg-acid hover:text-black transition-colors">
          POST
        </button>
      </div>
    </div>
  </motion.div>
);

interface ThreadViewProps {
  thread: any;
  onClose: () => void;
}

const ThreadView: React.FC<ThreadViewProps> = ({ thread, onClose }) => {
  return (
    <AnimatePresence>
      {thread && (
        <motion.div
          layoutId={`thread-${thread.id}`}
          className="fixed inset-0 z-100 bg-white overflow-hidden w-full h-full flex flex-col"
        >
          {/* Header */}
          <div className="bg-black text-white p-8 md:p-12 relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-acid hover:bg-white/10 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            <div className="max-w-4xl mx-auto w-full">
              <div className="flex gap-4 mb-6">
                <span className="px-2 py-1 bg-acid text-black text-[9px] font-bold tracking-[0.2em] uppercase">
                  {thread.category}
                </span>
                <span className="text-[10px] font-mono text-white/40 font-bold tracking-widest">
                  ID: {thread.id}
                </span>
              </div>

              <motion.h1
                layoutId={`thread-title-${thread.id}`}
                className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none"
              >
                {thread.title}
              </motion.h1>
            </div>
          </div>

          {/* Content Scroll Area */}
          <div className="grow overflow-y-auto bg-white relative">
            <MockThreadContent thread={thread} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThreadView;
