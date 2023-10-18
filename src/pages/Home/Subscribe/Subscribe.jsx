import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-evenly gap-4 py-6 md:py-12 lg:py-20 bg-gray-100 mt-6 md:mt-12 lg:mt-16 px-4 md:px-3 lg:px-3">
      <div className="text-center md:text-left lg:w-1/4">
        <h1 className="text-2xl font-extrabold">
          DEALHUB <span className="text-red-600">.</span>
        </h1>
        <p className="text-xs text-slate-500">
          Easy and trusted online platform in Bangladesh
        </p>
      </div>
      <div className="mt-4 md:mt-0 lg:w-1/4 lg:flex items-center">
        <input
          type="email"
          placeholder="Your email address.."
          className="border px-4 py-2 border-gray-400 w-full md:w-48 lg:w-60"
        />
        <button
          className="px-3 py-2 rounded bg-red-700 text-white font-semibold ml-2 lg:ml-4"
        >
          SUBSCRIBE
        </button>
      </div>
      <div className="mt-4 md:mt-0 lg:w-1/4 text-center md:text-left">
        <h1 className="inline-flex items-center text-slate-500">
          Follow us on:
          <span className="flex gap-3 ml-4">
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Subscribe;
