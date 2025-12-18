import { Search, ChevronDown, Image as ImageIcon } from "lucide-react";

export default function Settings() {
  const tabs = [
    { name: "Account Info", active: true },
    { name: "Users", active: false },
    { name: "Banking Info", active: false },
    { name: "Pricing Structure", active: false },
    { name: "Account Verification", active: false },
    { name: "Subscription & Billing", active: false },
  ];

  return (
    <div className="bg-white p-8 w-full font-sans text-gray-800 rounded">
      <div className="max-w-[1400px]">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              System Settings
            </h1>
            <p className="text-gray-500 text-lg">
              Setup and edit system settings and preferences
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Settings"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b border-gray-100 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors relative ${
                tab.active
                  ? "text-green-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500"
                  : "text-gray-300 hover:text-gray-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-8 text-black">Account Info</h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {/* Column 1 */}
            <div className="space-y-8">
              {/* Organization Email Address */}
              <div className="space-y-2">
                <label className="block text-gray-600 font-medium text-sm">
                  Organization Email Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="twalumbuaccsdept@gmail.com"
                    className="w-full p-4 pr-10 border border-gray-300 rounded-lg text-gray-500 outline-none focus:border-green-500 bg-white"
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-gray-600 font-medium text-sm">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    defaultValue="xxxxxxxxxxxx"
                    className="w-full p-4 pr-10 border border-gray-300 rounded-lg text-gray-400 outline-none focus:border-green-500 bg-white tracking-widest"
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {/* Name of Institution */}
              <div className="space-y-2">
                <label className="block text-gray-600 font-medium text-sm">
                  Name of Institution
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Twalumbu Education Centre"
                    className="w-full p-4 pr-10 border border-gray-300 rounded-lg text-gray-500 outline-none focus:border-green-500 bg-white"
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* School Logo Upload */}
              <div className="space-y-2 h-[calc(100%-88px)] min-h-[160px]">
                <label className="block text-gray-600 font-medium text-sm">
                  School Logo Upload
                </label>
                <div className="w-full h-[220px] border border-gray-300 rounded-lg flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="bg-blue-50/50 p-4 rounded-lg">
                    <ImageIcon className="w-10 h-10 text-blue-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              {/* Business Physical Address */}
              <div className="space-y-2">
                <label className="block text-gray-600 font-medium text-sm">
                  Business Physical Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Plot No. 809 Ibex Dam Area, Chongwe"
                    className="w-full p-4 pr-10 border border-gray-300 rounded-lg text-gray-400 outline-none focus:border-green-500 bg-white truncate"
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Official Telephone Number */}
              <div className="space-y-2">
                <label className="block text-gray-600 font-medium text-sm">
                  Official Telephone Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="+260867485884"
                    className="w-full p-4 pr-10 border border-gray-300 rounded-lg text-gray-400 outline-none focus:border-green-500 bg-white"
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Organizational Category */}
              <div className="space-y-2">
                <label className="block text-gray-600 font-medium text-sm">
                  Organizational Category
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Primary School"
                    className="w-full p-4 pr-10 border border-gray-300 rounded-lg text-gray-400 outline-none focus:border-green-500 bg-white"
                    readOnly
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
