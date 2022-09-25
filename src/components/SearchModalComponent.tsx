import React, { useCallback, useEffect, useRef, useState } from "react";
import SearchResultOptions from "./SearchResultOptions";
import KeyShape from "./utils/KeyShape";
import SearchIcon from "./utils/SearchIcon";

const SearchModalComponent: React.FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSearching, setSearchingState] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: target,
  }) => {
    if (!searchActive) {
      setSearchActive(true);
      return;
    }
    const newValue = target.value;
    setInputSearchValue(newValue);
    if (newValue !== "") {
      setLoading(true);
      setSearchingState(true);
    } else {
      setLoading(false);
      setSearchingState(false);
    }
  };

  const clearOnClick = () => {
    setInputSearchValue("");
    setLoading(false);
    setSearchingState(false);
  };

  const onBlurInput: React.FocusEventHandler = (_) => {
    setSearchActive(false);
  };

  const keypressEventListener = useCallback((e: KeyboardEvent) => {
    const key = e.code;
    if (key === "KeyS") {
      if (!inputRef.current) {
        return;
      }
      inputRef.current.focus();
      window.removeEventListener("keypress", keypressEventListener);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keypress", keypressEventListener);
  }, [keypressEventListener, searchActive]);

  return (
    <div className="flex flex-col gap-5 w-[350px] md:w-[500px] lg:w-[600px] py-5 md:py-7 bg-white rounded-xl text-[18px] md:text-2xl transition-[height] duration-1000 shadow-stone-400 shadow-md">
      <div className="flex gap-2 items-center text-stone-400 px-3 md:px-5">
        <SearchIcon />
        <input
          type="text"
          placeholder="Searching is easier"
          className="border-none outline-none text-stone-800 placeholder:font-light placeholder:text-stone-400 font-normal flex-1"
          value={inputSearchValue}
          onChange={onChangeSearchInput}
          onBlur={onBlurInput}
          ref={inputRef}
        />
        {!inputSearchValue ? (
          <div className="hidden lg:flex text-sm items-center gap-2">
            <KeyShape character="s" />
            <span>quick access</span>
          </div>
        ) : (
          <button
            className="text-gray-700 underline underline-offset-2 text-xs md:text-lg"
            onClick={clearOnClick}
          >
            Clear
          </button>
        )}
      </div>
      {isSearching && (
        <div className="flex flex-col items-start">
          <SearchResultOptions />
          <div>{isLoading && "Loading..."}</div>
        </div>
      )}
    </div>
  );
};

export default SearchModalComponent;
