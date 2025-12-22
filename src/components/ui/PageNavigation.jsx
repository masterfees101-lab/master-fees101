import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { useAuth } from "@/context/AuthContext";
import { seedAllData, clearAllSeedData } from "@/services/supabase/seedData";
import {
  HamburgerIcon,
  HomeIcon,
  MenuIcon,
  Receipt,
  Scroll,
  Settings,
  Smile,
  SmileIcon,
  User2Icon,
  Wallet,
  Wand2Icon,
  Database,
} from "lucide-react";
const iconSize = 18;
function PageNavigation() {
  const { user } = useAuth();
  const [seeding, setSeeding] = useState(false);
  const [clearing, setClearing] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSeed = async () => {
    setSeeding(true);
    setMessage(null);
    const result = await seedAllData(user?.id);
    setMessage(result);
    setSeeding(false);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleClear = async () => {
    setClearing(true);
    setMessage(null);
    const result = await clearAllSeedData();
    setMessage(result);
    setClearing(false);
    setTimeout(() => setMessage(null), 3000);
  };

  const navItems = [
    { name: "Homepage", path: "/main", icon: <HomeIcon size={iconSize} /> },
    {
      name: "Transactions",
      path: "transactions",
      icon: <Scroll size={iconSize} />,
    },
    {
      name: "Customer Management",
      path: "customers",
      icon: <User2Icon size={20} />,
    },
    { name: "Tasks", path: "tasks", icon: <Wand2Icon size={iconSize} /> },
    { name: "Wallet", path: "wallet", icon: <Wallet size={iconSize} /> },
  ];

  const supportItems = [
    {
      name: "Integrations",
      path: "integrations",
      icon: <Scroll size={iconSize} />,
    },
    {
      name: "Customer Care & Help",
      path: "customer_support",
      icon: <Smile size={iconSize} />,
    },
    { name: "Settings", path: "settings", icon: <Settings size={iconSize} /> },
  ];

  return (
    <div className="h-screen w-64 bg-[#F5F7F9]  flex flex-col justify-between">
      <div>
        <div className="p-2  mt-2 flex items-center justify-start">
          <Logo width={212.8} height={31} />
          <MenuIcon />
        </div>
        <nav className="mt-6">
          <div className="mt-8 px-6 text-[#9CA0A4] uppercase text-[11px] ">
            General
          </div>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  end={item.path === "/main"}
                  to={item.path}
                  className={({ isActive }) =>
                    ` px-6 py-3 rounded-lg flex gap-4 text-gray-700 text-[13px] hover:bg-[#CFF2BD] hover:text-green-800 transition-colors ${
                      isActive
                        ? "bg-[#CFF2BD] text-green-800 font-semibold"
                        : ""
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-8 px-6 text-[#9CA0A4] uppercase text-[11px] ">
            Support
          </div>
          <ul className="mt-2 flex flex-col gap-2">
            {supportItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  end={item.path === "/main"}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex px-6 py-3 rounded-lg gap-4 text-[#000000] text-[13px]  hover:bg-gray-100 hover:text-gray-800 transition-colors ${
                      isActive ? "bg-gray-100 text-[#003630] font-semibold" : ""
                    }`
                  }
                >
                  {item.icon}

                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        {/* Seed Data Buttons */}
        <div className="flex gap-2 mb-3">
          <button
            onClick={handleSeed}
            disabled={seeding || clearing}
            className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs font-medium transition-all ${
              seeding
                ? "bg-green-200 text-green-800 cursor-wait"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            <Database size={14} />
            {seeding ? "Seeding..." : "Seed DB"}
          </button>
          <button
            onClick={handleClear}
            disabled={seeding || clearing}
            className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs font-medium transition-all ${
              clearing
                ? "bg-red-200 text-red-800 cursor-wait"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            {clearing ? "Clearing..." : "Clear DB"}
          </button>
        </div>
        {message && (
          <div
            className={`text-xs p-2 rounded-lg mb-2 ${
              message.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.message}
          </div>
        )}
        <div className="text-xs text-gray-400 text-center">
          © All Rights Reserved 2025 <br /> Fee Master Ltd.
        </div>
      </div>
    </div>
  );
}

export default PageNavigation;
