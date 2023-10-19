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
        isOpen ? "block" : "hidden"
      } z-50 bg-black bg-opacity-70 text-white`}
    >
      <div className="w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg bg-orange-400 bg-opacity-50 text-white relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
          onClick={handleClose}
        >
          <ImCross />
        </button>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Hello Team Tech Army
        </h2>
        <p className="text-base md:text-lg lg:text-xl">
          I Love You Too . . . . . .
        </p>
      </div>
    </div>
  );
};

export default Popup;
