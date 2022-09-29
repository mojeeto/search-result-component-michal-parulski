export type InitialDataType = {
  type: "user" | "image" | "folder" | "video";
  id: number;
  name: string;
  where: string | null;
  state: string;
  avatar: string | null;
  childsCount: number | null;
};


export const initialData: InitialDataType[] = [
  {
    type: "user",
    id: 1,
    name: "Randall Johnsson",
    where: null,
    state: "Active Now",
    avatar: "assets/users/Randall Johnsson.jpg",
    childsCount: null,
  },
  {
    type: "folder",
    id: 2,
    name: "Random Michal Folder",
    where: null,
    state: "Edited 12m ago",
    avatar: null,
    childsCount: 12,
  },
  {
    type: "image",
    id: 3,
    name: "creative_file_frandkies.jpg",
    where: "in Photos/Assets",
    state: "Edited 12m ago",
    avatar: null,
    childsCount: 12,
  },
  {
    type: "user",
    id: 4,
    name: "Kristinge Karand",
    where: null,
    state: "Active 2d ago",
    avatar: "assets/users/Kristinge Karand.jpg",
    childsCount: null,
  },
  {
    type: "video",
    id: 5,
    name: "files_krande_michelle.avi",
    where: "in Videos",
    state: "Added 12m ago",
    avatar: null,
    childsCount: null,
  },
  {
    type: "user",
    id: 6,
    name: "Caroline Dribsson",
    where: null,
    state: "Unactived",
    avatar: "assets/users/Caroline Dribsson.jpg",
    childsCount: null,
  },
  {
    type: "user",
    id: 7,
    name: "Adam Cadribean",
    where: null,
    state: "Active 1w ago",
    avatar: "assets/users/Adam Cadribean.jpg",
    childsCount: null,
  },
  {
    type: "image",
    id: 8,
    name: "final_dribbble_presentation.jpg",
    where: "in Presentations",
    state: "Edited 1w ago",
    avatar: null,
    childsCount: null,
  },
  {
    type: "user",
    id: 9,
    name: "Margareth Cendribgssen",
    where: null,
    state: "Active 1w ago",
    avatar: "assets/users/Margareth Cendribgssen.jpg",
    childsCount: null,
  },
  {
    type: "video",
    id: 10,
    name: "dribbble_animation.avi",
    where: "in Videos",
    state: "Added 1y ago",
    avatar: null,
    childsCount: null,
  },
  {
    type: "folder",
    id: 11,
    name: "Dribbble Folder",
    where: "in Projects",
    state: "Edited 2m ago",
    avatar: null,
    childsCount: 12,
  },
];
