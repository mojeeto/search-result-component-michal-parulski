import React from "react";
import ResultSkeleton from "./ResultSkeleton";

const SearchResults: React.FC = () => {

  return (
    <div className="flex flex-col w-full justify-center px-5 pt-0 pb-0 divide-y-2 divide-gray-200">
      <ResultSkeleton />
    </div>
  );
};

export default SearchResults;
