import React, { useState } from "react";

const SearchModalComponent: React.FC = () => {
  // good initial height is 64px
  const [searchComponentHeight, setSearchComponentHeight] =
    useState<number>(64);
  return (
    <div
      className="flex flex-col py-5 px-3 bg-white rounded-lg text-md transition-[height] duration-1000"
      style={{ height: `${searchComponentHeight}px` }}
    >
      <div className="flex gap-2 items-center text-stone-400 w-[350px] md:w-[500px]">
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Searching is easier"
          className="border-none outline-none text-stone-800 placeholder:font-normal font-medium flex-1"
        />
        <span className="hidden md:block">quick access</span>
      </div>
    </div>
  );
};

export default SearchModalComponent;
