import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white py-4 mb-4 px-6 text-xl  font-semibold">
      <div className="flex justify-evenly">
        <Link>HOME</Link>
        <Link>CONTACT</Link>
        <Link>BLOG</Link>
        <Link>VENDORS</Link>
        <Link>COMPARE</Link>
      </div>
    </div>
  );
};

export default Navbar;
