import React, { useEffect, useRef, useState } from "react";
import useKey from "./hooks/useKey";
import SearchResultOptions from "./SearchResultOptions";
import SearchResults from "./SearchResults";
import KeyShape from "./utils/KeyShape";
import SearchIcon from "./utils/SearchIcon";

const SearchModalComponent: React.FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [isSearching, setSearchingState] = useState<boolean>(false);
  const [modalParentHeight, setModalParentHeight] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const onChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: target,
  }) => {
    const newValue = target.value;
    setInputSearchValue(newValue);
    if (newValue !== "") {
      setSearchingState(true);
    } else {
      setSearchingState(false);
    }
  };

  const clearOnClick = () => {
    setInputSearchValue("");
    setSearchingState(false);
  };

  useKey("KeyS", () => {
    if (!inputRef.current) {
      return;
    }
    if (document.activeElement === inputRef.current) {
      return;
    }
    inputRef.current.focus();
  });

  useEffect(() => {
    if (!modalRef.current) return;
    setModalParentHeight(modalRef.current.clientHeight);
  }, [modalParentHeight, inputSearchValue, loading]);

  return (
    <div
      className="w-[350px] md:w-[550px] bg-white rounded-xl transition-[height] duration-1000 shadow-stone-400 shadow-md h-[88pxed"
      style={{ height: `${modalParentHeight}px` }}
    >
      <div
        className="flex flex-col gap-1 lg:gap-5 text-[18px] md:text-2xl py-5 md:py-7"
        ref={modalRef}
      >
        <div
          className="flex gap-2 items-center text-stone-400 px-3 md:px-5 animate-fadeUp"
          style={{ animationDelay: "0.5s" }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Searching is easier"
            className="border-none outline-none text-stone-800 placeholder:font-light placeholder:text-stone-400 font-normal flex-1 bg-transparent"
            value={inputSearchValue}
            onChange={onChangeSearchInput}
            ref={inputRef}
          />
          {!inputSearchValue ? (
            <div className="hidden lg:flex text-sm items-center gap-2">
              <KeyShape character="s" />
              <span>quick access</span>
            </div>
          ) : (
            <button
              className="text-gray-700 underline underline-offset-2 text-sm"
              onClick={clearOnClick}
            >
              Clear
            </button>
          )}
        </div>
        {isSearching && (
          <div className="flex flex-col items-start">
            <SearchResultOptions />
            <SearchResults
              keyword={inputSearchValue}
              loadingState={{ loading, setLoading }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModalComponent;
