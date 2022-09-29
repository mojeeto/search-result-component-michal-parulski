import React, { useRef } from "react";
import CustomText from "./utils/CustomText";
import PaperClip from "./utils/PaperClip";
import UserIcon from "./utils/UserIcon";
import SettingIcon from "./utils/SettingIcon";
import DynamicNumber from "./DynamicNumber";

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
      className="hidden lg:flex items-center border-b-2 text-[16px] md:text-lg justify-between w-full px-8 animate-fadeUp"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="flex items-center gap-5 relative pb-1" ref={listRef}>
        <CustomText
          className="cursor-pointer !text-gray-700"
          onClick={handleUnderlineRef}
          tagContent={<DynamicNumber end={9} />}
        >
          <span>All</span>
        </CustomText>
        <CustomText
          className="cursor-pointer hidden lg:flex"
          onClick={handleUnderlineRef}
          tagContent={<DynamicNumber end={9} />}
        >
          <PaperClip />
          <span>Files</span>
        </CustomText>
        <CustomText
          className="cursor-pointer"
          onClick={handleUnderlineRef}
          tagContent={<DynamicNumber end={9} />}
        >
          <UserIcon />
          <span>People</span>
        </CustomText>
        <div
          className="border-b-2 border-black w-[57px] bg-black absolute -bottom-0.5 left-[-2.5px] transition-all"
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
