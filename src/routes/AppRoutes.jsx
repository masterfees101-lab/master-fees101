import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardSelect from "../pages/DashboardSelect";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboardSelect" element={<DashboardSelect />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Protected routes commented out for development */}
      {/* <Route
        path="/dashboardSelect"
        element={
          <ProtectedRoute>
            <DashboardSelect />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
