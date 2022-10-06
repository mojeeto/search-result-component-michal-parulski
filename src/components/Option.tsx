import { Switch } from "@headlessui/react";
import React, { useState } from "react";

interface OptionProp {
  children?: React.ReactNode;
}

const Option: React.FC<OptionProp> = ({ children = <div>undefined</div> }) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const onChange = () => setEnabled((prevState) => !prevState);

  return (
    <div
      className="flex gap-10 p-2 rounded-md justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={onChange}
    >
      <div
        className={`transition-colors ${enabled ? "!text-gray-800" : "!text-gray-400"
          }`}
      >
        {children}
      </div>
      <Switch
        checked={enabled}
        className={`${enabled ? "bg-gray-900" : "bg-gray-300"}
          relative inline-flex h-[20px] w-[30px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-2.5" : "translate-x-0"}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Option;
