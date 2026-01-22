import { Menu } from "lucide-react";

interface NavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavBar = ({ activeTab, setActiveTab }: NavBarProps) => {
  const tabs = [
    { id: "overview", label: "01 // OVERVIEW" },
    { id: "specs", label: "02 // SYSTEMS" },
    { id: "gallery", label: "03 // VISUALS" },
    { id: "order", label: "04 // ACQUISITION" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent text-ink transition-all duration-300">
      <div className="w-full flex justify-between items-center px-6 py-4">
        {/* Logo / Coordinates */}
        <div className="flex flex-col">
          <span className="font-bold text-2xl leading-none tracking-tighter">HAVOCKER</span>
          <span className="text-[9px] tracking-[0.4em] opacity-40 font-bold uppercase">
            L3e /// High Performance Lab
          </span>
        </div>

        {/* Minimal Tab Line */}
        <div className="hidden md:flex gap-10 items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                text-[11px] font-bold tracking-[0.2em] transition-all duration-300 relative py-1
                ${activeTab === tab.id ? "text-acid" : "text-ink/40 hover:text-ink"}
              `}
            >
              {tab.label}
              {/* Underline Indicator */}
              {activeTab === tab.id && (
                <div className="absolute left-0 -bottom-1 w-full h-0.5 bg-acid shadow-[0_0_8px_#00C2FF]" />
              )}
            </button>
          ))}
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 border-l border-black/10 pl-4 h-6">
            <div className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] font-bold opacity-60">LAB_ACTIVE</span>
          </div>
          <button className="hover:text-acid transition-colors">
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
