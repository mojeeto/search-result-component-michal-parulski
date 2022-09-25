import React, { useRef } from "react";
import CustomText from "./utils/CustomText";
import PaperClip from "./utils/PaperClip";
import UserIcon from "./utils/UserIcon";
import SettingIcon from "./utils/SettingIcon";

const SearchResultOptions: React.FC = () => {
  const underlineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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
    const uXPosition = targetXPosition - parentXPosition - 2.5;
    underline.style.width = `${uWidth}px`;
    underline.style.left = `${uXPosition}px`;
  };

  return (
    <div className="hidden lg:flex border-b-2 text-[16px] md:text-lg justify-between w-full px-4 ">
      <div className="flex gap-5 relative pb-1" ref={listRef}>
        <CustomText
          className="cursor-pointer"
          tagContent="1"
          onClick={handleUnderlineRef}
        >
          <span>All</span>
        </CustomText>
        <CustomText
          className="cursor-pointer hidden lg:flex"
          tagContent="1"
          onClick={handleUnderlineRef}
        >
          <PaperClip />
          <span>Files</span>
        </CustomText>
        <CustomText
          className="cursor-pointer"
          tagContent="1"
          onClick={handleUnderlineRef}
        >
          <UserIcon />
          <span>People</span>
        </CustomText>
        <div
          className="border-b-2 border-black w-[65px] bg-black absolute -bottom-0.5 left-[-2.5px] transition-all"
          ref={underlineRef}
        ></div>
      </div>
      <div>
        <SettingIcon />
      </div>
    </div>
  );
};

export default SearchResultOptions;
