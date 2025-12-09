import "./App.css";
import { Toaster } from "react-hot-toast";
import AppRoutes from "@routes/AppRoutes";
import ErrorBoundary from "@components/ErrorBoundary";
import { TOAST_DURATION } from "@utils/constants";
import Dashboard from "@/pages/Dashboard";
import DashboardSelect from "@/pages/DashboardSelect";
import Login from "@/pages/Login";
import CustomerManagement from "@/pages/navigationViews/CustomerManagement";
import HomePage from "@/pages/navigationViews/HomePage";
import Tasks from "@/pages/navigationViews/Tasks";
import Transactions from "@/pages/navigationViews/Transactions";
import Wallet from "@/pages/navigationViews/Wallet";
import { WalletProvider } from "./context/WalletContext";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerSupport from "@/pages/navigationViews/CustomerSupport";
import Settings from "@/pages/navigationViews/Settings";
import PageNotFound from "@/pages/PageNotFound";
import Integrations from "@/pages/navigationViews/Integrations";
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <WalletProvider>
          <Routes>
            <Route path="/" index element={<Login />} />
            <Route path="/dashboardselect" element={<DashboardSelect />} />
            <Route path="main" element={<Dashboard />}>
              <Route index element={<HomePage />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="customers" element={<CustomerManagement />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="integrations" element={<Integrations />} />
              <Route path="customer_support" element={<CustomerSupport />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </WalletProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: TOAST_DURATION,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
          },
        }}
      />
    </ErrorBoundary>
  );
}

export default App;
