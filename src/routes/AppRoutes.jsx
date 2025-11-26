import { Routes, Route } from "react-router-dom";
import Login from "../pages/dashboard/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<h1 className="text-2xl p-6">Dashboard Home</h1>} />
    </Routes>
  );
}
