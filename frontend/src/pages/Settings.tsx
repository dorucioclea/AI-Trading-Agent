export const Settings = () => {
    return (
        <div className="w-full max-w-3xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-mist mb-8">System Configuration</h1>

            <div className="glass p-8 rounded-2xl border border-teal/20 space-y-8">

                {/* Section 1 */}
                <div>
                    <h3 className="text-xl font-bold text-teal mb-4">Universe Selection</h3>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 bg-teal text-marine font-bold rounded-lg shadow-lg">Nifty 50 (India)</button>
                        <button className="px-4 py-2 bg-gunmetal text-gray-400 font-bold rounded-lg border border-gray-600 hover:border-teal hover:text-teal transition-all">US Tech (Nasdaq)</button>
                    </div>
                </div>

                <div className="h-[1px] bg-gray-700" />

                {/* Section 2 */}
                <div>
                    <h3 className="text-xl font-bold text-teal mb-4">Risk Parameters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Min Confidence Threshold</label>
                            <input type="range" className="accent-teal h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                            <div className="flex justify-between text-xs text-gray-500">
                                <span>50%</span>
                                <span>90%</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-gray-400">Max Open Positions</label>
                            <input type="number" className="bg-marine border border-gray-600 rounded p-2 text-white focus:border-teal outline-none" placeholder="5" />
                        </div>
                    </div>
                </div>

                <div className="h-[1px] bg-gray-700" />

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-200 text-sm">
                    ⚠️ Configuration changes require a backend restart in this version (v1.0).
                </div>

            </div>
        </div>
    );
};
