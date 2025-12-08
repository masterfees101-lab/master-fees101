import { useState } from "react";
import Button from "../ui/Button";
import { generalViews, supportViews } from "@utils/views";
import Logo from "../ui/Logo";
import Footer from "./Footer";

export default function Aside({ handleViewSelection }) {
    const [selectedKey, setSelectedKey] = useState('homepage');

    const onSelect = (key) => {
        setSelectedKey(key);
        handleViewSelection?.(key);
    };
    return (
        <aside className="w-[252px] h-full flex flex-col justify-between p-2 bg-[#F5F7F9]">
            <div>
                <Logo className="relative p-2" />
                <div className="mt-10 p-2">
                    <h1 className="text-[11px] text-[#9CA0A4]">General</h1>
                    <div className="py-2 w-full">
                        {
                            generalViews.map((view) => (
                                <Button
                                    className={`rounded-[7px] text-left w-full flex items-center gap-2 px-3.5 py-2.5 my-2 transition-all duration-150 hover:bg-lime-bg ${selectedKey === view.key ? "bg-lime-bg text-primary font-semibold" : "bg-transparent"}`}
                                    key={view.key}
                                    onClick={() => onSelect(view.key)}
                                >
                                    <img src={view.icon} alt={`${view.label} icon`} className="" />
                                    <span className="text-[13px] text-primary">{view.label}</span>
                                </Button>
                            ))
                        }
                    </div>
                    <h1 className="text-[11px] text-[#9CA0A4]">Support</h1>
                    <div className="py-2 w-full">
                        {
                            supportViews.map((view) => (
                                <Button
                                    className={`rounded-[7px] w-full text-left flex items-center gap-2 px-3.5 py-2.5 my-2 transition-all duration-150 hover:bg-lime-bg ${selectedKey === view.key ? "bg-lime-bg text-primary font-semibold" : "bg-transparent"}`}
                                    key={view.key}
                                    onClick={() => onSelect(view.key)}
                                >
                                    <img src={view.icon} alt={`${view.label} icon`} className="" />
                                    <span className="text-[13px] text-primary">{view.label}</span>
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer className="text-center text-[8px] mb-4 text-[#707479]" />
        </aside>
    );
}