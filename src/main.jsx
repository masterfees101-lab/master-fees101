import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@context/AuthProvider";
import App from "./App";
import "./index.css";
import Wallet from "./pages/navigationViews/Wallet";
import { WalletProvider } from "./context/WalletContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
