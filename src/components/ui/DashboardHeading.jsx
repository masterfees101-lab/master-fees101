import { Wallet2Icon } from "lucide-react";

function DashboardHeading() {
  const balance = "1,532,000.00";
  return (
    <header className="flex justify-between">
      <h1 className="text-lg font-bold">Twalumbu Education Centre</h1>
      <span className="flex gap-1 text-lg font-bold items-center">
        <Wallet2Icon />
        ZMW {balance}
      </span>
    </header>
  );
}

export default DashboardHeading;
