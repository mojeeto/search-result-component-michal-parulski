import React from "react";
import { InitialDataType } from "./constants";
import Divider from "./Divider";
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
      className="flex flex-col w-full justify-center pt-0 pb-0 animate-fadeUp"
      style={{ animationDelay: "0.6s" }}
    >
      {loading ? (
        <ResultSkeleton />
      ) : (
        data.map((d) => (
          <React.Fragment key={d.id}>
            <Result data={d} keyword={keyword} />
            {d.id !== data[data.length - 1].id && <Divider />}
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default SearchResults;
