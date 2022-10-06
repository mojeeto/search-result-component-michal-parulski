import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import BarIcon from "./utils/BarIcon";
import ChatIcon from "./utils/ChatIcon";
import PaperClip from "./utils/PaperClip";
import UserIcon from "./utils/UserIcon";

export type SearchModalDataType = {
  options: SearchModalOptionType[];
};

export type SearchModalOptionType = {
  id: number;
  title: string;
  icon: React.ReactNode;
  state: boolean;
};

const initialSearchModalData: SearchModalDataType = {
  options: [
    { id: 0, title: "Files", icon: <PaperClip />, state: true },
    { id: 1, title: "People", icon: <UserIcon />, state: true },
    { id: 2, title: "Chats", icon: <ChatIcon />, state: false },
    { id: 3, title: "Lists", icon: <BarIcon />, state: false },
  ],
};

export const SearchModalContext = createContext<{
  searchModalData: SearchModalDataType;
  setSearchModalData: Dispatch<SetStateAction<SearchModalDataType>>;
} | null>(null);

interface SearchModalContextProviderProps {
  children: React.ReactNode;
}

export default function SearchModalContextProvider({
  children,
}: SearchModalContextProviderProps) {
  const [searchModalData, setSearchModalData] = useState<SearchModalDataType>(
    initialSearchModalData
  );
  return (
    <SearchModalContext.Provider
      value={{ searchModalData, setSearchModalData }}
    >
      {children}
    </SearchModalContext.Provider>
  );
}
