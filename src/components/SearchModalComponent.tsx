import React, { useEffect, useRef, useState } from "react";
import SearchResultOptions from "./SearchResultOptions";
import KeyShape from "./utils/KeyShape";
import SearchIcon from "./utils/SearchIcon";

const SearchModalComponent: React.FC = () => {

  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    const target = searchInputRef.current;
    if (target) {
      target.focus();
      window.removeEventListener("keypress", eventListenerKeyPress);
    }
  }

  const onChangeSearchInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.currentTarget;
    if (target) {
      const newValue = target.value;
      setInputSearchValue(newValue);
    }
  }

  const onBlurSearchInput: React.ChangeEventHandler<HTMLInputElement> = (_) => {
    window.addEventListener("keypress", eventListenerKeyPress);
  }

  const eventListenerKeyPress = (e: KeyboardEvent) => {
    const keyTarget = e.code;
    if (keyTarget === "KeyS") {
      focusInput();
    }
  }

  useEffect(() => {
    if (searchInputRef) {
      window.addEventListener('keypress', eventListenerKeyPress)
    }
  }, [eventListenerKeyPress]);

  return (
    <div className="flex flex-col gap-5 w-[350px] md:w-[500px] py-5 bg-white rounded-xl text-[18px] md:text-xl transition-[height] duration-1000 shadow-stone-400 shadow-md">
      <div className="flex gap-2 items-center text-stone-400 px-3">
        <SearchIcon />
        <input
          type="text"
          placeholder="Searching is easier"
          className="border-none outline-none text-stone-800 placeholder:font-normal placeholder:text-stone-400 font-medium flex-1"
          ref={searchInputRef}
          value={inputSearchValue}
          onFocus={focusInput}
          onChange={onChangeSearchInput}
          onBlur={onBlurSearchInput}
        />
        <div className="hidden lg:flex text-sm items-center gap-2">
          <KeyShape character="s" />
          <span>quick access</span>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <SearchResultOptions />
        <div>search result</div>
      </div>
    </div>
  );
};

export default SearchModalComponent;
