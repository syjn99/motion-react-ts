import React, { useState } from "react";
import { ItemProps } from "./ItemContent";

const Task = ({ item }: ItemProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onClickCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div className="text-2xl">{item.title}</div>
      <div className="flex items-center">
        <input onClick={onClickCheckbox} type="checkbox" className="mr-2" />
        <span className={checked ? "line-through" : ""}>{item.body}</span>
      </div>
    </div>
  );
};
export default Task;
