import React, { useState } from "react";
import SettingIcon from "./utils/SettingIcon";
import Option from "./Option";
import CustomText from "./utils/CustomText";
import PaperClip from "./utils/PaperClip";
import UserIcon from "./utils/UserIcon";
import ChatIcon from "./utils/ChatIcon";
import BarIcon from "./utils/BarIcon";

const SettingOption: React.FC = () => {
  const [isActive, setState] = useState<boolean>(false);

  const onClick = () => {
    setState((prevState) => !prevState);
    console.log(isActive);
  };

  return (
    <div className="relative">
      <button onClick={onClick} className="hover:bg-gray-100 rounded-lg p-1">
        <SettingIcon
          className={`transition-transform stroke-gray-400 ${isActive ? "rotate-[90deg]" : "rotate-0"
            }`}
        />
      </button>
      {isActive && (
        <div className="absolute p-1 right-0 flex flex-col bg-white z-10 rounded-lg border-[1px] border-gray-300 shadow-md shadow-gray-300">
          <Option>
            <CustomText childrenClassName="gap-2">
              <PaperClip className="stroke-gray-400" />
              <span>Files</span>
            </CustomText>
          </Option>
          <Option>
            <CustomText childrenClassName="gap-2">
              <UserIcon className="stroke-gray-400" />
              <span>People</span>
            </CustomText>
          </Option>
          <Option>
            <CustomText childrenClassName="gap-2">
              <ChatIcon className="stroke-gray-400" />
              <span>Chats</span>
            </CustomText>
          </Option>
          <Option>
            <CustomText childrenClassName="gap-2">
              <BarIcon className="stroke-gray-400" />
              <span>Lists</span>
            </CustomText>
          </Option>
        </div>
      )}
    </div>
  );
};

export default SettingOption;
