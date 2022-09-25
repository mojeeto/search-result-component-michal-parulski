import React from "react";
import { KeyShapeProps } from "./../interface";

const KeyShape: React.FC<KeyShapeProps> = ({ character }) => {
  return (
    <div className="h-9 w-9 z-10 border-2 border-stone-300 border-b-stone-200 relative flex items-center justify-center text-lg rounded-xl">
      {character.charAt(0)}
      <div className="h-5 w-9 z-0 border-2 border-stone-300 border-t-0 rounded-b-xl absolute -bottom-1.5"></div>
    </div>
  );
};

export default KeyShape;
