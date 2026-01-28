import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity } from 'lucide-react';


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

interface ArticleViewProps {
  post: any;
  onClose: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ post, onClose }) => {
  return (
    <AnimatePresence>
      {post && (
        <motion.div
          layoutId={`post-${post.id}`}
          className="fixed inset-0 z-100 bg-white overflow-y-auto w-full h-full flex flex-col"
        >

          <div className="fixed top-0 w-full z-110 flex justify-between items-center px-8 py-6 pointer-events-none">
            <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full pointer-events-auto">
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">READING MODE</span>
            </div>
            <button
              onClick={onClose}
              className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-acid hover:text-black transition-colors rounded-full shadow-2xl pointer-events-auto"
            >
              <X size={24} />
            </button>
          </div>


          <div className="relative w-full h-[60vh] md:h-[70vh] shrink-0">
            <motion.img
              layoutId={`post-image-${post.id}`}
              src={post.image}
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
                {post.category} /// {post.date}
              </motion.span>
              <motion.h1
                layoutId={`post-title-${post.id}`}
                className="text-5xl md:text-8xl font-bold text-ink tracking-tighter leading-[0.9] uppercase"
              >
                {post.title}
              </motion.h1>
            </div>
          </div>


          <div className="grow bg-white relative z-10">
            <MockArticleContent />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArticleView;
