import { useNavigate } from "react-router-dom";

export default function WithdrawSuccess({ amount = 100 }) {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center py-10 h-full">
      <div className="w-full  rounded-2xl border border-gray-300 p-12 flex flex-col items-center justify-center text-center">
        {/* Success Icon */}
        <div className="w-32 h-32 bg-[#003C32] rounded-[30%] flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-[24px] font-medium text-gray-900">
          Transfer request of <span className="font-bold">K{amount}</span>{" "}
          successfully initiated
        </h1>

        {/* Subtitle */}
        <p className="text-black mt-2 text-[16px] font-light">
          You can see the status progress of your withdraw request on the <br />
          Cashier Page.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 border border-gray-700 rounded-md text-gray-800 hover:bg-gray-100 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
