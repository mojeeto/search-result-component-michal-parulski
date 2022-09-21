import React, { useEffect, useRef, useState } from "react";
import KeyShape from "./KeyShape";
import SearchIcon from "./SearchIcon";

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
    console.log("live")
  }

  useEffect(() => {
    if (searchInputRef) {
      window.addEventListener('keypress', eventListenerKeyPress)
    }
  }, []);

  return (
    <div className="flex flex-col w-[350px] md:w-[500px] py-5 px-3 bg-white rounded-xl text-[18px] md:text-xl transition-[height] duration-1000 shadow-stone-400 shadow-xl">
      <div className="flex gap-2 items-center text-stone-400">
        <SearchIcon />
        <input
          type="text"
          placeholder="Searching is easier"
          className="border-none outline-none text-stone-800 placeholder:font-normal placeholder:text-stone-400 font-medium flex-1"
          ref={searchInputRef}
          value={inputSearchValue}
          onChange={onChangeSearchInput}
          onBlur={onBlurSearchInput}
        />
        <div className="hidden md:flex text-sm items-center gap-2">
          <KeyShape character="s" />
          <span>quick access</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModalComponent;
