import { useAuth } from "@/context/AuthContext";
import wallet from "@assets/icons/menu/wallet.svg";
import { DEFAULT_BALANCE } from "@utils/constants";

function DashboardHeading({ showBalance = true }) {
  const balance = DEFAULT_BALANCE;
  const { user } = useAuth();
  return (
    <header
      className={`flex items-center ${
        showBalance ? "justify-between" : "justify-end"
      }`}
    >
      <h1 className="text-[17px] font-bold">
        {user.user_metadata.display_name || ""}
      </h1>
      {showBalance && (
        <span className="flex gap-2 text-[16px] font-bold items-center">
          <img src={wallet} alt="wallet icon" width={20} />
          <span>ZMW {balance}</span>
        </span>
      )}
    </header>
  );
}

export default DashboardHeading;
