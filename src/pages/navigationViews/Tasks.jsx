import DashboardHeading from "../../components/ui/DashboardHeading";
import taskBg from "../../assets/backgrounds/tasks-bg.png";
import Button from "../../components/ui/Button";
import ellipsis from "../../assets/icons/ellipsis-vertical.svg";
import TaskCard from "../../components/ui/TaskCard";
import { MOCK_TASKS, TASK_COUNT } from "../../utils/constants";

const tasks = MOCK_TASKS;

export default function Tasks() {
    const taskCount = TASK_COUNT;
    return (
        <main className="bg-white p-7 h-screen rounded-md overflow-auto">
            <DashboardHeading showBalance={false} />
            <div className="flex gap-14 mt-5">
                <h3 className="font-medium text-2xl">Scheduled Tasks Calendar</h3>
                <p className="flex items-center gap-4">
                    <span>Task Schedule List</span>
                    <span className="w-5 h-5 text-[10px] text-white font-bold bg-red-500 rounded-full inline-flex items-center justify-center">{taskCount}</span>
                </p>
            </div>
            <div>
                {/* Calendar component */}
            </div>
            <div style={{backgroundImage: `url(${taskBg})` }} className="mt-8 px-2 h-auto bg-cover rounded-lg flex flex-col items-center justify-between">
                <div className="w-full my-6 flex flex-row items-center justify-between">
                    <h3 className="text-base text-white">Upcoming Scheduled Tasks</h3>
                    <div>
                        <Button className="bg-lime-text text-primary-text text-base font-semibold px-4 py-1.5 w-48 h-[39px] rounded-xl">
                            Task History
                        </Button>
                        <Button className="text-red-500 ml-10" aria-label="More options">
                            <img src={ellipsis} alt="More options" className="inline-block mr-2" width={24} height={24} />
                        </Button>
                    </div>
                </div>
                <div className="w-full px-10 border border-lime-bg rounded-lg bg-white h-auto ">
                   {
                    tasks.map((task, index) => (
                        <TaskCard
                            key={index}
                            title={task.title}
                            status={task.status}
                            month={task.month}
                            day={task.day}
                            estimatedTime={task.estimatedTime}
                        />
                    ))
                   }
                </div>
            </div>
        </main>
    );
}