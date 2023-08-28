import { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setIsModalOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
      {hasCloseBtn && (
        <button className="modal-close-button" onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
