import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login";
import DashboardSelect from "@pages/DashboardSelect";
import Dashboard from "@pages/Dashboard";
import PageNotFound from "@pages/PageNotFound";
import ProtectedRoute from "@components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboardSelect" element={<DashboardSelect />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      {/* Unknown routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
