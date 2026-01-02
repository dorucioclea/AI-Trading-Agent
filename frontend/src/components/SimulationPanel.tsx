import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, AlertTriangle, RefreshCcw } from 'lucide-react';

interface SimState {
    balance: number;
    cash: number;
    score: number;
    level: string;
    positions: Record<string, any>;
    history: string[];
}

interface SimulationPanelProps {
    simState: SimState | null;
    onReset: () => void;
}

export const SimulationPanel: React.FC<SimulationPanelProps> = ({ simState, onReset }) => {
    if (!simState) return null;

    const pnl = simState.balance - 10000;
    const isProfit = pnl >= 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[1400px] px-4 mb-8"
        >
            <div className="bg-gradient-to-r from-gunmetal to-marine border border-white/5 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[100px] -mr-20 -mt-20" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">

                    {/* Level & Score Section */}
                    <div className="flex items-center gap-6">
                        <div className="h-20 w-20 rounded-2xl bg-black/40 border border-teal/20 flex items-center justify-center relative">
                            <Trophy className="text-teal drop-shadow-[0_0_10px_rgba(0,173,181,0.5)]" size={32} />
                            <div className="absolute -bottom-2 px-3 py-1 bg-teal text-marine text-[10px] font-bold rounded-full uppercase tracking-wider">
                                Lvl {simState.score > 0 ? Math.floor(simState.score / 20) + 1 : 1}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{simState.level}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-gray-400 font-mono">XP Score:</span>
                                <span className={`text-lg font-bold ${simState.score >= 0 ? 'text-teal' : 'text-red-400'}`}>
                                    {simState.score} pts
                                </span>
                            </div>
                            <div className="w-48 h-1.5 bg-gray-700/50 rounded-full mt-3 overflow-hidden">
                                <motion.div
                                    className="h-full bg-teal shadow-[0_0_10px_#00ADB5]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(100, (simState.score % 50) * 2)}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* P&L Section */}
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Total Portfolio Value</span>
                        </div>
                        <div className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter shadow-black drop-shadow-lg">
                            ₹{simState.balance.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </div>
                        <div className={`flex items-center gap-2 mt-2 px-3 py-1 rounded-lg bg-black/20 ${isProfit ? 'text-teal' : 'text-red-400'}`}>
                            {isProfit ? <TrendingUp size={16} /> : <AlertTriangle size={16} />}
                            <span className="font-mono font-bold">
                                {isProfit ? '+' : ''}₹{pnl.toFixed(0)} ({((pnl / 10000) * 100).toFixed(2)}%)
                            </span>
                        </div>
                    </div>
                </div>

                {/* Actions & Stats */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span>Cash: <span className="text-white font-mono">₹{simState.cash.toFixed(0)}</span></span>
                        <span>Positions: <span className="text-white font-mono">{Object.keys(simState.positions).length}</span></span>
                    </div>

                    <button
                        onClick={onReset}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-lg text-xs text-gray-500 hover:text-red-400 transition-colors"
                    >
                        <RefreshCcw size={12} />
                        Reset Simulation
                    </button>
                </div>
            </div>

            {/* Recent Activity Log */}
            {simState.history.length > 0 && (
                <div className="mt-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">RL Training Logs</h4>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                        {simState.history.map((log, idx) => (
                            <div key={idx} className="text-xs font-mono text-gray-400 border-l-2 border-white/10 pl-3 py-1 hover:border-teal/50 hover:text-teal transition-colors">
                                {log}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};
