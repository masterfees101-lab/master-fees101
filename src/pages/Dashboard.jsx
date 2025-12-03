import { useState } from "react";
import { generalViews, supportViews } from "../utils/views";
import Aside from "../components/ui/Aside";

export default function Dashboard() {
    const [activeView, setActiveView] = useState("homepage");

    // Build a lookup from arrays
    const allViews = [...generalViews, ...supportViews].reduce((acc, v) => {
        acc[v.key] = v.component;
        return acc;
    }, {});

    const renderView = () => {
        const ViewComponent = allViews[activeView] || allViews["homepage"];
        return ViewComponent ? <ViewComponent /> : null;
    };

    return (
        <div className="flex flex-row h-screen">
            <Aside handleViewSelection={setActiveView} />
            <main className="flex-1 p-6 bg-gray-100 ">
                {renderView()}
            </main>
        </div>
    );
}
