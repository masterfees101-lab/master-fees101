import DashboardHeading from "../../components/ui/DashboardHeading";
import SortFilterSearch from "../../components/ui/SortFilterSearch";
import WalletHistoryTable from "../../components/ui/WalletHistoryTable";
import WalletSummary from "../../components/ui/WalletSummary";

export default function Wallet() {
  return (
    <div className="bg-white p-7 h-screen rounded-md thin-scrollbar overflow-auto hover:overflow-auto ">
      <DashboardHeading />
      <WalletSummary />
      <div className="flex justify-between mt-10 px-10">
        <h3 className="font-semibold text-[16px]">
          Master Wallet Account Summary
        </h3>
        <SortFilterSearch />
      </div>
      <WalletHistoryTable />
    </div>
  );
}
