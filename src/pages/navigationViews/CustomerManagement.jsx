import CustomersTable from "@components/ui/CustomerTableComponent";
import DashboardHeading from "@components/ui/DashboardHeading";

export default function CustomerManagement() {
  return (
    <div className="bg-white p-7 h-screen rounded-md overflow-auto hover:overflow-auto thin-scrollbar">
      <DashboardHeading />
      <CustomersTable />
    </div>
  );
}
