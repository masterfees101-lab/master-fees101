import { Wallet2Icon } from "lucide-react";

function DashboardHeading() {
  const balance = "1,532,000.00";
  return (
    <header className="flex justify-between">
      <h1 className="text-[17px] font-bold">Twalumbu Education Centre</h1>
      <span className="flex gap-1 text-[16px] font-bold items-center">
        <Wallet2Icon />
        <span>ZMW {balance}</span>
      </span>
    </header>
  );
}

export default DashboardHeading;
