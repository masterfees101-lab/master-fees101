import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const WalletContext = createContext();
function WalletProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  return (
    <WalletContext.Provider value={{ status, searchParams, setSearchParams }}>
      {children}
    </WalletContext.Provider>
  );
}
function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}

export { useWallet, WalletProvider };
