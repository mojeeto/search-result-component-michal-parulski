import React, { useContext, useRef, useState } from "react";
import CustomText from "./utils/CustomText";
import DynamicNumber from "./DynamicNumber";
import { TypesCount } from "./SearchResultSection";
import SettingOption from "./SettingOption";
import {
  SearchModalContext,
  SearchModalOptionType,
} from "./SearchModalContext";

interface SearchResultOptionsProps {
  typesCount: TypesCount;
}

type activeOptionType = {
  option: SearchModalOptionType | null;
};

const SearchResultOptions: React.FC<SearchResultOptionsProps> = ({
  typesCount,
}) => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { searchModalData } = useContext(SearchModalContext)!;
  const [activeOption, setActiveOption] = useState<activeOptionType>({
    option: null,
  });

  const handleUnderlineRef = (
    e: React.MouseEvent<HTMLDivElement>,
    option: SearchModalOptionType | null
  ) => {
    const parent = listRef.current;
    const underline = underlineRef.current;
    if (!parent || !underline) {
      return;
    }
    const target = e.currentTarget;
    const uWidth = target.offsetWidth + 5;
    const targetXPosition = target.getBoundingClientRect().x;
    const parentXPosition = parent.getBoundingClientRect().x;
    const uXPosition = targetXPosition - parentXPosition + 29;
    underline.style.width = `${uWidth}px`;
    underline.style.left = `${uXPosition}px`;

    setActiveOption({ option: option });
  };

  const onScroll = () => {
    console.log("Scroll");
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className="hidden lg:flex items-center text-[16px] md:text-lg justify-between w-full px-8 animate-fadeUp relative z-10"
        style={{ animationDelay: "0.5s" }}
      >
        <div
          className="flex items-center gap-5 pb-1 text-gray-400 scrollbar-hide overflow-x-scroll"
          ref={listRef}
          onScroll={onScroll}
        >
          <CustomText
            className={`cursor-pointer ${!activeOption.option ? "!text-gray-700" : ""
              }`}
            onClick={(e) =>
              handleUnderlineRef(e as React.MouseEvent<HTMLDivElement>, null)
            }
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
                className={`cursor-pointer ${activeOption.option === option ? "!text-gray-700" : ""
                  }`}
                onClick={(e) =>
                  handleUnderlineRef(
                    e as React.MouseEvent<HTMLDivElement>,
                    option
                  )
                }
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
          className="border-b-2 border-black w-[57px] bg-black absolute transition-all -bottom-0.5 left-[29px]"
          ref={underlineRef}
        ></div>
        <SettingOption />
      </div>
      <div
        className="hidden lg:block w-full h-0.5 bg-gray-200 animate-fadeUp"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default SearchResultOptions;
