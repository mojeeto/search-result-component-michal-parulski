import React from "react";
import { InitialDataType } from "./constants";
import Result from "./Result";
import ResultSkeleton from "./ResultSkeleton";

interface SearchResultProps {
  keyword: string;
  loading: boolean;
  data: InitialDataType[];
}

const SearchResults: React.FC<SearchResultProps> = ({
  keyword,
  loading,
  data,
}) => {
  return (
    <div
      className="flex flex-col w-full justify-center px-5 md:px-8 pt-0 pb-0 divide-y-2 divide-gray-100 animate-fadeUp"
      style={{ animationDelay: "0.6s" }}
    >
      {loading ? (
        <ResultSkeleton />
      ) : (
        data.map((d) => {
          return <Result key={d.id} data={d} keyword={keyword} />;
        })
      )}
    </div>
  );
};

export default SearchResults;
