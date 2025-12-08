import { EllipsisVertical } from "lucide-react";

const transactions = [
  {
    month: "July - 2025",
    items: [
      {
        date: "28/07/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
      {
        date: "27/07/25",
        type: "Income",
        status: "Cleared",
        amount: "K15,000",
        balance: "K1,517,000",
      },
      {
        date: "26/07/25",
        type: "Income",
        status: "Cleared",
        amount: "K10,000",
        balance: "K1,507,000",
      },
      {
        date: "25/07/25",
        type: "Income",
        status: "Cleared",
        amount: "K5,000",
        balance: "K1,502,000",
      },
      {
        date: "23/07/25",
        type: "Income",
        status: "Cleared",
        amount: "K5,000",
        balance: "K1,497,000",
      },
    ],
  },
  {
    month: "June - 2025",
    items: [
      {
        date: "28/06/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
      {
        date: "28/06/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
      {
        date: "28/06/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
      {
        date: "28/06/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
      {
        date: "28/06/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
      {
        date: "28/06/25",
        type: "Income",
        status: "Cleared",
        amount: "k10,000",
        balance: "K1,532,000",
      },
    ],
  },
];

export default function WalletHistoryTable() {
  return (
    <div className="w-full mt-5 overflow-x-auto border-2 border-[#171717] thin-scrollbar rounded-lg h-[500px] overflow-auto hover:overflow-auto">
      {/* Table Header */}
      <div className="grid grid-cols-[250px_1.5fr_100px_100px_100px_100px] px-6 py-3 text-[12px] font-semibold text-black sticky top-0 z-10 border-b bg-white ">
        <div>Date</div>
        <div>Txn Type</div>
        <div>Status</div>
        <div>Amount</div>
        <div>Balance</div>
        <div></div>
      </div>

      {/* Month Groups */}
      {transactions.map((group, index) => (
        <div key={index}>
          {/* Month Label */}
          <div className="px-6 py-2  font-bold bg-[#F7F7F7]  ">
            <span className="text-[#0B5E6C] text-[10px]">{group.month}</span>
          </div>

          {/* Transaction Rows */}
          {group.items.map((txn, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[250px_1.5fr_100px_100px_100px_100px]  px-6 py-3  text-[12px] hover:bg-gray-100 transition"
            >
              <div>{txn.date}</div>
              <div>{txn.type}</div>
              <div>{txn.status}</div>
              <div>{txn.amount}</div>
              <div>{txn.balance}</div>

              <div className="flex justify-end">
                <button className="text-gray-500 hover:text-gray-700">
                  <EllipsisVertical />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
