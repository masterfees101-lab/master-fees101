import { useState } from "react";
import Logo from "../components/ui/Logo";
import { useNavigate } from "react-router-dom";
import dashboardContents from "../utils/dashboardContents";
import DashboardCard from "../components/ui/DashboardCard";
import Button from "../components/ui/Button";

export default function DashboardSelect() {
  const navigate = useNavigate();
  const [selectedDashboard, setSelectedDashboard] = useState("");

  return (
    <div className="h-auto bg-white flex flex-col items-center justify-center">
      <Logo className="fixed bg-white px-6 py-2" />
      <div className="pt-[92px] pb-[120px] ">
        <h3 className="mb-6 text-2xl font-semibold text-center">
          Blue Opus Dashboards
        </h3>

        <div className="shadow-inner border border-lime-text rounded-lg p-4 mb-12">
          <h2 className="font-semibold">
            Select Dashboard
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
            {dashboardContents.map((content, index) => (
              <DashboardCard
                key={index}
                {...content}
                onClick={() => setSelectedDashboard(content.route)}
                className="mx-2"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="fixed h-28 bottom-0 left-0 right-0">
        <Button
          className="flex items-center justify-center font-semibold rounded-xl  
        shadow-[0_3px_2px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.8)] hover:scale-[1.01] transition-all duration-150 disabled:opacity-50 disabled:hover-none disabled:border-none disabled:cursor-not-allowed w-[340px] h-[47px] top-0 mx-auto bg-primary text-white"
          onClick={() => navigate(selectedDashboard || "/dashboard")}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
