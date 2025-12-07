import StatusCard from "./StatusCard";
import Button from "./Button";
import { EllipsisVertical } from "lucide-react";

export default function TaskCard({ title, status, month, day, estimatedTime }) {
    return (
        <div className="bg-white w-full flex flex-row items-center gap-20 my-4 rounded-[5px]">
            <div className="text-(--primary-color) flex flex-row items-center justify-between">
                <h3 className="text-center">
                    <span className="block text-xs font-light">{month}</span>
                    <span className="block text-2xl font-bold">{day}</span>
                </h3>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <div>
                    <div className="flex flex-row items-center gap-5">
                        <h3 className="text-sm text-center">{title}</h3>
                        <StatusCard value={status} />
                    </div>
                    <p>
                        <span className="text-[8px]">Estimated time to execution </span>
                        <span className="text-[8px] font-bold">{estimatedTime}</span>
                    </p>
                </div>
                <Button>
                    <EllipsisVertical />
                </Button>
            </div>
        </div>
    );
}