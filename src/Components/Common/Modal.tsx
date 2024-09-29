import React, { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
}

const PopUpModal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className="z-20 w-[100vw] h-[100vh] bg-black bg-opacity-50 absolute top-0 left-0">
      <div className="shadow-md min-w-[30%] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded min-h-16">
        <div className="flex border-b-2 pb-4 mb-4">
          {" "}
          <div className="flex items-center justify-between w-[100%]">
            <div className="text-2xl text-semibold ">{title}</div>
            <div onClick={onClose} className=" cursor-pointer">
              <AiOutlineClose size={24} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopUpModal;
