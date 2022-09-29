import React from "react";
import { StateType } from "./Result";

interface ResultAvatarProps {
  avatar: string | null;
  alt: string;
  icon: React.ReactNode | null;
  state?: StateType;
}

const ResultAvatar: React.FC<ResultAvatarProps> = ({
  avatar,
  alt,
  icon,
  state = null,
}) => {
  return (
    <div className="relative">
      <div className="w-11 h-11 rounded-xl overflow-hidden">
        {avatar ? (
          <img src={avatar} alt={alt} />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            {icon}
          </div>
        )}
      </div>
      {state && (
        <div
          className={`w-4 h-4 rounded-full absolute -bottom-1 -right-1 border-2 border-white ${state === "active"
            ? "bg-green-400"
            : state === "notActive"
              ? "bg-red-400"
              : "bg-orange-400"
            }`}
        ></div>
      )}
    </div>
  );
};

export default ResultAvatar;
