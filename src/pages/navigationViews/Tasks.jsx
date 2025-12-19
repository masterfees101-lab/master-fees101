import DashboardHeading from "@components/ui/DashboardHeading";
import Button from "@components/ui/Button";
import TaskCard from "@components/ui/TaskCard";
import { MOCK_TASKS, TASK_COUNT } from "@utils/constants";
import ScheduledTasksCalendar from "@/components/ui/ScheduledTasksCalendar";
import { MoreHorizontal } from "lucide-react";

const tasks = MOCK_TASKS;

export default function Tasks() {
  const taskCount = TASK_COUNT;
  return (
    <main className="bg-white p-7 h-screen rounded-md overflow-auto thin-scrollbar">
      <DashboardHeading showBalance={false} />
      <div className="flex gap-14 mt-5 items-center">
        <h3 className="font-bold text-2xl text-[#003630]">
          Scheduled Tasks Calendar
        </h3>
        <p className="flex items-center gap-4 text-gray-500 font-medium">
          <span>Task Schedule List</span>
          <span className="w-5 h-5 text-[10px] text-white font-bold bg-[#FF4C4C] rounded-full inline-flex items-center justify-center">
            {taskCount}
          </span>
        </p>
      </div>

      <ScheduledTasksCalendar />

      <div className="mt-8 rounded-2xl bg-[#003630] p-6 min-h-[400px]">
        <div className="flex flex-row items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white">
            Upcoming Scheduled Tasks
          </h3>
          <div className="flex items-center gap-4">
            <Button className="bg-[#B6F09C] text-[#003630] text-sm font-bold px-6 py-2 rounded-xl hover:bg-[#a5e08b]">
              Task History
            </Button>
            <button className="text-white" aria-label="More options">
              <MoreHorizontal />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 min-h-[300px]">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              status={task.status}
              month={task.month}
              day={task.day}
              estimatedTime={task.estimatedTime}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
