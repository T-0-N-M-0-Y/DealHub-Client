import { useState } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import img from "../../assets/PopUp/popupGirl.webp";
import toast, { Toaster } from "react-hot-toast";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const PromoCode = () => {
    navigator.clipboard.writeText("WELCOME50");
    toast.success("Promo code copied", {
      position: "top-center",
    });
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      } z-50 bg-black bg-opacity-70 text-white`}
    >
      <div className="w-2/3 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg bg-white bg-opacity-90 relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
          onClick={handleClose}
        >
          <ImCross />
        </button>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 items-center ">
            <div className="text-left px-5 lg:pl-8 lg:pr-0 pb-5 lg:pb-0 space-y-3 lg:space-y-5 order-2 lg:order-1">
              <p className="text-cyan-400 text-xl">Limited time only</p>
              <h2 className="text-xl lg:text-3xl font-medium lg:font-semibold text-cyan-600">
                GET 30% OFF <br />
                On your first order.
              </h2>
              <div className="flex items-center gap-3 justify-center border border-cyan-500 py-1 lg:py-2 rounded text-lg lg:text-xl font-medium lg:font-semibold">
                <p className="text-cyan-500">Promo code:</p>
                <button
                  type="button"
                  onClick={PromoCode}
                  className="cursor-pointer text-cyan-600"
                >
                  WELCOME30
                </button>
                <Toaster />
              </div>

              <button className="bg-white text-cyan-500 rounded-xl w-40 h-8 hover:bg-cyan-500 hover:text-white">
                <Link className="cart-btn-outline">Shop Now</Link>
              </button>
            </div>
            <div className="order-1 lg:order-2 mx-auto">
              <img
                className="h-[200px] md:h-[300px] lg:h-[350px] w-full object-cover"
                src={img}
                alt="pop-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
