import { motion } from 'framer-motion';

interface HeroProps {
    onScan: () => void;
    loading: boolean;
    isAuto?: boolean;
    isLocked?: boolean;
    marketMood: string;
    lastUpdated?: string;
}

export const Hero = ({ onScan, loading, isAuto, isLocked, marketMood, lastUpdated }: HeroProps) => {

    // Mood Colors & Text
    const getMoodConfig = () => {
        if (marketMood.includes("FEAR")) return { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" };
        if (marketMood.includes("GREED")) return { color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
        return { color: "text-teal", bg: "bg-teal/10", border: "border-teal/20" };
    };

    const mood = getMoodConfig();

    return (
        <section className="relative w-full py-16 px-6 flex flex-col items-center text-center overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Title (Apple Style) */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 mb-4 relative z-10"
            >
                Sniper<span className="text-teal">.AI</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl font-light tracking-wide mb-12"
            >
                Professional Algorithmic Trading System
            </motion.p>

            {/* Main Interactive Zone */}
            <div className="flex flex-col items-center gap-8 relative z-20">

                {/* Live Toggle Button (Morphing) */}
                <motion.button
                    layout
                    onClick={onScan}
                    disabled={(loading && !isAuto) || isLocked}
                    whileHover={isLocked ? {} : { scale: 1.05 }}
                    whileTap={isLocked ? {} : { scale: 0.95 }}
                    className={`
                        group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full backdrop-blur-xl border transition-all duration-500
                        ${isLocked
                            ? 'bg-gray-800/50 border-gray-700 cursor-not-allowed text-gray-500' // Locked State
                            : isAuto
                                ? 'bg-red-500/10 border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.2)]' // Live State
                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-teal/50 shadow-[0_0_20px_rgba(0,0,0,0.5)]' // Idle State
                        }
                    `}
                >
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isLocked ? 'bg-gray-600' : isAuto ? 'bg-red-500 animate-pulse' : 'bg-gray-500 group-hover:bg-teal'
                        }`} />

                    <span className={`font-mono font-bold tracking-widest text-sm ${isLocked ? 'text-gray-500' : isAuto ? 'text-red-400' : 'text-gray-300 group-hover:text-white'
                        }`}>
                        {isLocked ? "🔒 LOCKED (SURVIVE TO STOP)" : isAuto ? "LIVE FEED ACTIVE" : "INITIALIZE SYSTEM"}
                    </span>
                </motion.button>

                {/* Status Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-6 text-xs font-mono tracking-wider text-gray-500 bg-black/40 px-6 py-2 rounded-full border border-white/5"
                >
                    <div className="flex items-center gap-2">
                        <span>MARKET MOOD:</span>
                        <span className={`font-bold ${mood.color}`}>{marketMood}</span>
                    </div>
                    <div className="w-[1px] h-3 bg-white/10" />
                    <div>
                        UPDATED: <span className="text-gray-300">{lastUpdated || "--:--:--"}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
