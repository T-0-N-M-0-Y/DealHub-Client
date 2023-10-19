// Popup.js

import { useState } from "react";
import { ImCross } from "react-icons/im";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="bg-black bg-opacity-70 text-white w-1/3 p-6 rounded-lg shadow-lg">
        <button
          className="absolute md:top-[429px] md:right-[643px] text-red-500 hover:text-red-700 cursor-pointer"
          onClick={handleClose}
        >
          <ImCross></ImCross>
        </button>
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Website</h2>
        <p>This is your custom pop-up content.</p>
      </div>
    </div>
  );
};

export default Popup;
