import React from "react";
import { CustomTextProps } from "components/interface";

const CustomText: React.FC<CustomTextProps> = ({
  children,
  childrenClassName,
  className,
  tagContent,
  onClick,
}) => {
  return (
    <div
      className={`flex gap-2 items-center ${className}`}
      onClick={onClick}
    >
      <div className={`inline-flex gap-1 items-center ${childrenClassName}`}>{children}</div>
      <div className="flex justify-center px-2 items-center text-gray-400 rounded-lg bg-gray-200 text-xs md:text-sm">
        {tagContent}
      </div>
    </div>
  );
};

export default CustomText;
