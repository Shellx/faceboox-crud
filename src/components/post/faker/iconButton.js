import {
  CalendarDays,
  FileEdit,
  FileImage,
  MapPin,
  Smile,
  ThumbsUp,
  Trash2,
  Video,
} from "lucide-react";

export const iconButton = [
  {
    name: "Like",
    icon: <ThumbsUp />,
  },
  {
    name: "Edit",
    icon: <FileEdit />,
  },
  {
    name: "Delete",
    icon: <Trash2 />,
  },
];

export const iconPosting = [
  {
    name: "Photos",
    icon: <FileImage color="#66ff66" fill="white" />,
  },
  {
    name: "Video",
    icon: <Video color="red" fill="red" />,
  },
  {
    name: "Add Location",
    icon: <MapPin color="white" fill="#ff3333" />,
  },
  {
    name: "Creative event",
    icon: <CalendarDays color="#ff3333" fill="white" />,
  },
  {
    name: "Feeling/activity",
    icon: <Smile fill="#ffc34d" color="white" />,
  },
];
