import React, { useState } from "react";
import SettingIcon from "./utils/SettingIcon";

const SettingOption: React.FC = () => {
  const [isActive, setState] = useState<boolean>(false);

  const onClick = () => {
    setState((prevState) => !prevState);
    console.log(isActive);
  };

  return (
    <div>
      <div className=" hover:bg-gray-100 p-0.5 rounded-lg">
        <SettingIcon
          className={`cursor-pointer transition-transform stroke-gray-400 ${isActive ? "rotate-[90deg]" : "rotate-0"
            }`}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default SettingOption;
