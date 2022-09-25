import React from "react";
import CustomText from "./utils/CustomText";
import PaperClip from "./utils/PaperClip";
import UserIcon from "./utils/UserIcon";
import SettingIcon from "./utils/SettingIcon";

const SearchResultOptions: React.FC = () => {
  return (
    <div className="hidden lg:flex border-b-2 text-[16px] md:text-lg justify-between w-full px-4 ">
      <div className="flex gap-5 relative pb-1">
        <CustomText className="cursor-pointer" tagContent="1">
          <span>All</span>
        </CustomText>
        <CustomText className="cursor-pointer hidden lg:flex" tagContent="1">
          <PaperClip />
          <span>Files</span>
        </CustomText>
        <CustomText className="cursor-pointer" tagContent="1">
          <UserIcon />
          <span>People</span>
        </CustomText>
        <div className="border-b-2 border-black w-[60px] bg-black absolute -bottom-0.5"></div>
      </div>
      <div>
        <SettingIcon />
      </div>
    </div>
  );
};

export default SearchResultOptions;
