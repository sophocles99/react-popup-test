import { Children, useRef, useState } from "react";

const Modal = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  return (
    <dialog ref={modalRef} className="modal" open="true">
      {children}
    </dialog>
  );
};

export default Modal;
