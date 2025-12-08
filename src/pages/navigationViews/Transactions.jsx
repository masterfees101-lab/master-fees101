import ReceivablesPanel from "@components/ui/ReceivablesPanel";
import DashboardHeading from "@components/ui/DashboardHeading";

export default function Transactions() {
    return (
        <main className="bg-white p-7 h-screen rounded-md overflow-auto">
            <DashboardHeading />
            <ReceivablesPanel />
        </main>
    );
}