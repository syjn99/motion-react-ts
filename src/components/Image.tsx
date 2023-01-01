import React from "react";
import { ItemProps } from "./ItemContent";

const Image = ({ item }: ItemProps) => {
  return (
    <div className="flex items-center">
      <img src="https://picsum.photos/380/200" />
      <div className="text-2xl ml-4">{item.title}</div>
    </div>
  );
};
export default Image;
