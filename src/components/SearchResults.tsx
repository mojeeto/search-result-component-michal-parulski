import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { initialData, InitialDataType } from "./constants";
import Result from "./Result";
import ResultSkeleton from "./ResultSkeleton";

interface SearchResultProps {
  keyword: string;
  loadingState: {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
  };
}

const SearchResults: React.FC<SearchResultProps> = ({
  keyword,
  loadingState,
}) => {
  const [data, setData] = useState<InitialDataType[]>([]);
  useEffect(() => {
    loadingState.setLoading(true);
    const handler = () => {
      const finalData = initialData.filter(
        (data) => data.name.search(new RegExp(keyword, "i")) !== -1
      );
      setData(finalData);
      loadingState.setLoading(false);
    };
    const timeout = setTimeout(handler, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [keyword]);

  return (
    <div
      className="flex flex-col w-full justify-center px-5 pt-0 pb-0 divide-y-2 divide-gray-200 animate-fadeUp"
      style={{ animationDelay: "0.6s" }}
    >
      {loadingState.loading ? (
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
