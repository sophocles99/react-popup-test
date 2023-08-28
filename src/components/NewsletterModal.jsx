import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const NewsletterModal = ({ isOpen, onSubmit, onClose }) => {
  const initialNewsletterModalData = {
    email: "",
    frequency: "weekly",
  };
  const inputRef = useRef(null);
  const [formState, setFormState] = useState(initialNewsletterModalData);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      });
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };
};
