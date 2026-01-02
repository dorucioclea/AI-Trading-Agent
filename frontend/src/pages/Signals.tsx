export const Signals = ({ data }: { data: any[] }) => {
    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-mist mb-8">Active Signals</h1>

            <div className="overflow-x-auto glass rounded-2xl border border-teal/20">
                <table className="w-full text-left">
                    <thead className="bg-gunmetal text-gray-400 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4">Ticker</th>
                            <th className="px-6 py-4">Action</th>
                            <th className="px-6 py-4">Confidence</th>
                            <th className="px-6 py-4">Reasoning</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 text-sm">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">No active signals. Run a scan first.</td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.Ticker} className="hover:bg-teal/5 transition-colors">
                                    <td className="px-6 py-4 font-bold text-white">{item.Ticker}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${item.Action === 'WAIT' ? 'bg-gray-700 text-gray-300' : 'bg-teal/20 text-teal'
                                            }`}>
                                            {item.Action.replace(/_/g, ' ')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-teal">
                                        {(item.Confidence * 100).toFixed(0)}%
                                    </td>
                                    <td className="px-6 py-4 text-gray-400 truncate max-w-md">
                                        {item.Rational[item.Rational.length - 1]}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
