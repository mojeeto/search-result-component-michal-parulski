import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { initialData, InitialDataType } from "./constants";
import SearchResultOptions from "./SearchResultOptions";
import SearchResults from "./SearchResults";

interface SearchResultSectionProps {
  keyword: string;
  loadingState: {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
  };
}

export type TypesCount = {
  all: number;
  users: number;
  files: number;
};

const initialTypesCount: TypesCount = {
  all: 0,
  users: 0,
  files: 0,
};

const SearchResultSection: React.FC<SearchResultSectionProps> = ({
  keyword,
  loadingState,
}) => {
  const [data, setData] = useState<InitialDataType[]>([]);
  const [typesCount, setTypesCount] = useState<TypesCount>(initialTypesCount);
  useEffect(() => {
    loadingState.setLoading(true);
    const handler = () => {
      const finalData = initialData.filter(
        (data) => data.name.search(new RegExp(keyword, "i")) !== -1
      );
      finalData.forEach(({ type }) => {
        if (type === "user") {
          setTypesCount((prevState) => ({
            ...prevState,
            users: prevState.users + 1,
            all: prevState.all + 1,
          }));
        } else {
          setTypesCount((prevState) => ({
            ...prevState,
            files: prevState.files + 1,
            all: prevState.all + 1,
          }));
        }
      });
      setData(finalData);
      loadingState.setLoading(false);
    };
    const timeout = setTimeout(handler, 2000);
    return () => {
      clearTimeout(timeout);
      setTypesCount(initialTypesCount);
    };
  }, [keyword]);

  return (
    <div className="flex flex-col items-start">
      <SearchResultOptions typesCount={typesCount} />
      <SearchResults
        keyword={keyword}
        loading={loadingState.loading}
        data={data}
      />
    </div>
  );
};

export default SearchResultSection;
