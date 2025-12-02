import Logo from "../components/ui/Logo";
import { useNavigate } from "react-router-dom";
import dashboardContents from "../utils/dashboardContents";
import DashboardCard from "../components/ui/DashboardCard";
import Button from "../components/ui/Button";

export default function DashboardSelect() {
  const navigate = useNavigate();

  return (
    <div className="h-auto bg-white flex flex-col items-center justify-center">
      <Logo className="fixed top-0 left-0 bg-white" />
      <div className="pt-[92px] pb-[120px] ">
        <h3 className="mb-6 text-2xl font-semibold text-center">
          Blue Opus Dashboards
        </h3>

        <div className="shadow-inner border border-[#95E36C] rounded-lg p-4 mb-12">
          <h2 className="font-semibold">
            Select Dashboard
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
            {dashboardContents.map((content, index) => (
              <DashboardCard
                key={index}
                {...content}
                onClick={() => navigate(content.route)}
                className="mx-2"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="fixed h-28 bottom-0 left-0 right-0">
        <Button
          className="top-0 mx-auto bg-(--primary-color) text-white"
          onClick={() => navigate("/")}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
