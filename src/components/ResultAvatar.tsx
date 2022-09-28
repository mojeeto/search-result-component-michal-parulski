import React from "react";

interface ResultAvatarProps {
  avatar: string | null;
  alt: string;
  icon: React.ReactNode | null;
}

const ResultAvatar: React.FC<ResultAvatarProps> = ({ avatar, alt, icon }) => {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden">
      {avatar ? (
        <img src={avatar} alt={alt} />
      ) : (
        <div className="flex items-center justify-center h-full bg-gray-200">{icon}</div>
      )}
    </div>
  );
};

export default ResultAvatar;
