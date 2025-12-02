import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashboardSelect from "../pages/DashboardSelect";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboards" element={<DashboardSelect />} />
    </Routes>
  );
}
