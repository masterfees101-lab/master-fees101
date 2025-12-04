export default function RevenueBreakdownCard() {
  const total = 1500000;
  const collected = 757000;
  const balance = total - collected;

  const progress = (collected / total) * 100;

  return (
    <div className="relative w-full max-w-3xl p-6 mt-7 m-2 rounded-3xl bg-[#003f39] text-white overflow-hidden shadow-lg">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -left-10 top-10 w-60 h-60 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Title + Badge */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-[18px] font-semibold">Revenue Breakdown</h2>
          <span className="bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
            +8%
          </span>
        </div>

        <div className="w-full h-7 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full rounded-full bg-linear-to-r from-lime-400 to-lime-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-y-3 text-lg">
          <span>Revenue</span>
          <span className="text-right">ZMW {total.toLocaleString()}</span>

          <span>Collected</span>
          <span className="text-right">ZMW {collected.toLocaleString()}</span>

          <span className="font-semibold text-lime-400">Balance</span>
          <span className="text-right font-semibold text-lime-400">
            ZMW {balance.toLocaleString()}
          </span>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-white text-gray-900 px-5 py-2 rounded-xl shadow-md font-medium hover:bg-gray-100 transition">
            View all Transactions
          </button>
        </div>
      </div>
    </div>
  );
}
