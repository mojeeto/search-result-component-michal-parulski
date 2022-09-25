import React from "react";
import { CustomTextProps } from "components/interface";

const CustomText: React.FC<CustomTextProps> = ({
  children,
  className,
  tagContent,
  onClick
}) => {
  return (
    <div className={`flex gap-2 items-center ${className}`} onClick={onClick}>
      {children}
      {tagContent && (
        <div className="flex justify-center px-3 items-center text-gray-400 rounded-lg bg-gray-200">
          {tagContent}
        </div>
      )}
    </div>
  );
};

export default CustomText;
