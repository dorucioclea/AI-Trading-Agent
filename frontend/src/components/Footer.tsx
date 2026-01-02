export const Footer = () => {
    return (
        <footer className="w-full py-8 mt-20 border-t border-gunmetal bg-marine/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <span className="font-mono text-teal">▲</span>
                    <span>Sniper Agent AI &copy; 2026</span>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-teal transition-colors">Documentation</a>
                    <a href="#" className="hover:text-teal transition-colors">System Status</a>
                    <a href="#" className="hover:text-teal transition-colors">Legal</a>
                </div>
            </div>
        </footer>
    );
};
