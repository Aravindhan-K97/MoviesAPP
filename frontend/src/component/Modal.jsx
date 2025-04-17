import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Close modal on Escape key press
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose} // Close modal on click outside
          ></div>
          <div className="absolute bg-white p-6 rounded-lg z-10 max-w-md w-full shadow-lg transform transition-all duration-300 ease-in-out">
            <button
              className="absolute top-2 right-2 text-black font-semibold hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
