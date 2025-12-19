import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CustomerContext = createContext();

function CustomerProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view");
  const customerId = searchParams.get("customerId");

  // Helper to change view
  const setView = (newView, id = null) => {
    const params = { view: newView };
    if (id) params.customerId = id;
    setSearchParams(params);
  };

  const clearView = () => {
    setSearchParams({});
  };

  return (
    <CustomerContext.Provider
      value={{
        view,
        customerId,
        searchParams,
        setSearchParams,
        setView,
        clearView,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

function useCustomer() {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error("useCustomer must be used within a CustomerProvider");
  }
  return context;
}

export { useCustomer, CustomerProvider };
