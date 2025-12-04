import wallet from "../../assets/images/icons/menu/wallet.svg";

function DashboardHeading() {
  const balance = "1,532,000.00";
  return (
    <header className="flex justify-between">
      <h1 className="text-[17px] font-bold">Twalumbu Education Centre</h1>
      <span className="flex gap-2 text-[16px] font-bold items-center">
        <img src={wallet} alt="wallet icon" width={20} />
        <span>ZMW {balance}</span>
      </span>
    </header>
  );
}

export default DashboardHeading;
