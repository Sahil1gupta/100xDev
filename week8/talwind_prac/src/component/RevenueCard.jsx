import React from "react";

const RevenueCard = ({ title, amount, orderCount }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="flex justify-start items-center gap-2">
        <div className="text-gray-400">{title}</div>
        <div className="w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="font-bold text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between ">
        <div className="text-black font-semibold text-2xl">{amount}</div>

        {orderCount && (
          <div className="flex font-medium justify-center items-center">
            <div className="flex items-center">
              <div className="text-blue-400 text-sm underline ">{`${orderCount} Orders`}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueCard;
