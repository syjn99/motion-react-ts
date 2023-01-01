import React, { MouseEventHandler, useCallback, useState } from "react";
import Footer from "./components/Footer";
import ItemContent from "./components/ItemContent";
import Modal from "./components/Modal";

type ModalType = "IMAGE" | "VIDEO" | "NOTE" | "TASK" | "";
export type Item = {
  itemType: ModalType;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>("");
  const [items, setItems] = useState<Item[]>([]);

  const onClickToggleModal = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setModalType(e.currentTarget.innerText as ModalType);
      setModalOpen(!modalOpen);
    },
    [modalOpen]
  );

  const addItem = useCallback(
    (item: Item) => {
      setItems([...items, item]);
    },
    [items]
  );

  const deleteItem = (e: React.MouseEvent<HTMLElement>) => {
    const targetId = (e.currentTarget.parentElement as Element).id;
    const newItems = items.filter((item) => item.id.toString() !== targetId);
    setItems(newItems);
  };

  const modalTypeList: ModalType[] = ["IMAGE", "VIDEO", "NOTE", "TASK"];

  return (
    <div className="bg-wall bg-no-repeat bg-cover bg-center h-screen flex">
      <div className="w-3/5 h-screen py-4 m-auto flex flex-col justify-between">
        <header className="bg-black w-full h-1/5 flex flex-col justify-center items-center">
          <div className="text-white text-center text-3xl pb-3">MOTION</div>
          <div className="text-white flex justify-around w-2/3">
            {modalTypeList.map((_modalType: ModalType) => {
              return (
                <button
                  className="bg-red-500 px-2 py-1 rounded"
                  onClick={onClickToggleModal}
                  key={_modalType}
                  id={_modalType}
                >
                  {_modalType}
                </button>
              );
            })}
          </div>
        </header>
        <div className=" bg-gray-600/50 w-full h-full overflow-auto">
          {items.map((item: Item) => (
            <div
              key={item.id}
              className=" border-gray-500 m-4 p-2 flex justify-between items-center shadow-xl text-white"
              id={item.id.toString()}
            >
              <ItemContent item={item} />
              <div
                className="hover:cursor-pointer text-red-500 text-xl"
                onClick={deleteItem}
              >
                X
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
      {modalOpen && (
        <Modal
          onClickToggleModal={onClickToggleModal}
          modalType={modalType}
          addItem={addItem}
        />
      )}
    </div>
  );
}

export default App;
