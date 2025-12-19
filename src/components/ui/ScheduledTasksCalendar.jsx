import React from "react";
import { MoreVertical, CheckCircle2 } from "lucide-react";

export default function ScheduledTasksCalendar() {
  const months = ["April", "May", "June", "July"];
  const days = [7, 14, 28];

  return (
    <div className="w-full bg-white mt-8 mb-8 overflow-x-auto thin-scrollbar">
      {/* Calendar Header with Months */}
      <div className="flex w-full min-w-[800px]">
        <div className="w-[250px] shrink-0 p-4 text-xs font-medium text-gray-500">
          Scheduled Tasks
        </div>
        <div className="flex-1 flex justify-between px-4">
          {months.map((month) => (
            <div
              key={month}
              className="flex-1 text-center text-xs font-bold text-gray-700"
            >
              {month}
            </div>
          ))}
        </div>
      </div>

      {/* Days Row */}
      <div className="flex w-full min-w-[800px] border-b border-gray-100 pb-2">
        <div className="w-[250px] shrink-0"></div>
        <div className="flex-1 flex text-[10px] text-gray-400">
          {months.map((_, i) => (
            <div key={i} className="flex-1 flex justify-around">
              {days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Body */}
      <div className="flex w-full min-w-[800px] h-[300px] relative">
        {/* Vertical Red Line (Current Date Indicator) */}
        <div className="absolute top-0 bottom-0 left-[78%] w-px bg-red-500 z-10">
          <div className="absolute -top-1 -left-1.5 w-4 h-4 bg-red-500 rounded-full text-white text-[8px] flex items-center justify-center font-bold">
            25
          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 flex left-[250px]">
          {months.map((_, i) => (
            <div
              key={i}
              className={`flex-1 border-r border-gray-100 h-full flex`}
            >
              <div className="flex-1 border-r border-gray-50 h-full"></div>
              <div className="flex-1 border-r border-gray-50 h-full"></div>
              <div className="flex-1 h-full"></div>
            </div>
          ))}
        </div>

        {/* Task Card Column */}
        <div className="w-[250px] shrink-0 p-4 border-r border-gray-100 relative z-20 bg-white">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm w-full">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-sm">Task Title</h3>
              <MoreVertical size={14} className="text-gray-400" />
            </div>
            <p className="text-[10px] text-gray-400 mb-3">
              Schedule Repetition Frequency
            </p>
            <div className="inline-flex items-center gap-1 bg-[#B6F09C] text-[#003630] px-2 py-0.5 rounded-full text-[10px] font-bold">
              <CheckCircle2 size={10} /> Active
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="flex-1 relative pt-8 z-0">
          {/* These are absolutely positioned examples based on the design */}
          <div className="absolute left-[5%] top-8 bg-[#E7F9DE] text-[#003630] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#003630]"></div> Done
          </div>

          <div className="absolute left-[15%] top-20 bg-[#E7F9DE] text-[#003630] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#003630]"></div> Done
          </div>

          <div className="absolute left-[25%] top-32 bg-[#E7F9DE] text-[#003630] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#003630]"></div> Done
          </div>
        </div>
      </div>
    </div>
  );
}
