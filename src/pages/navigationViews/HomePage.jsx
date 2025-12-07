import {
  DotIcon,
  Expand,
  ExpandIcon,
  Settings,
  Wallet2Icon,
} from "lucide-react";
import RevenueRecovery from "@components/ui/RevenueRecovery";
import DashboardHeading from "@components/ui/DashboardHeading";
import RevenueBreakdownCard from "@components/ui/RevenueBreakdownCard";
import UpdatesPanel from "@components/ui/UpdatesPanel";

export default function HomePage() {
  return (
    <main className="bg-white p-7 h-screen rounded-md overflow-auto hover:overflow-auto ">
      <DashboardHeading />
      <div className="flex ">
        <div className="p-6  w-full ">
          <RevenueRecovery />
          <RevenueBreakdownCard />
        </div>
        <UpdatesPanel />
      </div>
    </main>
  );
}
