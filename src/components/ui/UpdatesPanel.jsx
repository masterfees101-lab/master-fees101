import {
  FileWarning,
  MessageCircleWarning,
  Verified,
  VerifiedIcon,
} from "lucide-react";
import React from "react";

const updates = [
  {
    id: 1,
    title: "Payment Received",
    message: (
      <>
        You have received <span className="font-bold">165 new payments</span> in
        the last 24 hours.
      </>
    ),
    linkText: "Check Transactions",
    linkHref: "#",
    type: "success",
  },
  {
    id: 2,
    title: "Automated Balance Recovery initiated",
    message:
      "120 Reminder Alerts have been sent to the customers that still have balances. Click below to view the details.",
    linkText: "View Recovery Details",
    linkHref: "#",
    type: "info",
  },
  {
    id: 3,
    title: "Balances Alert!",
    message:
      "Many parents haven’t adhered to school payment policy's. Click the button below to follow up the issue.",
    linkText: "View Customers",
    linkHref: "#",
    type: "error",
  },
];

const typeStyles = {
  success: "",
  info: "",
  error: "",
};

export default function UpdatesPanel() {
  return (
    <div className=" shadow-lg rounded-lg p-6 w-full  max-w-lg mx-auto mt-7">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Updates</h2>
        <button className="text-sm text-gray-500 hover:underline">
          Mark all as read{" "}
          <span className="bg-red-600 text-white rounded-full px-2 py-0.5 text-xs ml-1">
            3
          </span>
        </button>
      </div>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className={`flex items-start p-4 border-2 rounded-md shadow-sm ${
              typeStyles[update.type]
            }`}
          >
            <div className="shrink-0 mr-3 mt-1">
              {update.type === "success" && (
                <span className="">
                  {" "}
                  <VerifiedIcon fill="#003630" color="white" />
                </span>
              )}
              {update.type === "info" && (
                <span className="">
                  <VerifiedIcon fill="#003630" color="white" />
                </span>
              )}
              {update.type === "error" && (
                <span>
                  <MessageCircleWarning color="red" />
                </span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{update.title}</h3>
                <button className="text-gray-400 hover:text-gray-600">×</button>
              </div>
              <p className="text-sm mt-1">{update.message}</p>
              <a
                href={update.linkHref}
                className="text-sm font-semibold text-black underline mt-1 inline-block"
              >
                {update.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
