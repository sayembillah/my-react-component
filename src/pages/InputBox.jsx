import React from "react";
import InputboxData from "../components/InputboxData";

const InputBox = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Description copied to clipboard!");
  };

  return (
    <div className="w-full mt-10 px-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-100 text-center mb-6">
        Input Box Showcase
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {InputboxData.map((inputBox, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center rounded-lg backdrop-blur-md border border-gray-500/30 p-6 text-gray-100 bg-gradient-to-br from-gray-800/60 to-gray-900/30 hover:from-gray-700/70 hover:to-gray-800/40 shadow-lg shadow-gray-800/40 transition-transform transform hover:scale-105"
          >
            {/* Copy Button */}
            <button
              onClick={() => handleCopy(inputBox.desc)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Copy description"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15.75v1.5a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25v-6a2.25 2.25 0 00-2.25-2.25h-1.5M15 8.25V6a2.25 2.25 0 00-2.25-2.25h-6A2.25 2.25 0 004.5 6v6A2.25 2.25 0 006.75 14.25h1.5"
                />
              </svg>
            </button>

            <div className="text-lg font-semibold">{inputBox.input}</div>
            <div className="text-sm text-gray-300 mt-2">{inputBox.name}</div>
            <div className="text-xs text-gray-400 mt-1">{inputBox.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputBox;
