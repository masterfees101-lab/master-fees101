import { useWallet } from "@/context/WalletContext";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const accounts = [
  {
    id: 1,
    bank: "ABSA Bank PLC",
    name: "Twalumbu Education Centre Ltd.",
    branch: "Head Office Branch",
    swift: "ZZX542",
    number: "203437192",
    logo: "https://miro.medium.com/v2/resize:fit:1400/1*7ZYOcXsXqRtj1wAK7PJxBQ.jpeg",
  },
  {
    id: 2,
    bank: "Airtel Money",
    name: "Twalumbu Education Centre Ltd.",
    accountName: "Stephen Kapambwe",
    number: "+260772530093",
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/30455c9384889.57ee562a4fba0.jpg",
  },
];

export default function WithdrawForm() {
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState(null);
  const [toggleAccounts, setToggleAccounts] = useState(false);
  //to show success components afterwithdraw
  const { setSearchParams } = useWallet();
  const navigate = useNavigate();
  function handleWithdrawAmount() {
    if (!amount || !selected) {
      toast.error("Fill in all fields");
      return;
    }
    setSearchParams({ status: "success" });
  }
  function handleCancel() {
    navigate("/");
  }
  return (
    <div className="w-4/5 m-auto p-6 ">
      <label className="text-sm text-gray-700">
        Enter the amount you want to withdraw
      </label>
      <input
        type="number"
        value={amount}
        required
        placeholder="K100.00"
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-md p-3 mt-1 text-right focus:outline-none focus:ring focus:ring-green-300"
      />

      <label className="text-sm text-gray-700 mt-6 block">
        Select the destination bank account
      </label>

      <div
        className="relative mt-1"
        onClick={() => setToggleAccounts(!toggleAccounts)}
      >
        <button className="w-full border rounded-md p-3 flex justify-between items-center">
          {selected ? (
            <span>
              {selected.bank} — {selected.number}
            </span>
          ) : (
            <span className="text-gray-500">Choose an account</span>
          )}
          <span className="transform transition-transform duration-200">
            {toggleAccounts ? "▴" : "▾"}
          </span>
        </button>

        {toggleAccounts && (
          <div className="mt-2 rounded-lg border bg-white shadow">
            {accounts.map((acc) => (
              <div
                key={acc.id}
                onClick={() => setSelected(acc)}
                className="p-4 flex items-center gap-4 hover:bg-gray-100 cursor-pointer border-b last:border-none"
              >
                <img
                  src={acc.logo}
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />

                <div className="flex-1">
                  <p className="font-medium text-gray-800">{acc.bank}</p>
                  <p className="text-sm text-gray-600">{acc.name}</p>

                  {acc.branch && (
                    <p className="text-xs text-gray-400">
                      {acc.branch} — Swift: {acc.swift}
                    </p>
                  )}

                  {acc.accountName && (
                    <p className="text-xs text-gray-400">
                      Account Name: {acc.accountName}
                    </p>
                  )}
                </div>

                <p className="font-semibold text-gray-800">{acc.number}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button
          className="text-gray-600 hover:underline"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          onClick={handleWithdrawAmount}
          className="bg-[#95e36c] text-[#003630] font-semibold px-6 transition py-2 rounded-md hover:bg-green-900"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
