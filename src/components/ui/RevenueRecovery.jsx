import {
  ChartArea,
  Dot,
  DotIcon,
  Expand,
  ExpandIcon,
  Settings,
  Wallet2Icon,
} from "lucide-react";
import RevenueRecoveryChart from "./RevenueRecoveryChart";
function RevenueRecovery() {
  return (
    <div className="p-4  m-2 rounded-2xl shadow-2xl w-full">
      <div>
        <div className="flex justify-between p-1.5">
          <h2 className="font-semibold text-lg">Revenue Recovery</h2>
          <div className="flex gap-4 items-center">
            <span className="font-bold text-xl">Term 2</span>
            <span className="text-xl">2025</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex bg-green-950 p-1 px-2 items-center rounded-2xl space-x-3">
            <div className="text-white font-bold">+8%</div>
            <div className="flex text-white text-lg items-center gap-1.5 ">
              <Dot />
              <span>Collected:</span>
              {""} <span>Balance</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <span className="bg-green-200 p-1 px-4 text-green-950 text-lg rounded-lg">
              Compare
            </span>
            <Settings />
            <Expand />
          </div>
        </div>
      </div>
      <RevenueRecoveryChart />
    </div>
  );
}

export default RevenueRecovery;
