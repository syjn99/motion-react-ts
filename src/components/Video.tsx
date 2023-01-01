import React from "react";
import { ItemProps } from "./ItemContent";

const Video = ({ item }: ItemProps) => {
  const videoId = item.body.split("=")[1];
  return (
    <div className="flex items-center">
      <iframe
        width="380"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="text-2xl ml-4">{item.title}</div>
    </div>
  );
};
export default Video;
