import React from "react";
import { ItemProps } from "./ItemContent";

const Note = ({ item }: ItemProps) => {
  return (
    <div>
      <div className="text-2xl">{item.title}</div>
      <div>{item.body}</div>
    </div>
  );
};
export default Note;
