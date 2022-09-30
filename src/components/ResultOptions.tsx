import React from "react";
import LinkIcon from "./utils/LinkIcon";
import NewTabIcon from "./utils/NewTabIcon";

interface ResultOptionsProps {
  className?: string;
}

const ResultOptions: React.FC<ResultOptionsProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center text-lg gap-1 text-gray-400 ${className}`}
    >
      <LinkIcon className="p-1 hover:bg-gray-200 rounded-lg hover:text-gray-500" />
      <div className="flex items-center px-1.5 py-1.5 hover:bg-gray-200 rounded-lg hover:text-gray-500">
        <NewTabIcon />
        <span className="text-sm">New Tab</span>
      </div>
    </div>
  );
};

export default ResultOptions;
