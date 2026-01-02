import { BrainCircuit } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path ? "text-teal font-bold" : "text-gray-400 hover:text-teal";

    return (
        <nav className="w-full py-6 px-8 flex justify-between items-center bg-transparent relative z-50">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="bg-teal/10 p-2 rounded-lg border border-teal/20 group-hover:bg-teal/20 transition-all">
                    <BrainCircuit size={28} className="text-teal" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight text-white">
                        Sniper<span className="text-teal">Agent</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                        Hybrid Intelligence
                    </span>
                </div>
            </Link>

            <div className="hidden md:flex gap-8 text-sm font-medium">
                <Link to="/" className={`transition-colors ${isActive('/')}`}>Dashboard</Link>
                <Link to="/signals" className={`transition-colors ${isActive('/signals')}`}>Signals</Link>
                <Link to="/settings" className={`transition-colors ${isActive('/settings')}`}>Configuration</Link>
            </div>
        </nav>
    );
};
