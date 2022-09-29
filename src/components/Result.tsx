import React from "react";
import { InitialDataType } from "./constants";
import Highlighter from "react-highlight-words";
import ResultAvatar from "./ResultAvatar";
import ImageIcon from "./ImageIcon";
import FolderIcon from "./utils/FolderIcon";
import PlayIcon from "./PlayIcon";

interface ResultProps {
  data: InitialDataType;
  keyword: string;
}

function iconFinder(type: "image" | "folder" | "video" | "user") {
  if (type === "image") {
    return <ImageIcon />;
  } else if (type === "folder") {
    return <FolderIcon />;
  } else if (type === "video") {
    return <PlayIcon />;
  } return null;
}

const Result: React.FC<ResultProps> = ({ data, keyword }) => {
  const { id, name, childsCount, avatar, where, state, type } = data;

  return (
    <div className="flex items-center gap-2 py-4">
      <ResultAvatar avatar={avatar} alt={name} icon={iconFinder(type)} />
      <div className="flex flex-col">
        <span className="text-sm md:text-lg">
          <Highlighter
            searchWords={[keyword]}
            autoEscape={true}
            textToHighlight={name}
          />
        </span>
        <span className="text-xs md:text-base text-gray-400">
          {where ? `${where} • ${state}` : state}
        </span>
      </div>
    </div>
  );
};

export default Result;
