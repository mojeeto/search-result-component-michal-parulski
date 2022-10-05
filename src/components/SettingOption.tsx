import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import SettingIcon from "./utils/SettingIcon";

const SettingOption: React.FC = () => {
  const [isActive, setState] = useState<boolean>(false);

  const onClick = () => {
    setState((prevState) => !prevState);
    console.log(isActive);
  };

  return (
    <Menu as="div" className="relative text-left">
      <Menu.Button className="hover:bg-gray-100 p-0.5 rounded-lg">
        <SettingIcon
          className={`transition-transform stroke-gray-400 ${isActive ? "rotate-[90deg]" : "rotate-0"
            }`}
          onClick={onClick}
        />
      </Menu.Button>
      <Transition as={Fragment}>
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`z-10 ${active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Edit
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SettingOption;
