import WithdrawSuccess from "@/components/ui/WithdrawSuccess";
import DashboardHeading from "../../components/ui/DashboardHeading";
import SortFilterSearch from "../../components/ui/SortFilterSearch";
import WalletHistoryTable from "../../components/ui/WalletHistoryTable";
import WalletSummary from "../../components/ui/WalletSummary";
import WithdrawForm from "@/components/ui/WithdrawForm";
import { useWallet } from "@/context/WalletContext";

export default function Wallet() {
  const { status } = useWallet();

  return (
    <div className="bg-white p-7 h-screen rounded-md thin-scrollbar overflow-auto hover:overflow-auto ">
      <DashboardHeading />
      {status !== "success" && <WalletSummary />}

      {!status && (
        <>
          <div className="flex justify-between mt-10 px-10">
            <h3 className="font-semibold text-[16px]">
              Master Wallet Account Summary
            </h3>
            <SortFilterSearch />
          </div>
          <WalletHistoryTable />
        </>
      )}
      {status === "withdraw" && <WithdrawForm />}
      {status === "success" && <WithdrawSuccess />}
    </div>
  );
}
