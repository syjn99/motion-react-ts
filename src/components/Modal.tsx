import React, {
  EventHandler,
  MouseEventHandler,
  PropsWithChildren,
  useState,
} from "react";
import { Item } from "../App";

type ModalType = {
  onClickToggleModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  modalType: "IMAGE" | "VIDEO" | "NOTE" | "TASK" | "";
  addItem: (item: Item) => void;
};

const Modal = ({
  onClickToggleModal,
  modalType,
  addItem,
}: PropsWithChildren<ModalType>) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const bodyType: string =
    modalType === "IMAGE" || modalType === "VIDEO" ? "URL" : "Body";

  return (
    <div className="h-screen w-screen flex items-center justify-center fixed ">
      <button
        className="h-screen w-screen fixed top-0 z-10 bg-black opacity-20"
        onClick={(e) => {
          e.preventDefault();
          onClickToggleModal(e);
        }}
      ></button>
      <div className="w-2/5 h-1/5 bg-white z-50 ">
        <div>
          <label htmlFor={"title"}>Title</label>
          <br />
          <input
            type={"text"}
            id={"title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Enter the title..."}
          />
        </div>
        <div>
          <label htmlFor={bodyType}>{bodyType}</label>
          <br />
          <input
            type={"text"}
            id={bodyType}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={`Enter the ${bodyType}...`}
          />
        </div>
        <button
          onClick={(e) => {
            console.log(title, body);
            addItem({
              itemType: modalType,
              id: Date.now(),
              title,
              body,
            });
            onClickToggleModal(e);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
