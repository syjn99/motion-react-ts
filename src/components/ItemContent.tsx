import React, { PropsWithChildren } from "react";
import { Item } from "../App";
import Image from "./Image";
import Note from "./Note";
import Task from "./Task";
import Video from "./Video";

export type ItemProps = {
  item: Item;
};

const ItemContent = ({ item }: ItemProps) => {
  switch (item.itemType) {
    case "IMAGE":
      return <Image item={item} />;
    case "VIDEO":
      return <Video item={item} />;
    case "NOTE":
      return <Note item={item} />;
    case "TASK":
      return <Task item={item} />;
    default:
      throw new Error("invalid itemType");
  }
};

export default ItemContent;
