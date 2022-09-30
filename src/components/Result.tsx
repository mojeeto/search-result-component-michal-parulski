import React, { useEffect, useState } from "react";
import { InitialDataType } from "./constants";
import Highlighter from "react-highlight-words";
import ResultAvatar from "./ResultAvatar";
import ImageIcon from "./utils/ImageIcon";
import FolderIcon from "./utils/FolderIcon";
import PlayIcon from "./utils/PlayIcon";
import CustomText from "./utils/CustomText";
import ResultOptions from "./ResultOptions";

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
  }
  return null;
}

export type StateType = null | "active" | "notActive" | "busy";

const Result: React.FC<ResultProps> = ({ data, keyword }) => {
  const [userState, setUserState] = useState<StateType>(null);
  const [optionsShow, setOptionsShow] = useState<boolean>(false);
  const { name, childsCount, avatar, where, state, type } = data;

  const onMouseOver = () => {
    setOptionsShow(true);
  };
  const onMouseLeave = () => {
    setOptionsShow(false);
  };

  useEffect(() => {
    const split = state.split(" ");
    if (split[0] === "Unactived") {
      setUserState("notActive");
    } else if (split[0] === "Active") {
      if (split[1] === "Now") {
        setUserState("active");
      } else {
        setUserState("busy");
      }
    }
  }, [state]);

  return (
    <div
      className="flex items-center justify-between py-4 px-5 md:px-8 transition-colors hover:bg-gray-100 cursor-pointer"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-2">
        <ResultAvatar
          avatar={avatar}
          alt={name}
          icon={iconFinder(type)}
          state={userState}
        />
        <div className="flex flex-col">
          <CustomText
            className="text-sm md:text-lg"
            tagContent={childsCount && `${childsCount} Files`}
          >
            <Highlighter
              searchWords={[keyword]}
              autoEscape={true}
              textToHighlight={name}
            />
          </CustomText>
          <span className="text-xs md:text-base text-gray-400">
            {where ? `${where} • ${state}` : state}
          </span>
        </div>
      </div>
      {optionsShow && <ResultOptions className="hidden md:flex" />}
    </div>
  );
};

export default Result;
