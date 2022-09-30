import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="flex items-center gap-2 animate-pulse p-5 md:px-8">
      <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
      <div className="flex flex-col gap-2">
        <div className="w-52 md:w-64 h-2 bg-gray-200 rounded-lg"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Skeleton;
