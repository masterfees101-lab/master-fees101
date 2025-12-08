import { useWallet } from "@/context/WalletContext";
import { Ellipsis } from "lucide-react";

function WalletSummary() {
  const balance = "1,532,000.00";
  const { setSearchParams } = useWallet();
  function handleWithdrawToggle() {
    setSearchParams({ status: "withdraw" });
  }
  return (
    <div className="mt-4 bg-[#003630] p-10 rounded-[18px]">
      <span className="text-[16px] text-[#5DFCAF] font-medium">
        Cash In Wallet
      </span>
      <div className="flex justify-between">
        <div>
          <span className="text-[40px] font-semibold text-white">
            ZMW {balance}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleWithdrawToggle}
            className="bg-[#95E36C] py-1 px-5 text-[#003630] rounded-lg text-[16px] font-semibold"
          >
            Withdraw
          </button>
          <span className="flex items-center bg-[#104937] px-4.5 rounded-lg">
            <Ellipsis color="white" size={25} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default WalletSummary;
