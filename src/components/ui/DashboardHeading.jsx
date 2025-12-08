import wallet from "@assets/icons/menu/wallet.svg";
import { DEFAULT_BALANCE, DEFAULT_SCHOOL_NAME } from "@utils/constants";

function DashboardHeading({showBalance = true}) {
  const balance = DEFAULT_BALANCE;
  const title = DEFAULT_SCHOOL_NAME;
  return (
    <header className={`flex items-center ${showBalance ? 'justify-between' : 'justify-end'}`}>
      <h1 className="text-[17px] font-bold">{title}</h1>
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
