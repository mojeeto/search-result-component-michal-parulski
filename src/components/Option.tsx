import { Switch } from "@headlessui/react";
import React from "react";
import { SearchModalOptionType } from "./SearchModalContext";

interface OptionProp {
  children?: React.ReactNode;
  data: SearchModalOptionType;
  onStateChange: (updatedOption: SearchModalOptionType) => void;
}

const Option: React.FC<OptionProp> = ({
  children = <div>undefined</div>,
  data,
  onStateChange,
}) => {
  const onClick = () => onStateChange({ ...data, state: !data.state });
  return (
    <div
      className="flex gap-10 p-2 rounded-md justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <div
        className={`transition-colors ${data.state ? "!text-gray-800" : "!text-gray-400"
          }`}
      >
        {children}
      </div>
      <Switch
        checked={data.state}
        className={`${data.state ? "bg-gray-900" : "bg-gray-300"}
          relative inline-flex h-[20px] w-[30px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${data.state ? "translate-x-2.5" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Option;
