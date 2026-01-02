import { motion } from "framer-motion";

export const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <motion.div
                className="w-16 h-16 border-4 border-teal border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-teal font-mono animate-pulse">Initializing Brain...</p>
        </div>
    );
};
