import React from "react";

export default function Navbar() {
  return (
    <div className="h-[10vh] p-4  bg-white flex justify-between mb-8 mr-44 ml-44 xsm:hidden">
      <button className="bg-slate-800 text-gray-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <img src="/img/Logo.png" alt="logo" />
    </div>
  );
}
