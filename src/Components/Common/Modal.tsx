import React, { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <div className="shadow-md min-w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded min-h-16">
      <div className="flex border-b-2 pb-4 mb-4">
        {" "}
        <div className="text-2xl text-semibold">{title}</div>
        <div onClick={onClose} className="ml-auto cursor-pointer self-end">
          <AiOutlineClose />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Modal;
