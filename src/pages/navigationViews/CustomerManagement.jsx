import CustomersTable from "@components/ui/CustomerTableComponent";
import DashboardHeading from "@components/ui/DashboardHeading";
import { CustomerProvider, useCustomer } from "@/context/CustomerContext";
import ImportCustomers from "@components/ui/ImportCustomers";
import CustomerDetails from "@components/ui/CustomerDetails";
import Spinner from "@/components/ui/Spinner";
import ErrorMessage from "@/components/ui/ErrorMessage";

function CustomerContent() {
  const { view, clearView, customerId } = useCustomer();

  if (view === "import") {
    return (
      <div className="bg-white p-7 h-screen rounded-md overflow-auto hover:overflow-auto thin-scrollbar flex flex-col">
        <div className="mb-6 flex items-center gap-2">
          <button
            onClick={clearView}
            className="text-[#003630] font-bold text-xl"
          >
            {"<"}
          </button>
          <DashboardHeading />
        </div>

        <ImportCustomers />
      </div>
    );
  }
  //To look at the student's details
  if (view === "details") {
    return (
      <div className="h-screen rounded-md overflow-hidden bg-white">
        <CustomerDetails customerId={customerId} onBack={clearView} />
      </div>
    );
  }

  return (
    <div className="bg-white p-7 h-screen rounded-md overflow-auto hover:overflow-auto thin-scrollbar">
      <DashboardHeading />
      <CustomersTable />
    </div>
  );
}

export default function CustomerManagement() {
  return (
    <CustomerProvider>
      <CustomerContent />
    </CustomerProvider>
  );
}
