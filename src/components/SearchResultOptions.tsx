import React, { useContext, useRef } from "react";
import CustomText from "./utils/CustomText";
import DynamicNumber from "./DynamicNumber";
import { TypesCount } from "./SearchResultSection";
import SettingOption from "./SettingOption";
import { SearchModalContext } from "./SearchModalContext";

interface SearchResultOptionsProps {
  typesCount: TypesCount;
}

const SearchResultOptions: React.FC<SearchResultOptionsProps> = ({
  typesCount,
}) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { searchModalData } = useContext(SearchModalContext)!;

  const handleUnderlineRef: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const parent = listRef.current;
    const underline = underlineRef.current;
    if (!parent || !underline) {
      return;
    }
    const target = e.currentTarget;
    const uWidth = target.offsetWidth + 5;
    const targetXPosition = target.getBoundingClientRect().x;
    const parentXPosition = parent.getBoundingClientRect().x;
    const uXPosition = targetXPosition - parentXPosition + 28;
    underline.style.width = `${uWidth}px`;
    underline.style.left = `${uXPosition}px`;

    const parentChildrenCount = parent.children.length;
    for (let i = 0; i < parentChildrenCount; ++i) {
      const child = parent.children.item(i);
      if (!child) {
        break;
      }
      const activeClassName = "!text-gray-700";
      if (child.classList.contains(activeClassName)) {
        child.classList.remove(activeClassName);
      }
      target.classList.add(activeClassName);
    }
  };

  return (
    <div
      className="hidden lg:flex items-center border-b-2 text-[16px] md:text-lg justify-between w-full px-8 animate-fadeUp relative z-10"
      style={{ animationDelay: "0.5s" }}
    >
      <div
        className="flex items-center gap-5 pb-1 text-gray-400 scrollbar-hide overflow-x-scroll"
        ref={listRef}
      >
        <CustomText
          className="cursor-pointer !text-gray-700"
          onClick={handleUnderlineRef}
          tagContent={<DynamicNumber end={typesCount.all} />}
        >
          <span>All</span>
        </CustomText>
        {searchModalData.options.map((option, index) => {
          if (!option.state) return;
          const counter =
            option.title === "People" ? typesCount.users : typesCount.files;
          return (
            <CustomText
              className="cursor-pointer"
              onClick={handleUnderlineRef}
              tagContent={<DynamicNumber end={counter} />}
              key={index}
            >
              {option.icon}
              <span>{option.title}</span>
            </CustomText>
          );
        })}
      </div>
      <div
        className="border-b-2 border-black w-[57px] bg-black absolute transition-all -bottom-0.5 left-7"
        ref={underlineRef}
      ></div>
      <SettingOption />
    </div>
  );
};

export default SearchResultOptions;
