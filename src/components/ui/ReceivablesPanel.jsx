import { ChevronRight, EllipsisVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/backgrounds/receivables-card-bg.png";
import settings from "../../assets/images/icons/menu/settings.svg";
import { PieChart, Pie, Cell } from "recharts";

// TODO: Replace with real data as well as percentage collected calculation
const categories = [
    { name: "Tuition Fees", revenue: 500, collected: 350, balance: 0 },
    { name: "Transport Fees", revenue: 100, collected: 30, balance: 0 },
    { name: "Canteen Fees", revenue: 300, collected: 300, balance: 0 },
    { name: "PTC Parent’s fees", revenue: 200, collected: 120, balance: 0 },
];

export default function ReceivablesPanel() {
    const navigate = useNavigate();

    const handleRowActivate = (name) => {
        const q = encodeURIComponent(name);
        navigate(`/transactions?category=${q}`);
    };

    const handleRowKey = (e, name) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleRowActivate(name);
        }
    };

    return (
        <div className="w-full mx-auto mt-0">
            <div className="ml-12 mb-2 mt-14 flex flex-row items-center gap-3 ">
                <span className="font-medium">Term 1 | 2026</span>
                <img src={settings} alt="settings icon" width={20} />
            </div>
            <div
                className="relative flex flex-row items-center justify-between rounded-[18px] bg-[#003f39] text-white px-16 h-32 shadow-lg w-full"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundOrigin: "cover",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div>
                    <p className="text-sm text-(--lime-text)">Total Revenue</p>
                    <h3 className="text-4xl font-extrabold tracking-tight mt-1">ZMW 0</h3>
                </div>

                <div>
                    <p className="text-sm text-(--lime-text)">Total Receivables</p>
                    <h3 className="text-4xl font-extrabold tracking-tight mt-1">ZMW 0</h3>
                </div>

                <button className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white rounded-[9px] p-2">
                    <EllipsisVertical />
                </button>
            </div>
            <div className="mt-12 bg-white w-5/6 mx-auto">
                <div className="text-sm font-semibold text-gray-700">
                    Product & Service Revenue Summary
                </div>

                <div>
                    <div className="grid grid-cols-[1fr_80px_80px_80px_28px] mt-4 text-xs text-gray-500">
                        <span>Service Category</span>
                        <span className="text-right">Revenue</span>
                        <span className="text-right">Collected</span>
                        <span className="text-right">Balance</span>
                    </div>

                    {categories.map((category) => (
                        <div
                            key={category.name}
                            role="button"
                            tabIndex={0}
                            onClick={() => handleRowActivate(category.name)}
                            onKeyDown={(e) => handleRowKey(e, category.name)}
                            className="grid grid-cols-[1fr_80px_80px_80px_28px] items-center gap-2 py-4 text-sm border-b border-gray-200 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-emerald-600"
                        >
                            <div className="flex items-center justify-between w-48">
                                <div className="ml-5">
                                    <div className="font-medium">{category.name}</div>
                                    <div className="text-[10px] text-(--primary-text) bg-[#95E36C] inline-block px-2 py-0.5 rounded-full">
                                        - % Collected
                                    </div>
                                </div>
                                <PieChart width={22} height={22}>
                                    <Pie
                                        data={[
                                            { name: "Collected", value: category.collected },
                                            { name: "Balance", value: category.balance },
                                        ]}
                                        dataKey="value"
                                        innerRadius={5}
                                        outerRadius={10}
                                        paddingAngle={1}
                                    >
                                        <Cell fill="#EEECEC" />
                                        <Cell fill="#003630" />
                                    </Pie>
                                </PieChart>
                            </div>
                            <div className="text-right font-medium">{category.revenue.toFixed(2)}</div>
                            <div className="text-right font-medium">{category.collected.toFixed(2)}</div>
                            <div className="text-right font-medium">{category.balance.toFixed(2)}</div>
                            <div className="flex items-center justify-end">
                                <ChevronRight size={15} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
