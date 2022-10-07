import React, { useContext, useState } from "react";
import SettingIcon from "./utils/SettingIcon";
import Option from "./Option";
import CustomText from "./utils/CustomText";
import {
  SearchModalContext,
  SearchModalOptionType,
} from "./SearchModalContext";

const SettingOption: React.FC = () => {
  const [isActive, setState] = useState<boolean>(false);
  const { searchModalData, setSearchModalData } =
    useContext(SearchModalContext)!;

  const onClick = () => {
    setState((prevState) => !prevState);
  };

  const onStateChange = (updatedOption: SearchModalOptionType) => {
    const newOptionData = searchModalData.options.map((option) => {
      if (option.id !== updatedOption.id) return option;
      return updatedOption;
    });
    setSearchModalData({ ...searchModalData, options: newOptionData });
  };

  return (
    <div className="relative z-10">
      <button onClick={onClick} className="hover:bg-gray-100 rounded-lg p-1">
        <SettingIcon
          className={`transition-transform stroke-gray-400 ${isActive ? "rotate-[90deg]" : "rotate-0"
            }`}
        />
      </button>
      {isActive && (
        <div className="absolute p-1 right-0 flex flex-col bg-white z-10 rounded-lg border-[1px] border-gray-300 shadow-md shadow-gray-300">
          {searchModalData.options.map((option, index) => {
            return (
              <Option data={option} onStateChange={onStateChange} key={index}>
                <CustomText childrenClassName="gap-2">
                  {option.icon}
                  <span>{option.title}</span>
                </CustomText>
              </Option>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SettingOption;
